import {
  useActionData,
  // useNavigation,
  useSubmit,
} from 'react-router-dom';
import Authorization from '../../../UI/Authorization';
import { useDispatch } from 'react-redux';
import { accountActions } from '../../../../assets/store/account';
import * as Yup from 'yup';

const Login = () => {
  const actionData = useActionData();
  const submit = useSubmit();
  // const navigation = useNavigation();
  const dispatch = useDispatch();
  const values = {
    email: '',
    password: '',
  };
  console.log(actionData);
  // console.log(navigation);

  const inputValidation = {
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().required('Required'),
  };

  const loginSubmit = (values) => {
    submit(values, { method: 'POST' });
    if (!Array.isArray(actionData))
      dispatch(accountActions.setAccount(actionData));
  };

  return (
    <Authorization
      page="login"
      initialValues={values}
      validation={inputValidation}
      customError={Array.isArray(actionData) && actionData}
      submitHandler={loginSubmit}
    />
  );
};
export default Login;
