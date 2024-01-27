import { useActionData, useSubmit } from 'react-router-dom';
import Authorization from '../../../UI/AuthorizationLayout/Authorization';
import * as Yup from 'yup';
import useManageActionData from '../../../../hooks/useManageActionData';

const Login = () => {
  const actionData = useActionData();
  const submit = useSubmit();
  const { customError } = useManageActionData(actionData);

  const values = {
    email: '',
    password: '',
  };

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
