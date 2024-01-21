import { defer, json } from 'react-router-dom';
const firstUrl = 'https://api.escuelajs.co/api/v1/';
const secondUrl = 'https://fakestoreapi.com/products';

const getAllProductData = async (url) => {
  const response = await fetch(url);

  if (!response.ok)
    return json({ message: 'Error loading products' }, { status: 500 });
  const data = await response.json();
  return data;
};

export const loader = async () => {
  return defer({
    products: getAllProductData(`${firstUrl}products`),
    categories: await getAllProductData(`${firstUrl}categories`),
    moreCategories: await getAllProductData(`${secondUrl}/categories`),
    discountProducts: await getAllProductData(`${secondUrl}?limit=5`),
  });
};
