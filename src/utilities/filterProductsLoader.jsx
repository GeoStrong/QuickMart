import { defer } from 'react-router-dom';
import { productsFirstUrl, getData } from './config';

export const filterProductsLoader = () => {
  return defer({
    searchProducts: async (searchParams) =>
      await getData(`${productsFirstUrl}products/?title=${searchParams}`),
  });
};
