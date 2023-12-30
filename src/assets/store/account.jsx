import { createSlice } from '@reduxjs/toolkit';

const initialValues = {
  fullName: '',
  email: '',
  password: '',
};

const accountSlice = createSlice({
  name: 'account',
  initialState: initialValues,
  reducers: {
    setAccount(state, action) {
      const { fullName, email, password } = action.payload;
      state.fullName = fullName;
      state.email = email;
      state.password = password;
    },
  },
});

export const accountActions = accountSlice.actions;
export default accountSlice;
