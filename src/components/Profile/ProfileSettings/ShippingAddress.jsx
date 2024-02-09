import { useFormik } from 'formik';
import { Button, Container, Form, Spinner } from 'react-bootstrap';
import * as Yup from 'yup';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import { Suspense, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Await,
  Link,
  useActionData,
  useLoaderData,
  useNavigation,
  useOutletContext,
  useSubmit,
} from 'react-router-dom';
import { useEffectOnce } from 'react-use';
import postalCodes from 'postal-codes-js';
import HeaderNavigation from '@/components/UI/GlobalUI/HeaderNavigation';
import useCheckScreenSize from '@/hooks/useCheckScreenSize';
import { settingsActions } from '@/store/settings';
import PopupModal from '@/components/UI/GlobalUI/PopupModal';
import useParentUrl from '@/hooks/useParentUrl';
import useManageActionData from '@/hooks/useManageActionData';
import './ShippingAddress.scss';

const ShippingAddress = () => {
  const submit = useSubmit();
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const actionData = useActionData();
  const setDisplayProfilePanel = useOutletContext();
  const { getGeoData, getProfileSettings } = useLoaderData();
  const { id } = useSelector((state) => state.account);
  const { addressInfo } = useSelector((state) => state.settings);
  const [phoneNumber, setPhoneNumber] = useState(addressInfo?.phoneNumber);
  const [phoneNumberFocused, setPhoneNumberFocused] = useState(false);
  const [provinceCode, setProvinceCode] = useState(addressInfo?.provinceCode);
  const [provinceName, setProvinceName] = useState(addressInfo?.provinceName);
  const [popup, setPopup] = useState(false);
  const countryRef = useRef();
  const { customError } = useManageActionData(actionData);
  const { isScreenMobile } = useCheckScreenSize();
  const { originPath } = useParentUrl();

  const submittingState = navigation.state === 'submitting';

  useEffect(() => {
    const getShippingAddressData = async () => {
      const data = await getProfileSettings(id, 'shipping address');
      dispatch(settingsActions.setAddress(data));
    };

    getShippingAddressData();
  }, [dispatch, getProfileSettings, id]);

  useEffectOnce(() => {
    setDisplayProfilePanel(true);
  });

  const countryName = countryRef.current?.previousSibling
    .querySelector('.PhoneInputCountrySelect')
    .querySelector('option:checked').value;

  const provinceChangeHandler = (event) => {
    setProvinceName(
      event.target.querySelector('option:checked').getAttribute('name')
    );
    setProvinceCode(event.target.value);
  };

  const getProvinces = countryName && getGeoData(countryName);
  const getCities =
    provinceCode !== null && getGeoData(countryName, provinceCode);

  console.log(actionData);

  const formik = useFormik({
    initialValues: {
      fullName: addressInfo?.fullName || '',
      province: addressInfo?.province || '',
      city: addressInfo?.city || '',
      street: addressInfo?.street || '',
      postalCode: addressInfo?.postalCode || '',
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(2, 'Too Short!')
        .max(25, 'Too Long!')
        .required('Required'),

      province: Yup.string().required('Required'),

      city: Yup.string().required('Required'),

      street: Yup.string()
        .min(2, 'Too Short!')
        .max(25, 'Too Long!')
        .required('Required'),

      postalCode: Yup.string()
        .test('Valid', 'Invalid postal code', (value) => {
          const result = postalCodes.validate(countryName, value);
          if (result === true) {
            return true;
          } else {
            return false;
          }
        })
        .required('Required'),
    }),
    onSubmit: (values) => {
      const addressInfo = {
        ...values,
        province: provinceName,
        country: countryName,
        phoneNumber,
      };
      dispatch(settingsActions.setAddress(addressInfo));
      submit(addressInfo, { method: 'PATCH' });
      setPopup(true);
    },
  });

  const validationCheck = (name) => formik.errors[name] && formik.touched[name];

  const renderGeoData = (
    geoDataName,
    getGeoDataFunction,
    name,
    onGeoDataChangeHandler
  ) => {
    const dislaySelect =
      addressInfo && addressInfo[name] !== undefined
        ? addressInfo[name] !== undefined
        : geoDataName !== undefined &&
          geoDataName !== 'ZZ' &&
          geoDataName !== null;

    return (
      dislaySelect && (
        <Form.Select
          className={`select p-3 fw-light  ${
            validationCheck(name) ? 'border-danger' : ''
          }`}
          id={name}
          {...formik.getFieldProps(name)}
          onChange={(event) => {
            onGeoDataChangeHandler && onGeoDataChangeHandler(event);
            formik.handleChange(event);
          }}
        >
          {addressInfo && addressInfo[name] ? (
            <option>{addressInfo[name]}</option>
          ) : (
            <option>{`Select ${
              name === 'province' ? 'Province' : 'City'
            }`}</option>
          )}
          <Suspense fallback={<option disabled>Loading...</option>}>
            <Await resolve={getGeoDataFunction}>
              {(loadedGeoData) => {
                if (loadedGeoData instanceof Response || !loadedGeoData) return;
                return loadedGeoData.map((data) => (
                  <option key={data.id} name={data.name} value={data.iso2}>
                    {data.name}
                  </option>
                ));
              }}
            </Await>
          </Suspense>
        </Form.Select>
      )
    );
  };

  return (
    <Container className="mb-6">
      {isScreenMobile && <HeaderNavigation page="Shipping Address" />}
      <Form className="mt-2 d-flex flex-column" onSubmit={formik.handleSubmit}>
        <Form.Group className="mb-2">
          <Form.Label className="fw-medium">
            Full Name
            {validationCheck('fullName') && (
              <span className="text-danger"> * </span>
            )}
          </Form.Label>
          <Form.Control
            className={`p-3 ${
              validationCheck('fullName') ? 'border-danger' : ''
            }`}
            type="text"
            id="fullName"
            placeholder="Enter full name"
            {...formik.getFieldProps('fullName')}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label className="fw-medium">Phone Number</Form.Label>
          <PhoneInput
            ref={countryRef}
            international
            placeholder="Enter phone number"
            value={
              addressInfo?.phoneNumber ? addressInfo?.phoneNumber : phoneNumber
            }
            onChange={setPhoneNumber}
            onFocus={() => setPhoneNumberFocused(true)}
            className={`${
              phoneNumber === undefined && phoneNumberFocused ? 'error' : ''
            }`}
          />
        </Form.Group>
        <Form.Group className={`${countryName && 'mb-3'}`}>
          {renderGeoData(
            countryName,
            getProvinces,
            'province',
            provinceChangeHandler
          )}
        </Form.Group>
        <Form.Group className={`${provinceCode && 'mb-3'}`}>
          {renderGeoData(provinceCode, getCities, 'city')}
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label className="fw-medium">
            Street Address
            {validationCheck('street') && (
              <span className="text-danger"> * </span>
            )}
          </Form.Label>
          <Form.Control
            className={`p-3 ${
              validationCheck('street') ? 'border-danger' : ''
            }`}
            type="text"
            id="street"
            placeholder="Enter street address"
            {...formik.getFieldProps('street')}
          />
        </Form.Group>
        <Form.Group className="mb-4">
          <Form.Label className="fw-medium">
            Postal Code
            {validationCheck('postalCode') && (
              <span className="text-danger"> * </span>
            )}
          </Form.Label>
          <Form.Control
            className={`p-3 ${
              validationCheck('postalCode') ? 'border-danger' : ''
            }`}
            type="text"
            id="postalCode"
            placeholder="Enter postal code"
            {...formik.getFieldProps('postalCode')}
          />
        </Form.Group>
        <Button
          variant="dark"
          className="p-3 align-self-md-end px-md-5 rounded-3 py-3 d-flex align-items-center justify-content-center gap-2"
          type="submit"
          onClick={() => formik.setFieldValue('intent', 'address')}
        >
          {submittingState ? 'Saving' : 'Save'}
          {submittingState && <Spinner />}
        </Button>
      </Form>
      <PopupModal
        title={
          customError
            ? customError[0].message
            : 'Your shipping address has been saved'
        }
        show={popup}
        onClose={() => setPopup(false)}
      >
        <Button variant="white" onClick={() => setPopup(false)}>
          Close
        </Button>
        <Link to={`/${originPath}/profile`} className="btn btn-dark">
          Go to profile
        </Link>
      </PopupModal>
    </Container>
  );
};

export default ShippingAddress;