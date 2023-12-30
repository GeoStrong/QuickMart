import { json } from 'react-router-dom';

export const action = async ({ request }) => {
  const formData = await request.formData();
  const values = Object.fromEntries(formData);
  const pathname = window.location.pathname.split('/').pop();

  const response = await fetch(
    'https://quickmart-21bf3-default-rtdb.firebaseio.com/users.json?auth=LqYQArvL3uTpuLrsicJHxuDbzsXH2DfsXZosxsi2'
  );

  if (!response.ok)
    throw json({ message: 'Something went wrong' }, { status: 500 });

  const data = await response.json();

  const checkAccountEmail = Object.values(data).filter((key) => {
    return key.email === values.email;
  });

  const checkAccountCredentials = Object.values(data).filter((key) => {
    return key.email === values.email && key.password === values.password;
  });

  if (checkAccountEmail.length > 0 && pathname === 'reset') {
    return checkAccountEmail[0];
    // } else if (checkAccountCredentials.length > 0 && pathname === 'login') {
    //   return checkAccountCredentials[0];
  } else {
    return [
      { message: `Invalid email ${pathname === 'login' ? 'or password' : ''}` },
      { status: 401 },
    ];
  }
};
