import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Button, Container, Form } from 'react-bootstrap';
import AuthorizationAdditional from '../../../UI/AuthorizationAdditional';
import { useActionData, useNavigate, useSubmit } from 'react-router-dom';
import { useEffect, useState } from 'react';
import useParentUrl from '../../../../hooks/useParentUrl';
import './EmailConfirmation.scss';

const EmailConfirmation = () => {
  const submit = useSubmit();
  const actionData = useActionData();
  const navigate = useNavigate();
  const { originPath, parentPath } = useParentUrl(3);
  const [customError, setCustomError] = useState(null);

  useEffect(() => {
    if (Array.isArray(actionData)) {
      setCustomError(actionData);
    } else {
      setCustomError(null);
    }
  }, [actionData]);

  console.log(actionData);

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email').required('Required'),
    }),
    onSubmit: (values) => {
      submit(values, { method: 'POST' });
      return navigate(
        `/${originPath}/authentication/${parentPath}/email verification`
      );
    },
  });

  const isError = formik.errors.email && formik.touched.email;

  return (
    <Container>
      <AuthorizationAdditional
        page="Forgot Password"
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
            {(isError || customError) && <span className="text-danger">*</span>}{' '}
          </Form.Label>
          <Form.Control
            type="email"
            id="email"
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
          className="form-btn text-white mt-1 py-3 align-self-center"
        >
          Send
        </Button>
      </Form>
    </Container>
  );
};
export default EmailConfirmation;
