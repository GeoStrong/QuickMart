import { Alert, Button, Container, Form } from 'react-bootstrap';
import AuthorizationAdditional from '../../UI/AuthorizationLayout/AuthorizationAdditional';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { useEffectOnce } from 'react-use';
import useParentUrl from '../../../hooks/useParentUrl';
import alertImg from '../../../assets/svg/alert.svg';
import './EmailVerification.scss';

const EmailVerification = () => {
  const firstInputRef = useRef();
  const lastInputRef = useRef();
  const navigate = useNavigate();
  const { checkLocation, getSiblingLocation } = useParentUrl(3);
  const [verificationCode, setVerificationCode] = useState();
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [displayAlert, setDisplayAlert] = useState(false);
  const [customError, setCustomError] = useState(false);

  const parentPathCheck = checkLocation('login');

  const codeGenerator = () =>
    setVerificationCode((Math.random() * 10).toFixed(5).split('.').join(''));

  const resendCodeHandler = () => {
    codeGenerator();
    setDisplayAlert(false);
    setTimeout(() => {
      setDisplayAlert(true);
    }, 500);
  };

  const inputHandler = (event) => {
    const currentInput = event.target;
    const nextInput = event.target.nextElementSibling;
    const previousInput = event.target.previousElementSibling;

    if (currentInput.value.length > 1) {
      currentInput.value = '';
      return;
    }

    if (+currentInput.dataset.index === 5) {
      setIsButtonDisabled(false);
    }

    if (
      nextInput &&
      nextInput.hasAttribute('disabled') &&
      currentInput.value !== ''
    ) {
      nextInput.removeAttribute('disabled');
      currentInput.setAttribute('disabled', true);
      nextInput.focus();
    }

    if (event.key === 'Backspace' && +currentInput.dataset.index !== 0) {
      currentInput.value = '';
      previousInput.removeAttribute('disabled');
      currentInput.setAttribute('disabled', true);
      previousInput.focus();
    }
  };

  useEffectOnce(() => {
    codeGenerator();
    firstInputRef.current.focus();
  });

  const formik = useFormik({
    initialValues: {
      input0: '',
      input1: '',
      input2: '',
      input3: '',
      input4: '',
      input5: '',
    },
    onSubmit: (values) => {
      if (Object.values(values).join('') !== verificationCode) {
        setCustomError(true);
        lastInputRef.current.focus();
        return;
      }
      return navigate(
        getSiblingLocation(parentPathCheck ? 'new password' : 'success')
      );
    },
  });

  return (
    <Container className="position-relative">
      <Alert
        dismissible
        onClose={() => {
          firstInputRef.current.focus();
          setTimeout(() => {
            setDisplayAlert(true);
          }, 1000);
        }}
        className="alert mt-3 position-absolute fw-light rounded-4 d-flex gap-2 align-items-center text-center text-dark"
      >
        <div className="alert-img bg-primary">
          <img src={alertImg} alt="alert" />
        </div>
        Close this modal window to get the 6-digit Verification code.
      </Alert>
      {displayAlert && (
        <Alert
          dismissible
          onClose={() => {
            setDisplayAlert(false);
          }}
          className="alert mt-3 alert__code position-absolute rounded-4 text-dark"
        >
          <Alert.Heading className="text-center h6 ">
            Your verification code is{' '}
            <span className="fw-bold d-block">{verificationCode}</span>
          </Alert.Heading>
        </Alert>
      )}
      <AuthorizationAdditional
        pageName="Forgot Password"
        title="Email Verification"
        text="Enter the 6-digit verification code send to your email address."
      />
      <Form
        className="form d-flex flex-column align-items-stretch align-items-md-center w-100"
        onSubmit={formik.handleSubmit}
      >
        <Form.Group className="d-flex gap-2 gap-md-3 justify-content-center">
          <Form.Control
            ref={firstInputRef}
            type="number"
            id="input0"
            data-index="0"
            maxLength="1"
            className={`form__control text-center border-primary ${
              customError && 'border-danger'
            }`}
            onKeyUp={inputHandler}
            onChange={formik.handleChange}
            value={formik.values.input0}
          />
          <Form.Control
            type="number"
            id="input1"
            data-index="1"
            maxLength="1"
            className={`form__control text-center border-primary ${
              customError && 'border-danger'
            }`}
            onKeyUp={inputHandler}
            onChange={formik.handleChange}
            value={formik.values.input1}
            disabled
          />
          <Form.Control
            type="number"
            id="input2"
            data-index="2"
            maxLength="1"
            className={`form__control text-center border-primary ${
              customError && 'border-danger'
            }`}
            onKeyUp={inputHandler}
            onChange={formik.handleChange}
            value={formik.values.input2}
            disabled
          />
          <Form.Control
            type="number"
            id="input3"
            data-index="3"
            maxLength="1"
            className={`form__control text-center border-primary ${
              customError && 'border-danger'
            }`}
            onKeyUp={inputHandler}
            onChange={formik.handleChange}
            value={formik.values.input3}
            disabled
          />
          <Form.Control
            type="number"
            id="input4"
            data-index="4"
            maxLength="1"
            className={`form__control text-center border-primary ${
              customError && 'border-danger'
            }`}
            onKeyUp={inputHandler}
            onChange={formik.handleChange}
            value={formik.values.input4}
            disabled
          />
          <Form.Control
            ref={lastInputRef}
            type="number"
            id="input5"
            data-index="5"
            maxLength="1"
            className={`form__control text-center border-primary ${
              customError && 'border-danger'
            }`}
            onKeyUp={inputHandler}
            onChange={formik.handleChange}
            value={formik.values.input5}
            disabled
          />
        </Form.Group>
        <Form.Text className="text-danger">
          {customError && 'Invalid Code'}
        </Form.Text>
        <div className="form__buttons mt-3 d-flex flex-column align-items-center">
          <Button
            variant="white"
            type="button"
            className="text-primary text-center mb-2"
            onClick={resendCodeHandler}
          >
            Resend code
          </Button>
          <Button
            variant="dark"
            type="submit"
            className="text-white w-100 py-3"
            disabled={isButtonDisabled}
          >
            Proceed
          </Button>
        </div>
      </Form>
    </Container>
  );
};
export default EmailVerification;
