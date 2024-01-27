import { createSlice } from '@reduxjs/toolkit';
import userDefaultAvatarImg from '../assets/svg/user-profile.svg';

const initialState = {
  fullName: '',
  email: '',
  password: '',
  id: '',
  avatarImage: userDefaultAvatarImg,
};

const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    setAccount(state, action) {
      if (action.payload === null) return;
      const { id, fullName, email, password } = action.payload;
      state.id = id !== null ? id : state.id;
      state.fullName = fullName !== null ? fullName : state.fullName;
      state.email = email !== null ? email : state.email;
      state.password = password !== null ? password : state.password;
    },

    removeAccount(state) {
      Object.assign(state, initialState);
    },
  },
});

export const accountActions = accountSlice.actions;
export default accountSlice;
