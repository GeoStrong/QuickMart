import { Form, Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import useParentUrl from '../../hooks/useParentUrl';
import { Button, Container, Form as BootstrapForm, Row } from 'react-bootstrap';
import logo from '../../assets/images/logo.png';
import './Authorization.scss';

const Authorization = ({
  page,
  initialValues,
  validation,
  customError,
  submitHandler,
}) => {
  const { parentPath, originPath } = useParentUrl();
  console.log(parentPath);
  console.log(originPath);

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
        <Link to={`/${originPath}/${parentPath}`}>
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
            to={`/${originPath}/${parentPath}/${
              checkPage ? 'login' : 'signup'
            }`}
            className="text-decoration-none text-primary"
          >
            {checkPage ? 'Login' : 'Signup'}
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
              {(validationCheck('password') || customError) && (
                <span className="text-danger"> * </span>
              )}
            </BootstrapForm.Label>
            <BootstrapForm.Control
              type="password"
              id="password"
              placeholder="Password"
              className={`w-50 fw-normal p-3
              
              
              ${
                validationCheck('password') || customError
                  ? 'border-danger'
                  : 'border-primary'
              }`}
              {...formik.getFieldProps('password')}
            />
            <BootstrapForm.Text className="text-danger d-block">
              {(validationCheck('password') && formik.errors.password) ||
                (customError && customError[0].message)}
            </BootstrapForm.Text>
          </BootstrapForm.Group>

          <Button
            variant="dark"
            type="submit"
            className="form-btn text-white mt-1 py-3 align-self-center align-self-lg-end w-25"
          >
            {checkPage ? 'Create Account' : 'Login'}
          </Button>
        </Form>
        {!checkPage && (
          <Link
            to="reset"
            className="authorization__link text-decoration-none text-primary text-end mt-2"
          >
            Forgot password?
          </Link>
        )}
      </Row>
      {!checkPage && (
        <Row>
          <p className="small mt-5 text-center text-md-start fw-medium">
            By signing up, you agree to our{' '}
            <Link className="text-decoration-none text-primary">
              Terms of Use
            </Link>{' '}
            and{' '}
            <Link className="text-decoration-none text-primary">
              Privacy Policy
            </Link>
          </p>
        </Row>
      )}
    </Container>
  );
};
export default Authorization;
