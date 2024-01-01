import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { accountActions } from '../store/account';

const useManageActionData = (actionData) => {
  const dispatch = useDispatch();
  const [customError, setCustomError] = useState();

  useEffect(() => {
    if (actionData === undefined) return;

    if (Array.isArray(actionData)) {
      setCustomError(actionData);
    } else {
      setCustomError(null);
      dispatch(accountActions.setAccount(actionData));
    }
  }, [actionData, dispatch]);

  return { customError };
};

export default useManageActionData;
