import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  addressInfo: {},
  paymentMethod: {},
};

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setAddress(state, action) {
      state.addressInfo = action.payload;
    },
    setPaymentMethod(state, action) {
      state.paymentMethod = action.payload;
    },
  },
});

export const settingsActions = settingsSlice.actions;
export default settingsSlice;
