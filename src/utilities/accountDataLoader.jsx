import { accountUrl, authToken, getData } from './config';

export const accountDataLoader = async (id) =>
  await getData(`${accountUrl}/user_${id}.json${authToken}`);
