import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  adressInfo: {},
};

const addressSlice = createSlice({
  name: 'address',
  initialState,
  reducers: {
    setAddress(state, action) {
      state.adressInfo = action.payload;
      console.log(state.adressInfo);
    },
  },
});

export const addressActions = addressSlice.actions;
export default addressSlice;
