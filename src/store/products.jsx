import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeCategory: { id: null, name: '' },
  activeProduct: { id: null, title: '' },
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setActiveCategory(state, action) {
      const { id, name } = action.payload;
      state.activeCategory = { id, name };
    },
    setActiveProduct(state, action) {
      const { id, title } = action.payload;
      state.activeProduct = { id, title };
    },
  },
});

export const productsActions = productsSlice.actions;
export default productsSlice;
