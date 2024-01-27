import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Button, Container, Form, Spinner } from 'react-bootstrap';
import AuthorizationAdditional from '../../../UI/AuthorizationLayout/AuthorizationAdditional';
import { useActionData, useNavigation, useSubmit } from 'react-router-dom';
import useManageActionData from '../../../../hooks/useManageActionData';
import { useEffectOnce } from 'react-use';
import useCheckAuth from '@/hooks/useCheckAuth';
import './EmailConfirmation.scss';

const EmailConfirmation = () => {
  const submit = useSubmit();
  const actionData = useActionData();
  const navigation = useNavigation();
  const { customError } = useManageActionData(actionData);
  const { removeAccountHandler } = useCheckAuth();

  const submittingState = navigation.state === 'submitting';

  useEffectOnce(() => {
    removeAccountHandler();
  });

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
          className="form-btn text-white mt-1 py-3 align-self-end d-flex justify-content-center align-items-center gap-2"
        >
          {submittingState ? 'Sending' : 'Send'}
          {submittingState && <Spinner />}
        </Button>
      </Form>
    </Container>
  );
};
export default EmailConfirmation;
