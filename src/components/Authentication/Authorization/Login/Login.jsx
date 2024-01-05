import { useActionData, useNavigate, useSubmit } from 'react-router-dom';
import Authorization from '../../../UI/Authorization';
import * as Yup from 'yup';
import { useEffect } from 'react';
import useManageActionData from '../../../../hooks/useManageActionData';
import useParentUrl from '../../../../hooks/useParentUrl';

const Login = () => {
  const actionData = useActionData();
  const submit = useSubmit();
  const navigate = useNavigate();
  const { customError } = useManageActionData(actionData);
  const { originPath } = useParentUrl();

  const values = {
    email: '',
    password: '',
  };

  useEffect(() => {
    if (customError === null) {
      navigate(`/${originPath}`);
    } else {
      return;
    }
  }, [customError, navigate, originPath]);

  const inputValidation = {
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().required('Required'),
  };

  const loginSubmit = (values) => {
    submit(values, { method: 'POST' });
  };

  return (
    <Authorization
      page="login"
      initialValues={values}
      validation={inputValidation}
      customError={customError}
      submitHandler={loginSubmit}
    />
  );
};
export default Login;
