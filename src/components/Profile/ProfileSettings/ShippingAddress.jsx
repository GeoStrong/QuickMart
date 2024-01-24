import { useFormik } from 'formik';
import { Container, Form } from 'react-bootstrap';
import * as Yup from 'yup';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import HeaderNavigation from '@/components/UI/GlobalUI/HeaderNavigation';
import useCheckScreenSize from '@/hooks/useCheckScreenSize';
import { useRef, useState } from 'react';
import './ShippingAddress.scss';
import { useOutletContext } from 'react-router-dom';
import { useEffectOnce } from 'react-use';

const ShippingAddress = () => {
  const { isScreenMobile } = useCheckScreenSize();
  const [value, setValue] = useState();
  const countryRef = useRef();
  const setDisplayProfilePanel = useOutletContext();

  useEffectOnce(() => {
    setDisplayProfilePanel(true);
  });

  const countryName = countryRef.current?.previousSibling
    .querySelector('.PhoneInputCountrySelect')
    .querySelector('option:checked').value;
  console.log(countryName);

  const formik = useFormik({
    initialValues: {
      fullName: '',
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(2, 'Too Short!')
        .max(25, 'Too Long!')
        .required('Required'),
    }),
  });

  return (
    <Container>
      {isScreenMobile && <HeaderNavigation page="Shipping Address" />}
      <Form className="mt-2">
        <Form.Group className="mb-2">
          <Form.Label className="fw-medium">Full Name</Form.Label>
          <Form.Control className="p-3" />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label className="fw-medium">Phone Number</Form.Label>
          <PhoneInput
            ref={countryRef}
            international
            placeholder="Enter phone number"
            value={value}
            onChange={setValue}
          />
        </Form.Group>
      </Form>
    </Container>
  );
};

export default ShippingAddress;
