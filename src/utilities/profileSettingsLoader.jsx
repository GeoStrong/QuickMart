import { defer, json } from 'react-router-dom';

const accountUrl = 'https://quickmart-21bf3-default-rtdb.firebaseio.com/users';
const authToken = '?auth=LqYQArvL3uTpuLrsicJHxuDbzsXH2DfsXZosxsi2';
const regionsUrl = 'https://api.countrystatecity.in/v1/countries';
const geoApiKey = 'S2laQWljdUwwVW90MWo4c1JIaGdiM2lnRkFTTmJDU1pCTjcwN3NQOQ==';

const getData = async (url, init) => {
  const response = await fetch(url, init);
  if (!response.ok) {
    return json({ message: 'Error loading data' }, { status: 500 });
  }
  const data = await response.json();
  return data;
};

const getProfileSettings = async (id, setting) => {
  return await getData(`${accountUrl}/user_${id}/${setting}.json${authToken}`);
};

const getGeoData = async (country, state = '') => {
  return await getData(
    `${regionsUrl}/${country}/states/${state}/${state && 'cities'}`,
    {
      method: 'GET',
      headers: {
        'X-CSCAPI-KEY': geoApiKey,
      },
      redirect: 'follow',
    }
  );
};

export const profileSettingsLoader = async () => {
  return defer({
    getGeoData,
    getProfileSettings,
  });
};
