import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { useState } from 'react';
import LazyComponent from './utilities/LazyComponent';
import Root from './pages/Root';
import Error from './pages/Errors/Error';
import ProductError from './pages/Errors/ProductError';
import AuthError from './pages/Errors/AuthError';
import LoginPage from './pages/AuthorizationPages/LoginPage';
import SignupPage from './pages/AuthorizationPages/SignupPage';
import Authentication from './pages/AuthorizationPages/Authentication';
import Login from './components/Authentication/Authorization/Login/Login';
import EmailConfirmation from './components/Authentication/Authorization/Login/EmailConfirmation';
import ProfilePage from './pages/MainPages/ProfilePage';
import Support from './pages/Support';

const App = () => {
  const [id, setId] = useState(null);
  const Home = LazyComponent(() => import('./pages/MainPages/Home'));

  const CategoriesPage = LazyComponent(() =>
    import('./pages/MainPages/CategoriesPage')
  );
  const CategoryPage = LazyComponent(() =>
    import('./pages/MainPages/CategoryPage')
  );
  const Category = LazyComponent(() =>
    import('./components/Categories/Category')
  );
  const ProductPage = LazyComponent(() =>
    import('./pages/MainPages/ProductPage')
  );

  const SearchPage = LazyComponent(() =>
    import('./pages/MainPages/SearchPage')
  );

  const CartPage = LazyComponent(() => import('./pages/MainPages/CartPage'));
  const WishlistPage = LazyComponent(() =>
    import('./pages/MainPages/WishlistPage')
  );

  const Profile = LazyComponent(() => import('./components/Profile/Profile'));

  const SettingsPage = LazyComponent(() =>
    import('./pages/MainPages/SettingsPage')
  );

  const ShippingAddress = LazyComponent(() =>
    import('./components/Profile/ProfileSettings/ShippingAddress')
  );

  const Payment = LazyComponent(() =>
    import('./components/Profile/ProfileSettings/Payment')
  );

  const Order = LazyComponent(() =>
    import('./components/Profile/ProfileSettings/Order')
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

  const Privacy = LazyComponent(() => import('./components/Support/Privacy'));
  const Terms = LazyComponent(() => import('./components/Support/Terms'));
  const Faq = LazyComponent(() => import('./components/Support/Faq'));

  const lazyLoadUtilities = async (utility, meta, options = []) => {
    const module = await import(`./utilities/${utility}.jsx`);
    if (utility === 'loader') return module[utility]();
    if (utility === 'profileSettingsLoader') return module[utility]();
    if (utility === 'accountDataLoader') return module[utility](...options);
    if (utility === 'action') return module[utility](...options)(meta);
    if (utility === 'categoryProductsLoader') return module[utility](meta);
    if (utility === 'filterProductsLoader') return module[utility](meta);
  };

  const router = createBrowserRouter([
    {
      path: '/QuickMart',
      id: 'root',
      element: <Root onIdChange={setId} />,
      errorElement: <Error />,
      async loader(meta) {
        return await lazyLoadUtilities('accountDataLoader', meta, [id]);
      },
      children: [
        {
          index: true,
          element: <Home />,
          async loader() {
            return await lazyLoadUtilities('loader');
          },
        },
        {
          id: 'categories',
          path: 'categories',
          async loader() {
            return await lazyLoadUtilities('loader');
          },
          children: [
            {
              index: true,
              element: <CategoriesPage />,
            },
            {
              path: ':category',
              element: <CategoryPage />,
              children: [
                {
                  index: true,
                  element: <Category />,
                  async loader(meta) {
                    return await lazyLoadUtilities(
                      'categoryProductsLoader',
                      meta
                    );
                  },
                },
                {
                  path: 'product/:product',
                  element: <ProductPage />,
                  errorElement: <ProductError />,
                  async loader(meta) {
                    return await lazyLoadUtilities(
                      'categoryProductsLoader',
                      meta
                    );
                  },
                  async action(meta) {
                    return await lazyLoadUtilities('action', meta, [id]);
                  },
                },
              ],
            },
          ],
        },
        {
          path: 'search',
          element: <SearchPage />,
          async loader() {
            return await lazyLoadUtilities('filterProductsLoader');
          },
        },
        {
          path: 'cart',
          element: <CartPage />,
          async action(meta) {
            return await lazyLoadUtilities('action', meta, [id]);
          },
        },
        {
          path: 'wishlist',
          element: <WishlistPage />,
          async action(meta) {
            return await lazyLoadUtilities('action', meta, [id]);
          },
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
              path: 'settings',
              element: <SettingsPage />,
              async loader() {
                return await lazyLoadUtilities('profileSettingsLoader');
              },
              children: [
                {
                  path: 'shipping address',
                  element: <ShippingAddress />,
                  async action(meta) {
                    return await lazyLoadUtilities('action', meta, [id]);
                  },
                },
                {
                  path: 'payment',
                  element: <Payment />,
                  async action(meta) {
                    return await lazyLoadUtilities('action', meta, [id]);
                  },
                },
              ],
            },
            // {
            //   path: 'shipping address',
            //   id: 'settings',
            //   async loader() {
            //     return await lazyLoadUtilities('profileSettingsLoader');
            //   },
            //   async action(meta) {
            //     return await lazyLoadUtilities('action', meta, [id]);
            //   },
            //   element: <ShippingAddress />,
            // },
            // {
            //   path: 'payment',
            //   element: <Payment />,
            //   async loader() {
            //     return await lazyLoadUtilities('profileSettingsLoader');
            //   },
            //   async action(meta) {
            //     return await lazyLoadUtilities('action', meta, [id]);
            //   },
            // },
            {
              path: 'order history',
              element: <Order />,
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
                    return await lazyLoadUtilities('action', meta, [id]);
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
        {
          path: 'support',
          element: <Support />,
          children: [
            { path: 'privacy', element: <Privacy /> },
            {
              path: 'terms',
              element: <Terms />,
            },
            {
              path: 'faq',
              element: <Faq />,
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
