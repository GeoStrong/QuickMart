import * as Yup from 'yup';
import Authorization from '../../../UI/Authorization';
import { useSubmit } from 'react-router-dom';

const Signup = () => {
  const submit = useSubmit();
  const values = {
    fullName: '',
    email: '',
    password: '',
  };

  const inputValidation = {
    fullName: Yup.string()
      .min(2, 'Too Short!')
      .max(25, 'Too Long!')
      .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string()
      .min(8, 'Too Short!')
      .matches(/[A-Za-z -]/, 'Password can only contain Latin letters.')
      .required('Required'),
  };

  const signupSubmit = (values) => {
    submit(values, { method: 'PUT' });
  };

  return (
    <Authorization
      page="signup"
      initialValues={values}
      validation={inputValidation}
      submitHandler={signupSubmit}
    />
  );
};
export default Signup;
