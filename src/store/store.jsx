import { configureStore } from '@reduxjs/toolkit';
import accountSlice from './account';
import addressSlice from './address';

const store = configureStore({
  reducer: { account: accountSlice.reducer, address: addressSlice.reducer },
});

export default store;
