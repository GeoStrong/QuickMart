import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import useParentUrl from './useParentUrl';
import { accountActions } from '@/store/account';
import useLocalStorageData from './useLocalStorageData';

const useCheckAuth = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { getSiblingLocation } = useParentUrl();
  const { email } = useSelector((state) => state.account);
  const { removeLocalStorageValue } = useLocalStorageData();

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
    removeLocalStorageValue();
  };

  return { checkAuthHandler, removeAccountHandler, isLoggedIn };
};

export default useCheckAuth;
