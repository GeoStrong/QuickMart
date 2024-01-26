import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  adressInfo: {},
  paymentMethod: {},
};

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setAddress(state, action) {
      state.adressInfo = action.payload;
      console.log(state.adressInfo);
    },
    setPaymentMethod(state, action) {
      state.paymentMethod = action.payload;
      console.log(state.paymentMethod);
    },
  },
});

export const settingsActions = settingsSlice.actions;
export default settingsSlice;
