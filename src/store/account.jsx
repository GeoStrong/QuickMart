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
      console.log(action.payload);
      const { id, fullName, email, password } = action.payload;
      state.id = id !== undefined ? id : state.id;
      state.fullName = fullName !== undefined ? fullName : state.fullName;
      state.email = email !== undefined ? email : state.email;
      state.password = password !== undefined ? password : state.password;
    },

    removeAccount(state) {
      Object.assign(state, initialState);
    },
  },
});

export const accountActions = accountSlice.actions;
export default accountSlice;
