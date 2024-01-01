import {
  useActionData,
  // useNavigate,
  // useNavigation,
  useSubmit,
} from 'react-router-dom';
import Authorization from '../../../UI/Authorization';
import { useDispatch } from 'react-redux';
import { accountActions } from '../../../../store/account';
import * as Yup from 'yup';

const Login = () => {
  const actionData = useActionData();
  const submit = useSubmit();
  // const navigate = useNavigate();
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
    // if (Array.isArray(actionData)) return;
    // dispatch(accountActions.setAccount(actionData));
    // return navigate(`/${originPath}/${parentPath}/signup`);
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
