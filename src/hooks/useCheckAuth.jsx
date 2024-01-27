import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import useParentUrl from './useParentUrl';
import { accountActions } from '@/store/account';

const useCheckAuth = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { getSiblingLocation } = useParentUrl();
  const { email } = useSelector((state) => state.account);

  const isLoggedIn = email !== '';

  const checkAuthHandler = (redirectTo) => {
    if (isLoggedIn) return;
    return setTimeout(
      () => navigate(redirectTo ? redirectTo : getSiblingLocation('reset')),
      1000
    );
  };

  const removeAccountHandler = () => {
    dispatch(accountActions.removeAccount());
    localStorage.removeItem('localAccountId');
  };

  return { checkAuthHandler, removeAccountHandler, isLoggedIn };
};

export default useCheckAuth;
