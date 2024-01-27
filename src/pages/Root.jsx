import { accountActions } from '@/store/account';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet, useLoaderData } from 'react-router-dom';

const Root = () => {
  const dispatch = useDispatch();
  const loaderData = useLoaderData();

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
