import { defer, json } from 'react-router-dom';

const productsFirstUrl = 'https://api.escuelajs.co/api/v1/';
const productsSecondUrl = 'https://fakestoreapi.com/products';

const getData = async (url) => {
  const response = await fetch(url);

  if (!response.ok)
    return json({ message: 'Error loading data' }, { status: 500 });
  const data = await response.json();
  return data;
};

export const loader = async () => {
  return defer({
    products: getData(`${productsFirstUrl}products`),
    categories: await getData(`${productsFirstUrl}categories`),
    moreCategories: await getData(`${productsSecondUrl}/categories`),
    discountProducts: await getData(`${productsSecondUrl}?limit=5`),
  });
};
