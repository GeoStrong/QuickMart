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
      state.id = id;
      state.fullName = fullName;
      state.email = email;
      state.password = password;
      // console.log(action.payload);
      // console.log(state.id);
    },

    removeAccount(state) {
      Object.assign(state, initialState);
      // console.log(Array.from(state));
    },
  },
});

export const accountActions = accountSlice.actions;
export default accountSlice;
