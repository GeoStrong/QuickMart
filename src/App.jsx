import { useEffect } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { accountActions } from './store/account';
import LazyComponent from './helper/LazyComponent';
import Root from './pages/Root';
import Error from './pages/Error';
import Home from './pages/MainPages/Home';
import LoginPage from './pages/AuthorizationPages/LoginPage';
import SignupPage from './pages/AuthorizationPages/SignupPage';
import Authentication from './pages/AuthorizationPages/Authentication';
import AuthError from './pages/AuthorizationPages/AuthError';
import Login from './components/Authentication/Authorization/Login/Login';
import EmailConfirmation from './components/Authentication/Authorization/Login/EmailConfirmation';

const App = () => {
  const dispatch = useDispatch();
  const { id, password } = useSelector((state) => state.account);
  const localAccount = JSON.parse(localStorage.getItem('localAccount'));

  useEffect(() => {
    if (localAccount) dispatch(accountActions.setAccount(localAccount));
  }, [dispatch, localAccount]);

  const Categories = LazyComponent(() =>
    import('./pages/MainPages/Categories')
  );
  const CartPage = LazyComponent(() => import('./pages/MainPages/CartPage'));
  const WishlistPage = LazyComponent(() =>
    import('./pages/MainPages/WishlistPage')
  );

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
    const module = await import(`./helper/${helper}.jsx`);
    if (helper === 'loader') return module[helper]();
    if (helper === 'action') return module[helper](...options)(meta);
  };

  const router = createBrowserRouter([
    {
      path: '/QuickMart',
      element: <Root />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Home />,
          async loader() {
            return await lazyLoadHelpers('loader');
          },
        },
        {
          path: 'categories',
          element: <Categories />,
          async loader() {
            return await lazyLoadHelpers('loader');
          },
        },
        {
          path: 'cart',
          element: <CartPage />,
        },
        {
          path: 'wishlist',
          element: <WishlistPage />,
        },
        {
          path: 'authentication',
          element: <Authentication />,
          errorElement: <AuthError />,
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
