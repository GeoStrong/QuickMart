import { defer } from 'react-router-dom';
import {
  accountUrl,
  authToken,
  regionsUrl,
  geoApiKey,
  getData,
} from './config';

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
