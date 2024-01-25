import { useEffect } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { accountActions } from './store/account';
import LazyComponent from './utilities/LazyComponent';
import Root from './pages/Root';
import Error from './pages/Error';
import Home from './pages/MainPages/Home';
import LoginPage from './pages/AuthorizationPages/LoginPage';
import SignupPage from './pages/AuthorizationPages/SignupPage';
import Authentication from './pages/AuthorizationPages/Authentication';
import AuthError from './pages/AuthorizationPages/AuthError';
import Login from './components/Authentication/Authorization/Login/Login';
import EmailConfirmation from './components/Authentication/Authorization/Login/EmailConfirmation';
import { useLocalStorage } from 'react-use';
import ProfilePage from './pages/MainPages/ProfilePage';

const App = () => {
  const dispatch = useDispatch();
  const { id, password } = useSelector((state) => state.account);
  const [value] = useLocalStorage('localAccount');

  useEffect(() => {
    if (value) dispatch(accountActions.setAccount(value));
  }, [dispatch, value]);

  const Categories = LazyComponent(() =>
    import('./pages/MainPages/Categories')
  );
  const CartPage = LazyComponent(() => import('./pages/MainPages/CartPage'));
  const WishlistPage = LazyComponent(() =>
    import('./pages/MainPages/WishlistPage')
  );

  const Profile = LazyComponent(() => import('./components/Profile/Profile'));

  const ShippingAddress = LazyComponent(() =>
    import('./components/Profile/ProfileSettings/ShippingAddress')
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

  const lazyLoadUtilities = async (utility, meta, options = []) => {
    const module = await import(`./utilities/${utility}.jsx`);
    if (utility === 'loader') return module[utility]();
    if (utility === 'geoDataLoader') return module[utility]();
    if (utility === 'action') return module[utility](...options)(meta);
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
            return await lazyLoadUtilities('loader');
          },
        },
        {
          path: 'categories',
          element: <Categories />,
          async loader() {
            return await lazyLoadUtilities('loader');
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
          path: 'profile',
          element: <ProfilePage />,
          children: [
            {
              index: true,
              element: <Profile />,
            },
            {
              path: 'shipping address',
              async loader() {
                return await lazyLoadUtilities('geoDataLoader');
              },
              element: <ShippingAddress />,
            },
          ],
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
                    return await lazyLoadUtilities('action', meta);
                  },
                },
                {
                  path: 'reset',
                  element: <EmailConfirmation />,
                  async action(meta) {
                    return await lazyLoadUtilities('action', meta);
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
                    return await lazyLoadUtilities('action', meta, [
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
                    return await lazyLoadUtilities('action', meta);
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
