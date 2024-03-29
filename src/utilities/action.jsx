import { json, redirect } from 'react-router-dom';
import { accountUrl, authToken } from './config';

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

const getActionReturnValue = (condition, redirect, message) => {
  if (condition) {
    return redirect;
  } else {
    return [
      {
        message,
      },
      { status: 401 },
    ];
  }
};

const checkAccountCredentials = (data, eventData) =>
  Object.values(data.data).filter((key) => {
    if (key.email === eventData.email && key.password === eventData.password) {
      localStorage.setItem('localAccountId', key.id);
      return key;
    }
  });

const checkAccountEmail = (data, eventData) =>
  Object.values(data).filter((key) => {
    if (key.email === eventData.email) {
      localStorage.setItem('localAccountId', key.id);
      return key;
    }
  });

const changePasswordHandler = async (id, method, eventData) => {
  await getAccountData(`${accountUrl}/user_${id}.json${authToken}`, {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(eventData),
  });
  return redirect('/QuickMart/authentication/login/success');
};

export const action =
  (id) =>
  async ({ request }) => {
    const formData = await request.formData();
    const intent = formData.get('intent');

    const loginPage = intent === 'login';
    const resetPage = intent === 'reset';
    const newPasswordPage = intent === 'new password';
    const signupPage = intent === 'signup';
    const addressPage = intent === 'address';
    const paymentPage = intent === 'payment';
    const addCartItem = intent === 'add to cart';
    const removeCartItem = intent === 'remove item from cart';
    const addFavoriteItem = intent === 'add to favorite';
    const removeFavoriteItem = intent === 'remove item from favorite';

    let eventData;
    let fetchParams = [`${accountUrl}.json${authToken}`];
    let message;

    const allAccountsData = await getAccountData(fetchParams);

    if (loginPage || resetPage) {
      eventData = await getFormData(formData, ['email', 'password']);
    }

    if (newPasswordPage) {
      eventData = await getFormData(formData, ['password']);
      fetchParams = [`${accountUrl}/user_${id}.json${authToken}`];
    }

    if (signupPage) {
      const id = crypto.getRandomValues(new Uint32Array(1))[0];

      eventData = await getFormData(formData, [
        'fullName',
        'email',
        'password',
      ]);

      if (!checkAccountEmail(allAccountsData.data, eventData).length > 0) {
        fetchParams = [
          `${accountUrl}/user_${id}.json${authToken}`,
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

    if (addressPage) {
      eventData = await getFormData(formData, [
        'fullName',
        'province',
        'city',
        'street',
        'postalCode',
        'phoneNumber',
      ]);
      fetchParams = [
        `${accountUrl}/user_${id}.json${authToken}`,
        {
          method: request.method,
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ 'shipping address': eventData }),
        },
      ];
    }

    if (paymentPage) {
      eventData = await getFormData(formData, [
        'cardName',
        'cardNumber',
        'expiration',
        'CVV',
      ]);
      fetchParams = [
        `${accountUrl}/user_${id}.json${authToken}`,
        {
          method: request.method,
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ 'payment method': eventData }),
        },
      ];
    }

    if (addCartItem || addFavoriteItem) {
      const objName = addCartItem ? 'cart' : 'favorite';

      eventData = JSON.parse(formData.get('product'));
      fetchParams = [
        `${accountUrl}/user_${id}/${objName}/${objName}_${eventData.id}.json${authToken}`,
        {
          method: request.method,
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ ...eventData }),
        },
      ];
    }

    if (removeCartItem || removeFavoriteItem) {
      const objName = removeCartItem ? 'cart' : 'favorite';

      fetchParams = [
        `${accountUrl}/user_${id}/${objName}/${objName}_${formData.get(
          'itemId'
        )}.json${authToken}`,
        {
          method: request.method,
          headers: {
            'Content-Type': 'application/json',
          },
        },
      ];
    }

    const { data } = await getAccountData(...fetchParams);

    if (loginPage)
      return getActionReturnValue(
        checkAccountCredentials(allAccountsData, eventData).length > 0,
        redirect('/QuickMart'),
        'Invalid email or password'
      );

    if (resetPage)
      return getActionReturnValue(
        checkAccountEmail(data, eventData).length !== 0,
        redirect('/QuickMart/authentication/login/email verification'),
        'Invalid email'
      );

    if (newPasswordPage)
      return getActionReturnValue(
        data.password !== eventData.password,
        changePasswordHandler(id, request.method, eventData),
        'New password cannot be the same as your old password'
      );

    if (signupPage) {
      if (!message) {
        return redirect('/QuickMart/authentication/signup/email verification');
      } else {
        return [
          {
            message,
          },
          { status: 401 },
        ];
      }
    }

    if (addressPage || paymentPage) {
      return true;
    } else {
      return [
        {
          message: 'Something went wrong',
        },
        { status: 500 },
      ];
    }
  };
