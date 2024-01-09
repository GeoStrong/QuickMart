import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './pages/Root';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import Authentication from './pages/Authentication';
import Error from './pages/Error';
import { useDispatch, useSelector } from 'react-redux';
import { accountActions } from './store/account';
import { useEffect } from 'react';
import LazyComponent from './store/LazyComponent';
import Login from './components/Authentication/Authorization/Login/Login'; // action as action,
import EmailConfirmation from './components/Authentication/Authorization/Login/EmailConfirmation';

const App = () => {
  const dispatch = useDispatch();
  const { id, password } = useSelector((state) => state.account);
  const localAccount = JSON.parse(localStorage.getItem('localAccount'));

  useEffect(() => {
    if (localAccount) dispatch(accountActions.setAccount(localAccount));
  }, [dispatch, localAccount]);

  const Splashscreen = LazyComponent(() =>
    import('./components/Authentication/Splashscreen')
  );

  const Onboarding = LazyComponent(() =>
    import('./components/Authentication/Onboarding')
  );

  const Signup = LazyComponent(() =>
    import('./components/Authentication/Authorization/Signup/Signup')
  );

  const NewPassword = LazyComponent(() =>
    import('./components/Authentication/Authorization/Login/NewPassword')
  );

  const EmailVerification = LazyComponent(() =>
    import('./components/Authentication/Authorization/EmailVerification')
  );

  const Success = LazyComponent(() =>
    import('./components/Authentication/Authorization/Success')
  );

  const lazyLoadHelpers = async (helper, meta, options = []) => {
    const module = await import(/* @vite-ignore */ `./helper/${helper}`);
    if (helper === 'loader') return module[helper]();
    if (helper === 'action') return module[helper](...options)(meta);
  };

  const router = createBrowserRouter([
    {
      path: '/QuickMart',
      element: <Root />,
      children: [
        {
          index: true,
          element: <Home />,
          async loader() {
            return await lazyLoadHelpers('loader');
          },
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
                  async action(meta) {
                    return await lazyLoadHelpers('action', meta);
                  },
                },
                {
                  path: 'reset',
                  element: <EmailConfirmation />,
                  async action(meta) {
                    return await lazyLoadHelpers('action', meta);
                  },
                },
                {
                  path: 'email verification',
                  element: <EmailVerification />,
                },
                {
                  path: 'new password',
                  element: <NewPassword />,
                  async action(meta) {
                    return await lazyLoadHelpers('action', meta, [
                      id,
                      password,
                    ]);
                  },
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
                  async action(meta) {
                    return await lazyLoadHelpers('action', meta);
                  },
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
