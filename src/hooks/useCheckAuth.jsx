import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import useParentUrl from './useParentUrl';
import { accountActions } from '@/store/account';
import { useCallback, useState } from 'react';
import { useEffect } from 'react';

const useCheckAuth = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { getSiblingLocation } = useParentUrl();
  const { email } = useSelector((state) => state.account);
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const id = localStorage.getItem('localAccountId');

  useEffect(() => {
    setIsLoggedIn(email !== '');
  }, [email]);

  const checkAuthHandler = useCallback(
    (redirectTo) => {
      if (isLoggedIn || isLoggedIn === null) {
        return;
      } else if (!isLoggedIn && id === null) {
        navigate(redirectTo ? redirectTo : getSiblingLocation('reset'));
      }
    },
    [isLoggedIn, id, navigate, getSiblingLocation]
  );

  const removeAccountHandler = () => {
    dispatch(accountActions.removeAccount());
    localStorage.removeItem('localAccountId');
  };

  return { checkAuthHandler, removeAccountHandler, isLoggedIn };
};

export default useCheckAuth;
