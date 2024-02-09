import { defer } from 'react-router-dom';
import { productsFirstUrl, productsSecondUrl, getData } from './config';

const getCategory = async (params) => {
  let url;
  const checkParams = isNaN(Number(params.category));
  if (!checkParams)
    url = `${productsFirstUrl}products/?categoryId=${params.category}`;
  if (checkParams) url = `${productsSecondUrl}/category/${params.category}`;

  const data = await getData(url);

  data.forEach((product) => {
    product.images?.forEach((image) => {
      ['[', ']', '"'].forEach((char) => {
        image = image.replaceAll(char, '');
        return image;
      });
    });
  });
  return data;
};

const getProduct = async (params) => {
  let url;
  const activeProduct = JSON.parse(localStorage.getItem('activeProduct'));
  url =
    typeof activeProduct.category === 'object'
      ? `${productsFirstUrl}products/${params.product}`
      : `${productsSecondUrl}/${params.product}`;

  const data = await getData(url);
  return data;
};

export const categoryProductsLoader = async ({ params }) => {
  return defer({
    category: await getCategory(params),
    product: getProduct(params),
  });
};
