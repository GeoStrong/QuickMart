import { json, redirect } from 'react-router-dom';

const url = 'https://quickmart-21bf3-default-rtdb.firebaseio.com/users';
const authToken = '?auth=LqYQArvL3uTpuLrsicJHxuDbzsXH2DfsXZosxsi2';

export const action =
  (customFunction) =>
  async ({ request }) => {
    const formData = await request.formData();
    const values = Object.fromEntries(formData);
    const pathname = window.location.pathname.split('/').pop();

    const response = await fetch(`${url}.json${authToken}`);

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
      customFunction(checkAccountEmail[0]);
      return redirect('/QuickMart/authentication/login/email verification');
    } else if (checkAccountCredentials.length > 0 && pathname === 'login') {
      return checkAccountCredentials[0];
    } else {
      return [
        {
          message: `Invalid email ${pathname === 'login' ? 'or password' : ''}`,
        },
        { status: 401 },
      ];
    }
  };

export const changePasswordAction =
  (customFunction, id, password) =>
  async ({ request }) => {
    const formData = await request.formData();
    const eventData = {
      password: formData.get('password'),
    };

    const response = await fetch(`${url}/user_${id}.json${authToken}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(eventData),
    });

    if (!response.ok)
      throw json({ message: 'Something went wrong' }, { status: 500 });

    const data = await response.json();
    customFunction(data);

    if (data.password === password) {
      return [
        {
          message: 'New password cannot be the same as your old password',
        },
        { status: 401 },
      ];
    }

    return redirect('/QuickMart/authentication/login/success');
  };
