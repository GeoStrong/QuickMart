import { defer } from 'react-router-dom';
import { accountUrl, authToken, getData } from './config';

export const accountDataLoader = async (id) => {
  return defer({
    accountData: getData(`${accountUrl}/user_${id}.json${authToken}`),
  });
};
