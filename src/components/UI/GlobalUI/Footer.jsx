import { Stack } from 'react-bootstrap';
import './Footer.scss';
import { NavLink } from 'react-router-dom';
import useCustomSvg from '../../../hooks/useCustomSvg';
import useParentUrl from '../../../hooks/useParentUrl';

const Footer = () => {
  const {
    getHomeSvg,
    getCategoriesSvg,
    getCartSvg,
    getWishlistSvg,
    getProfileSvg,
  } = useCustomSvg();
  const { originPath, currentPath, checkLocation } = useParentUrl();

  const homePage = currentPath === 'QuickMart';
  const categoriesPage = checkLocation('categories');
  const cartPage = checkLocation('cart');
  const wishlistPage = checkLocation('wishlist');

  return (
    <footer className="footer p-3">
      <Stack direction="horizontal" className="justify-content-between">
        <NavLink
          to={`/${originPath}`}
          className={({ isActive }) =>
            `footer__link d-flex flex-column align-items-center ${
              isActive ? 'footer__link--active' : ''
            }`
          }
        >
          {getHomeSvg(homePage)}
          <p className="m-0">Home</p>
        </NavLink>
        <NavLink
          to={`/${originPath}/categories`}
          className={({ isActive }) =>
            `footer__link d-flex flex-column align-items-center ${
              isActive ? 'footer__link--active' : ''
            }`
          }
        >
          {getCategoriesSvg(categoriesPage)}
          <p className="m-0">Categories</p>
        </NavLink>
        <NavLink
          to={`/${originPath}/cart`}
          className={({ isActive }) =>
            `footer__link d-flex flex-column align-items-center ${
              isActive ? 'footer__link--active' : ''
            }`
          }
        >
          {getCartSvg('#6F7384', cartPage)}
          <p className="m-0">My Cart</p>
        </NavLink>
        <NavLink
          to={`/${originPath}/wishlist`}
          className={({ isActive }) =>
            `footer__link d-flex flex-column align-items-center ${
              isActive ? 'footer__link--active' : ''
            }`
          }
        >
          {getWishlistSvg('#6F7384', wishlistPage)}
          <p className="m-0">Wishlist</p>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `footer__link d-flex flex-column align-items-center ${
              isActive ? 'footer__link--active' : ''
            }`
          }
        >
          {getProfileSvg()}
          <p className="m-0">Profile</p>
        </NavLink>
      </Stack>
    </footer>
  );
};
export default Footer;
