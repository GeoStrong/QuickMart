import * as Yup from 'yup';
import Authorization from '../../../UI/Authorization';
import { useActionData, useNavigate, useSubmit } from 'react-router-dom';
import useManageActionData from '../../../../hooks/useManageActionData';
import { useEffect } from 'react';
import useParentUrl from '../../../../hooks/useParentUrl';

const Signup = () => {
  const submit = useSubmit();
  const actionData = useActionData();
  const navigate = useNavigate();
  const { customError } = useManageActionData(actionData);
  const { originPath, parentPath } = useParentUrl(3);

  const values = {
    fullName: '',
    email: '',
    password: '',
  };

  useEffect(() => {
    if (customError === null) {
      navigate(
        `/${originPath}/authentication/${parentPath}/email verification`
      );
    } else {
      return;
    }
  }, [customError, navigate, originPath, parentPath]);

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
      customError={customError}
      submitHandler={signupSubmit}
    />
  );
};
export default Signup;
