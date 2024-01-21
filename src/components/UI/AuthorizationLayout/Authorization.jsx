import { Form, Link, useNavigation } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import useParentUrl from '../../../hooks/useParentUrl';
import {
  Button,
  Container,
  Form as BootstrapForm,
  Row,
  Spinner,
} from 'react-bootstrap';
import logo from '../../../assets/images/logo.png';
import './Authorization.scss';
import { useEffectOnce } from 'react-use';
import useCheckAuth from '@/hooks/useCheckAuth';

const Authorization = ({
  page,
  initialValues,
  validation,
  customError,
  submitHandler,
}) => {
  const navigation = useNavigation();
  const { originPath, getSiblingLocation } = useParentUrl();
  const { removeAccountHandler } = useCheckAuth();

  const submittingState = navigation.state === 'submitting';

  useEffectOnce(() => {
    removeAccountHandler();
  });

  const formik = useFormik({
    initialValues,
    validationSchema: Yup.object({
      ...validation,
    }),
    onSubmit: submitHandler,
  });

  const checkPage = page === 'signup';

  const validationCheck = (name) => {
    return formik.errors[name] && formik.touched[name];
  };

  return (
    <Container className="authorization my-3">
      <Row className="authorization__header">
        <Link to={`/${originPath}`}>
          <img
            src={logo}
            alt="logo"
            className="authorization__header-img mb-4"
          />
        </Link>
        <h1 className="authorization__header-title fw-bold h1">
          {checkPage ? 'Signup' : 'Login'}
        </h1>
        <p className="authorization__header-description fw-medium">
          {checkPage ? 'Already have an account? ' : 'Don’t have an account? '}
          <Link
            to={getSiblingLocation(checkPage ? 'login' : 'signup')}
            className="text-primary"
          >
            {checkPage ? 'Log in' : 'Sign up'}
          </Link>
        </p>
      </Row>
      <Row>
        <Form
          className="form d-flex flex-column justify-content-center"
          onSubmit={formik.handleSubmit}
        >
          {checkPage && (
            <BootstrapForm.Group>
              <BootstrapForm.Label className="fw-medium">
                Full Name{' '}
                {validationCheck('fullName') && (
                  <span className="text-danger"> * </span>
                )}
              </BootstrapForm.Label>
              <BootstrapForm.Control
                type="text"
                id="fullName"
                placeholder="Enter full name"
                className={`w-50 fw-normal p-3
                ${
                  validationCheck('fullName')
                    ? 'border-danger'
                    : 'border-primary'
                }`}
                {...formik.getFieldProps('fullName')}
              />
              <BootstrapForm.Text className="text-danger d-block">
                {validationCheck('fullName') && formik.errors.fullName}
              </BootstrapForm.Text>
            </BootstrapForm.Group>
          )}

          <BootstrapForm.Group>
            <BootstrapForm.Label className="fw-medium">
              Email address{' '}
              {(validationCheck('email') || customError) && (
                <span className="text-danger"> * </span>
              )}
            </BootstrapForm.Label>
            <BootstrapForm.Control
              type="email"
              id="email"
              placeholder="Enter email"
              className={`w-50 fw-normal p-3
              
              
              ${
                validationCheck('email') || customError
                  ? 'border-danger'
                  : 'border-primary'
              }`}
              {...formik.getFieldProps('email')}
            />
            <BootstrapForm.Text className="text-danger d-block">
              {(validationCheck('email') && formik.errors.email) ||
                (customError && customError[0].message)}
            </BootstrapForm.Text>
          </BootstrapForm.Group>

          <BootstrapForm.Group>
            <BootstrapForm.Label className="fw-medium">
              Password{' '}
              {(validationCheck('password') ||
                (customError && page === 'login')) && (
                <span className="text-danger"> * </span>
              )}
            </BootstrapForm.Label>
            <BootstrapForm.Control
              type="password"
              id="password"
              placeholder="Password"
              className={`w-50 fw-normal p-3
              
              
              ${
                (validationCheck('password') || customError) && page === 'login'
                  ? 'border-danger'
                  : 'border-primary'
              }`}
              {...formik.getFieldProps('password')}
            />
            <BootstrapForm.Text className="text-danger d-block">
              {((validationCheck('password') && formik.errors.password) ||
                (customError && customError[0].message)) &&
                page === 'login'}
            </BootstrapForm.Text>
          </BootstrapForm.Group>

          <Button
            onClick={() =>
              formik.setFieldValue(
                'intent',
                `${checkPage ? 'signup' : 'login'}`
              )
            }
            type="submit"
            variant="dark"
            className="form-btn text-white mt-1 py-3 align-self-center align-self-lg-end w-25 d-flex justify-content-center align-items-center gap-2"
          >
            {checkPage
              ? `Sign${submittingState ? 'ing' : ''} up`
              : `Log${submittingState ? 'ing' : ''} in`}
            {submittingState && <Spinner />}
          </Button>
        </Form>
        {!checkPage && (
          <Link
            to="reset"
            className="authorization__link text-primary text-end mt-2"
          >
            Forgot password?
          </Link>
        )}
      </Row>
      {checkPage && (
        <Row>
          <p className="small mt-5 text-center text-md-start fw-medium">
            By signing up, you agree to our{' '}
            <Link className="text-primary">Terms of Use</Link> and{' '}
            <Link className="text-primary">Privacy Policy</Link>
          </p>
        </Row>
      )}
    </Container>
  );
};
export default Authorization;
