import { configureStore } from '@reduxjs/toolkit';
import accountSlice from './account';
import settingsSlice from './settings';
import productsSlice from './products';

const store = configureStore({
  reducer: {
    account: accountSlice.reducer,
    settings: settingsSlice.reducer,
    products: productsSlice.reducer,
  },
});

export default store;
