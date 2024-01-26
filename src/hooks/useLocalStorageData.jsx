import { useLocalStorage } from 'react-use';

const useLocalStorageData = (localValue = 'localStorage') => {
  const localStorage = useLocalStorage(localValue);
  const localStorageValue = localStorage[0];
  const setLocalStorageValue = localStorage[1];
  const removeLocalStorageValue = localStorage[2];

  const getDataFromLocalStorage = (data) => {
    if (localStorageValue === undefined) return;
    return localStorageValue[data];
  };

  const mergeDataWithLocalStorage = (data, name) => {
    if (localStorageValue === undefined) return;
    return setLocalStorageValue({ ...localStorageValue, [name]: data });
  };

  return {
    localStorageValue,
    setLocalStorageValue,
    removeLocalStorageValue,
    getDataFromLocalStorage,
    mergeDataWithLocalStorage,
  };
};

export default useLocalStorageData;
