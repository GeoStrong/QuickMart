import { useDispatch } from 'react-redux';
import { useLocalStorage } from 'react-use';

const useLocalStorageData = (localValue = 'localStorage') => {
  const dispatch = useDispatch();
  const localStorage = useLocalStorage(localValue);
  const [localStorageValue, setLocalStorageValue, removeLocalStorageValue] =
    localStorage;

  const setDispatchValue = (dispatchFunction, data = localStorageValue) =>
    dispatch(dispatchFunction(data));

  const setCustomStorageValue = (data, customDispatchFunction) => {
    customDispatchFunction && setDispatchValue(customDispatchFunction, data);
    return setLocalStorageValue(data);
  };

  return {
    localStorageValue,
    setLocalStorageValue,
    removeLocalStorageValue,
    setCustomStorageValue,
    setDispatchValue,
  };
};

export default useLocalStorageData;
