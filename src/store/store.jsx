import { configureStore } from '@reduxjs/toolkit';
import accountSlice from './account';
import settingsSlice from './settings';

const store = configureStore({
  reducer: { account: accountSlice.reducer, settings: settingsSlice.reducer },
});

export default store;
