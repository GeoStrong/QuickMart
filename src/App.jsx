import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './pages/Root';
import Splashscreen from './components/Authentication/Splashscreen';
import Onboarding from './components/Authentication/Onboarding';
import Login from './components/Authentication/Authorization/Login/Login'; // action as action,
import Signup from './components/Authentication/Authorization/Signup/Signup';
import EmailConfirmation from './components/Authentication/Authorization/Login/EmailConfirmation';
import NewPassword from './components/Authentication/Authorization/Login/NewPassword';
import LoginPage from './pages/LoginPage';
import EmailVerification from './components/Authentication/Authorization/EmailVerification';
import SignupPage from './pages/SignupPage';
import Success from './components/Authentication/Authorization/Success';
import Authentication from './pages/Authentication';
import Error from './pages/Error';
import { action } from './helper/action';
import { useDispatch, useSelector } from 'react-redux';
import { accountActions } from './store/account';
import { useEffect } from 'react';
import Home from './pages/Home';
import { loader } from './helper/loader';

const App = () => {
  const dispatch = useDispatch();
  const { id, password } = useSelector((state) => state.account);
  const localAccount = JSON.parse(localStorage.getItem('localAccount'));

  useEffect(() => {
    if (localAccount) dispatch(accountActions.setAccount(localAccount));
  }, [dispatch, localAccount]);

  const router = createBrowserRouter([
    {
      path: '/QuickMart',
      element: <Root />,
      children: [
        {
          index: true,
          element: <Home />,
          loader: loader,
        },
        {
          path: 'authentication',
          element: <Authentication />,
          children: [
            {
              index: true,
              element: <Splashscreen />,
            },
            {
              path: 'onboarding',
              element: <Onboarding />,
            },
            {
              path: 'login',
              element: <LoginPage />,
              errorElement: <Error />,
              children: [
                {
                  index: true,
                  element: <Login />,
                  action: action(),
                },
                {
                  path: 'reset',
                  element: <EmailConfirmation />,
                  action: action(),
                },
                {
                  path: 'email verification',
                  element: <EmailVerification />,
                },
                {
                  path: 'new password',
                  element: <NewPassword />,
                  action: action(id, password),
                },
                {
                  path: 'success',
                  element: <Success />,
                },
              ],
            },
            {
              path: 'signup',
              element: <SignupPage />,
              children: [
                {
                  index: true,
                  element: <Signup />,
                  action: action(),
                },
                {
                  path: 'email verification',
                  element: <EmailVerification />,
                },
                {
                  path: 'success',
                  element: <Success />,
                },
              ],
            },
          ],
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
