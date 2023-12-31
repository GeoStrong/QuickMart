import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import useParentUrl from './useParentUrl';

const useCheckAuth = () => {
  const navigate = useNavigate();
  const { originPath } = useParentUrl();
  const { email } = useSelector((state) => state.account);

  const checkAuthHandler = (navigateTo) => {
    if (email !== '') return;
    return navigate(`${originPath}/authentication/${navigateTo}`);
  };
  return { checkAuthHandler };
};

export default useCheckAuth;
