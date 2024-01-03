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

const checkAccountEmail = (data, eventData) => {
  return Object.values(data).filter((key) => key.email === eventData.email);
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
    let fetchParams = [`${url}.json${authToken}`];
    let message;

    const allAccountsData = await getAccountData(fetchParams);

    if (loginPage || resetPage) {
      eventData = await getFormData(formData, ['email', 'password']);
    }

    if (newPasswordPage) {
      eventData = await getFormData(formData, ['password']);
      fetchParams = [
        `${url}/user_${id}.json${authToken}`,
        {
          method: request.method,
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(eventData),
        },
      ];
    }

    if (signupPage) {
      const id = Math.floor(Math.random() * 100);

      eventData = await getFormData(formData, [
        'fullName',
        'email',
        'password',
      ]);

      if (!checkAccountEmail(allAccountsData.data, eventData).length > 0) {
        fetchParams = [
          `${url}/user_${id}.json${authToken}`,
          {
            method: request.method,
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id, ...eventData }),
          },
        ];
      } else {
        message = 'Account already exist';
      }
    }

    const { data } = await getAccountData(...fetchParams);

    const checkAccountCredentials = Object.values(allAccountsData).filter(
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
        checkAccountEmail(data, eventData).length !== 0,
        checkAccountEmail(data, eventData)[0],
        'Invalid email'
      );

    if (newPasswordPage)
      return getActionReturnValue(
        data.password !== password,
        data,
        'New password cannot be the same as your old password'
      );

    if (signupPage) {
      if (!message) {
        return data;
      } else {
        return [
          {
            message,
          },
          { status: 401 },
        ];
      }
    }
  };
