import { Button, Container, Form } from 'react-bootstrap';
import { Link, useFetcher, useOutletContext } from 'react-router-dom';
import { PatternFormat } from 'react-number-format';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import useCheckScreenSize from '@/hooks/useCheckScreenSize';
import { useDispatch } from 'react-redux';
import { settingsActions } from '@/store/settings';
import { useEffect, useState } from 'react';
import PopupModal from '@/components/UI/GlobalUI/PopupModal';
import useParentUrl from '@/hooks/useParentUrl';

const Payment = () => {
  const dispatch = useDispatch();
  const fetcher = useFetcher();
  const [popup, setPopup] = useState(false);
  const { profileSettings } = useOutletContext();
  const { originPath } = useParentUrl();
  const { renderHeader } = useCheckScreenSize();

  useEffect(() => {
    dispatch(settingsActions.setPaymentMethod(profileSettings));
  }, [dispatch, profileSettings]);

  const getDate = (cardYear = 0) => {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day =
      date.getDate() < 10 ? `0${date.getDate()}` : `${date.getDate()}`;
    return `${+year + cardYear}-0${month}-${day}`;
  };

  const formik = useFormik({
    initialValues: {
      cardName: profileSettings.cardName,
      cardNumber: profileSettings.cardNumber,
      expiration: profileSettings.expiration,
      CVV: profileSettings.CVV,
    },
    validationSchema: Yup.object({
      cardName: Yup.string()
        .required('Required')
        .min(3, 'Must be 3 characters or more')
        .max(20, 'Must be 20 characters or less'),
      cardNumber: Yup.string()
        .required('Required')
        .test('cardNumber', 'Card number must be 16 characters', (value) => {
          if (value.split(' ').join('').length === 16) {
            return true;
          } else {
            return false;
          }
        }),
      expiration: Yup.string()
        .required('Required')
        .test(
          'expiration',
          'Card expiration date must be greater than today',
          (value) => {
            if (value > getDate()) {
              return true;
            } else {
              return false;
            }
          }
        ),
      CVV: Yup.string().required('Required'),
    }),
    onSubmit: (values) => {
      fetcher.submit(values, { method: 'PATCH' });
      dispatch(settingsActions.setPaymentMethod(values));
      setPopup(true);
    },
  });

  const validationCheck = (name) => formik.errors[name] && formik.touched[name];

  return (
    <Container>
      {renderHeader('Payment Method')}
      <Form className="d-flex flex-column mt-6" onSubmit={formik.handleSubmit}>
        <Form.Group className="mb-2">
          <Form.Label className="fw-medium">
            Card Holder Name{' '}
            {validationCheck('cardName') && (
              <span className="text-danger"> * </span>
            )}
          </Form.Label>
          <Form.Control
            className={`p-3 ${
              validationCheck('cardName') ? 'border-danger' : ''
            }`}
            type="text"
            id="cardName"
            placeholder="Enter card holder name"
            {...formik.getFieldProps('cardName')}
          />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label className="fw-medium">
            Card Number{' '}
            {validationCheck('cardNumber') && (
              <span className="text-danger"> * </span>
            )}
          </Form.Label>
          <PatternFormat
            id="cardNumber"
            className={`p-3 ${
              validationCheck('cardNumber') ? 'border-danger' : ''
            }`}
            format="#### #### #### ####"
            placeholder="4111 1111 1111 1111"
            customInput={Form.Control}
            {...formik.getFieldProps('cardNumber')}
          />
        </Form.Group>
        <div className="d-flex gap-2">
          <Form.Group className="w-50">
            <Form.Label className="fw-medium">
              Expiration{' '}
              {validationCheck('expiration') && (
                <span className="text-danger"> * </span>
              )}
            </Form.Label>
            <Form.Control
              id="expiration"
              className={`p-3 ${
                validationCheck('expiration') ? 'border-danger' : ''
              }`}
              type="date"
              placeholder="DD/MM/YY"
              min={getDate()}
              max={getDate(5)}
              {...formik.getFieldProps('expiration')}
            />
          </Form.Group>
          <Form.Group className="mb-3 w-50">
            <Form.Label className="fw-medium">
              CVV{' '}
              {validationCheck('CVV') && (
                <span className="text-danger"> * </span>
              )}
            </Form.Label>
            <PatternFormat
              id="CVV"
              className={`p-3 ${validationCheck('CVV') ? 'border-danger' : ''}`}
              format="###"
              placeholder="123"
              customInput={Form.Control}
              {...formik.getFieldProps('CVV')}
            />
          </Form.Group>
        </div>
        <Button
          variant="dark"
          className="p-3 align-self-md-end px-md-5 rounded-3 py-3 d-flex align-items-center justify-content-center gap-2"
          type="submit"
          onClick={() => formik.setFieldValue('intent', 'payment')}
        >
          Save
        </Button>
      </Form>
      <PopupModal
        title="Your payment method has been saved"
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
export default Payment;
