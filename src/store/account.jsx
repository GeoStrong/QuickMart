import { createSlice } from '@reduxjs/toolkit';

const initialValues = {
  fullName: '',
  email: '',
  password: '',
  id: '',
};

const accountSlice = createSlice({
  name: 'account',
  initialState: initialValues,
  reducers: {
    setAccount(state, action) {
      const { id, fullName, email, password } = action.payload;
      state.id = id;
      state.fullName = fullName;
      state.email = email;
      state.password = password;
    },
  },
});

export const accountActions = accountSlice.actions;
export default accountSlice;
