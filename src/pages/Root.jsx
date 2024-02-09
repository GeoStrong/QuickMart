import useLocalStorageData from '@/hooks/useLocalStorageData';
import { accountActions } from '@/store/account';
import { productsActions } from '@/store/products';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet, useLoaderData } from 'react-router-dom';
import { useEffectOnce } from 'react-use';

const Root = ({ onIdChange }) => {
  const dispatch = useDispatch();
  const loaderData = useLoaderData();
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
    dispatch(accountActions.setAccount(loaderData));
  }, [dispatch, loaderData]);

  return (
    <>
      <Outlet />
    </>
  );
};
export default Root;
