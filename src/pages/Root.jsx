import useLocalStorageData from '@/hooks/useLocalStorageData';
import { accountActions } from '@/store/account';
import { productsActions } from '@/store/products';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet, useLoaderData } from 'react-router-dom';
import { useEffectOnce, usePromise } from 'react-use';

const Root = ({ onIdChange }) => {
  const dispatch = useDispatch();
  const loaderData = useLoaderData();
  const mounted = usePromise();
  const [accountData, setAccountData] = useState('accountData');
  const { setDispatchValue } = useLocalStorageData('activeCategory');
  const { setDispatchValue: setProductDispatchValue } =
    useLocalStorageData('activeProduct');

  useEffectOnce(() => {
    setDispatchValue(productsActions.setActiveCategory);
    setProductDispatchValue(productsActions.setActiveProduct);
  });

  useEffect(() => {
    onIdChange(localStorage.getItem('localAccountId'));
  });

  useEffect(() => {
    (async () => {
      const value = await mounted(loaderData.accountData);
      setAccountData(value);
    })();
  });

  useEffect(() => {
    dispatch(accountActions.setAccount(accountData));
  }, [accountData, dispatch]);

  return (
    <>
      <Outlet />
    </>
  );
};
export default Root;
