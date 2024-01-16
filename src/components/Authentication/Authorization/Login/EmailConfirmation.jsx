import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Button, Container, Form } from 'react-bootstrap';
import AuthorizationAdditional from '../../../UI/AuthorizationLayout/AuthorizationAdditional';
import {
  useActionData,
  useNavigate,
  useNavigation,
  useSubmit,
} from 'react-router-dom';
import './EmailConfirmation.scss';
import useParentUrl from '../../../../hooks/useParentUrl';
import useManageActionData from '../../../../hooks/useManageActionData';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { accountActions } from '../../../../store/account';
import SpinnerLoader from '@/components/UI/GlobalUI/SpinnerLoader';

const EmailConfirmation = () => {
  const dispatch = useDispatch();
  const submit = useSubmit();
  const actionData = useActionData();
  const navigate = useNavigate();
  const navigation = useNavigation();
  const { getSiblingLocation } = useParentUrl();
  const { customError } = useManageActionData(actionData);
  const { email } = useSelector((state) => state.account);

  const submittingState = navigation.state === 'submitting';

  useEffect(() => {
    dispatch(accountActions.removeAccount());
    localStorage.removeItem('localAccount');
  }, []);

  useEffect(() => {
    if (email !== '') {
      navigate(getSiblingLocation('email verification'));
    } else {
      return;
    }
  }, [email, getSiblingLocation, navigate]);

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email').required('Required'),
    }),
    onSubmit: (values) => {
      submit(values, { method: 'POST' });
    },
  });

  const isError = formik.errors.email && formik.touched.email;

  return (
    <Container>
      {submittingState && <SpinnerLoader />}
      <AuthorizationAdditional
        navigateTo=".."
        pageName="Forgot Password"
        title="Confirmation Email"
        text="Enter your email address for verification."
      />
      <Form
        className="form d-flex flex-column align-items-stretch align-items-md-start"
        onSubmit={formik.handleSubmit}
      >
        <Form.Group className="form-group">
          <Form.Label className="fw-medium">
            Email{' '}
            {(isError || customError) && <span className="text-danger">*</span>}
          </Form.Label>
          <Form.Control
            type="email"
            id="email"
            name="user_email"
            placeholder="Enter email"
            className={`fw-normal p-3 border-primary mb-2 ${
              (isError || customError) && 'border-danger'
            }`}
            {...formik.getFieldProps('email')}
          />
          <Form.Text className="text-danger d-block mb-2">
            {(isError && formik.errors.email) ||
              (customError && customError[0].message)}
          </Form.Text>
        </Form.Group>
        <Button
          variant="dark"
          type="submit"
          onClick={() => formik.setFieldValue('intent', 'reset')}
          className="form-btn text-white mt-1 py-3 align-self-end"
        >
          {submittingState ? 'Sending...' : 'Send'}
        </Button>
      </Form>
    </Container>
  );
};
export default EmailConfirmation;
