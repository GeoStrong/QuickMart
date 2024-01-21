import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import useParentUrl from './useParentUrl';
import { useLocalStorage } from 'react-use';
import { accountActions } from '@/store/account';

const useCheckAuth = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { getSiblingLocation } = useParentUrl();
  const { email } = useSelector((state) => state.account);
  const localAccount = useLocalStorage('localAccount');
  const removeLocalAccount = localAccount[2];

  const isLoggedIn = email !== '';

  const checkAuthHandler = (redirectTo) => {
    if (isLoggedIn) return;
    return navigate(redirectTo ? redirectTo : getSiblingLocation('reset'));
  };

  const removeAccountHandler = () => {
    dispatch(accountActions.removeAccount());
    removeLocalAccount();
  };

  return { checkAuthHandler, removeAccountHandler, isLoggedIn };
};

export default useCheckAuth;
