import { json } from 'react-router-dom';

export const authToken = '?auth=LqYQArvL3uTpuLrsicJHxuDbzsXH2DfsXZosxsi2';
export const accountUrl =
  'https://quickmart-21bf3-default-rtdb.firebaseio.com/users';

export const productsFirstUrl = 'https://api.escuelajs.co/api/v1/';
export const productsSecondUrl = 'https://fakestoreapi.com/products';

export const regionsUrl = 'https://api.countrystatecity.in/v1/countries';
export const geoApiKey =
  'S2laQWljdUwwVW90MWo4c1JIaGdiM2lnRkFTTmJDU1pCTjcwN3NQOQ==';

export const getData = async (url, init) => {
  const response = await fetch(url, init);
  if (!response.ok) {
    return json({ message: 'Error loading data' }, { status: 500 });
  }
  const data = await response.json();
  return data;
};
