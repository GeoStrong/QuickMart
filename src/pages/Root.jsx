import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { accountActions } from '../store/account';

const Root = () => {
  return (
    <>
      <Outlet />
    </>
  );
};
export default Root;
