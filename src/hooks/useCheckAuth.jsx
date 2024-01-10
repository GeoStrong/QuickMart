import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import useParentUrl from './useParentUrl';

const useCheckAuth = () => {
  const navigate = useNavigate();
  const { getSiblingLocation } = useParentUrl();
  const { email } = useSelector((state) => state.account);

  const isLoggedIn = email !== '';

  const checkAuthHandler = () => {
    if (isLoggedIn) return;
    return navigate(getSiblingLocation('reset'));
  };

  return { checkAuthHandler, isLoggedIn };
};

export default useCheckAuth;
