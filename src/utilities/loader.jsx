import { defer } from 'react-router-dom';
import { productsFirstUrl, productsSecondUrl, getData } from './config';

export const loader = async () => {
  return defer({
    products: getData(`${productsFirstUrl}products`),
    categories: getData(`${productsFirstUrl}categories`),
    discountProducts: getData(`${productsSecondUrl}?limit=5`),
    moreCategories: getData(`${productsSecondUrl}/categories`),
  });
};
