import { Button, Container, Form, Spinner } from 'react-bootstrap';
import AuthorizationAdditional from '../../../UI/AuthorizationLayout/AuthorizationAdditional';
import {
  useActionData,
  useNavigate,
  useNavigation,
  useSubmit,
} from 'react-router-dom';
import { useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useEffectOnce } from 'react-use';
import useParentUrl from '../../../../hooks/useParentUrl';
import useCheckAuth from '../../../../hooks/useCheckAuth';
import useManageActionData from '../../../../hooks/useManageActionData';
import './NewPassword.scss';

const NewPassword = () => {
  const submit = useSubmit();
  const navigate = useNavigate();
  const navigation = useNavigation();
  const actionData = useActionData();
  const { checkAuthHandler } = useCheckAuth();
  const { getSiblingLocation } = useParentUrl(3);
  const { customError } = useManageActionData(actionData);

  const submittingState = navigation.state === 'submitting';

  useEffectOnce(() => {
    checkAuthHandler();
  });

  useEffect(() => {
    if (customError === null) {
      navigate(getSiblingLocation('success'));
    } else {
      return;
    }
  }, [customError, getSiblingLocation, navigate]);

  const formik = useFormik({
    initialValues: {
      password: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object({
      password: Yup.string()
        .min(8, 'Too Short!')
        .matches(/[A-Za-z -]/, 'Password can only contain Latin letters.')
        .required('Required'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Required'),
    }),
    onSubmit: (values) => {
      submit(values, { method: 'PATCH' });
    },
  });

  const validationCheck = (name) => {
    return formik.errors[name] && formik.touched[name];
  };

  return (
    <>
      <Container>
        <AuthorizationAdditional
          pageName="Create Password"
          title="New Password"
          text="Enter your new password and remember it."
        />
        <Form
          className="form d-flex flex-column align-items-md-start"
          onSubmit={formik.handleSubmit}
        >
          <Form.Group className="mb-3 w-100">
            <Form.Label className="fw-medium">
              Password{' '}
              {(validationCheck('password') || customError) && (
                <span className="text-danger">*</span>
              )}
            </Form.Label>
            <Form.Control
              type="password"
              id="password"
              className={`form__input fw-normal py-3 ${
                validationCheck('password') || customError
                  ? 'border-danger'
                  : 'border-primary'
              }`}
              {...formik.getFieldProps('password')}
            />
            <Form.Text className="text-danger d-block">
              {(validationCheck('password') && formik.errors.password) ||
                (customError && customError[0].message)}
            </Form.Text>
          </Form.Group>
          <Form.Group className="w-100">
            <Form.Label className="fw-medium">
              Confirm Password{' '}
              {(validationCheck('confirmPassword') || customError) && (
                <span className="text-danger">*</span>
              )}
            </Form.Label>
            <Form.Control
              type="password"
              id="confirmPassword"
              className={`form__input fw-normal py-3 ${
                validationCheck('confirmPassword') || customError
                  ? 'border-danger'
                  : 'border-primary'
              }`}
              {...formik.getFieldProps('confirmPassword')}
            />
            <Form.Text className="text-danger d-block">
              {(validationCheck('confirmPassword') &&
                formik.errors.confirmPassword) ||
                (customError && customError[0].message)}
            </Form.Text>
          </Form.Group>
          <Button
            variant="dark"
            type="submit"
            onClick={() => formik.setFieldValue('intent', 'new password')}
            className="form__btn text-white align-self-stretch align-self-md-end py-3 d-flex align-items-center justify-content-center gap-2"
          >
            {submittingState ? 'Saving' : 'Save'}
            {submittingState && <Spinner />}
          </Button>
        </Form>
      </Container>
    </>
  );
};
export default NewPassword;