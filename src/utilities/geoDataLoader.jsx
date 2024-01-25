import { defer, json } from 'react-router-dom';

const regionsUrl = 'https://api.countrystatecity.in/v1/countries';
const geoApiKey = 'S2laQWljdUwwVW90MWo4c1JIaGdiM2lnRkFTTmJDU1pCTjcwN3NQOQ==';

const getGeoData = async (country, state = '') => {
  const response = await fetch(
    `${regionsUrl}/${country}/states/${state}/${state && 'cities'}`,
    {
      method: 'GET',
      headers: {
        'X-CSCAPI-KEY': geoApiKey,
      },
      redirect: 'follow',
    }
  );
  if (!response.ok) {
    return json({ message: 'Error loading data' }, { status: 500 });
  }
  const data = await response.json();
  return data;
};

export const geoDataLoader = async () => {
  return defer({
    getGeoData,
  });
};
