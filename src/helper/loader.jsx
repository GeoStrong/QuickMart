import { defer, json } from 'react-router-dom';
const url = 'https://api.escuelajs.co/api/v1/';

export const getAllProductsLoader = async () => {
  const response = await fetch(`${url}products`);

  if (!response.ok)
    return json({ message: 'Error loading products' }, { status: 500 });
  const data = await response.json();
  return data;
};

export const getAllCategoriesLoader = async () => {
  const response = await fetch(`${url}categories`);

  if (!response.ok)
    return json({ message: 'Error loading categories' }, { status: 500 });
  const data = await response.json();
  return data;
};

export const loader = async () => {
  return defer({
    products: getAllProductsLoader(),
    categories: await getAllCategoriesLoader(),
  });
};
