import { json } from 'react-router-dom';

const url = 'https://quickmart-21bf3-default-rtdb.firebaseio.com/users';
const authToken = '?auth=LqYQArvL3uTpuLrsicJHxuDbzsXH2DfsXZosxsi2';

export const accountDataLoader = (id) => async () => {
  const response = await fetch(`${url}/user_${id}.json${authToken}`);

  if (!response.ok)
    return json({ message: 'Error loading data' }, { status: 500 });
  const data = await response.json();
  return data;
};
