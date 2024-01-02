import { json } from 'react-router-dom';

const url = 'https://quickmart-21bf3-default-rtdb.firebaseio.com/users';
const authToken = '?auth=LqYQArvL3uTpuLrsicJHxuDbzsXH2DfsXZosxsi2';

const getFormData = async (formData, values) => {
  const eventData = {};
  values.forEach((value) => (eventData[value] = formData.get(value)));
  return eventData;
};

const getAccountData = async (url, init) => {
  const response = await fetch(url, init);
  if (!response.ok)
    throw json({ message: 'Something went wrong' }, { status: 500 });
  const data = await response.json();
  return { data };
};

const getActionReturnValue = (condition, data, message) => {
  if (condition) {
    return data;
  } else {
    return [
      {
        message,
      },
      { status: 401 },
    ];
  }
};

export const action =
  (id, password) =>
  async ({ request }) => {
    const formData = await request.formData();
    const intent = formData.get('intent');

    const loginPage = intent === 'login';
    const resetPage = intent === 'reset';
    const newPasswordPage = intent === 'new password';
    const signupPage = intent === 'signup';

    let eventData;
    let fetchParams;

    if (loginPage || resetPage) {
      eventData = await getFormData(formData, ['email', 'password']);
      fetchParams = [`${url}.json${authToken}`];
    }

    if (newPasswordPage) {
      eventData = await getFormData(formData, ['password']);
      fetchParams = [
        `${url}/user_${id}.json${authToken}`,
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(eventData),
        },
      ];
    }

    const { data } = await getAccountData(...fetchParams);

    const checkAccountEmail = Object.values(data).filter(
      (key) => key.email === eventData.email
    );

    const checkAccountCredentials = Object.values(data).filter(
      (key) =>
        key.email === eventData.email && key.password === eventData.password
    );

    if (loginPage)
      return getActionReturnValue(
        checkAccountCredentials.length > 0,
        checkAccountCredentials[0],
        'Invalid email or password'
      );

    if (resetPage)
      return getActionReturnValue(
        checkAccountEmail.length !== 0,
        checkAccountEmail[0],
        'Invalid email'
      );

    if (newPasswordPage)
      return getActionReturnValue(
        data.password !== password,
        data,
        'New password cannot be the same as your old password'
      );
  };
