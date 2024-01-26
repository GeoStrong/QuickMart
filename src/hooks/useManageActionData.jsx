import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { accountActions } from '../store/account';
import useParentUrl from './useParentUrl';
import useLocalStorageData from './useLocalStorageData';

const useManageActionData = (actionData, setAccount = true) => {
  const dispatch = useDispatch();
  const [customError, setCustomError] = useState();
  const { checkLocation } = useParentUrl();
  const { setLocalStorageValue } = useLocalStorageData();

  const setLocalAccount = useCallback(
    (data) => {
      dispatch(accountActions.setAccount(data));
      setLocalStorageValue(data);
    },
    [dispatch, setLocalStorageValue]
  );

  useEffect(() => {
    if (actionData === undefined) return;

    if (Array.isArray(actionData)) {
      setCustomError(actionData);
    } else {
      setCustomError(null);
      (checkLocation('login') || checkLocation('reset')) &&
        setLocalAccount(actionData);
    }
  }, [actionData, checkLocation, setAccount, setLocalAccount]);

  return { customError };
};

export default useManageActionData;
