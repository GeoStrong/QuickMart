import { Stack } from 'react-bootstrap';
import './Footer.scss';
import { NavLink } from 'react-router-dom';
import useCustomSvg from '../../hooks/useCustomSvg';
import useParentUrl from '../../hooks/useParentUrl';

const Footer = () => {
  const {
    getHomeSvg,
    getCategoriesSvg,
    getCartSvg,
    getWishlistSvg,
    getProfileSvg,
  } = useCustomSvg();
  const { originPath, checkLocation } = useParentUrl();

  const homePage = checkLocation('QuickMart');

  return (
    <footer className="footer p-3">
      <Stack direction="horizontal" className="justify-content-between">
        <NavLink
          to={`/${originPath}`}
          className={({ isActive }) =>
            `footer__link text-decoration-none d-flex flex-column align-items-center ${
              isActive ? 'footer__link--active' : ''
            }`
          }
        >
          {getHomeSvg(homePage)}
          <p className="m-0">Home</p>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `footer__link text-decoration-none d-flex flex-column align-items-center ${
              isActive ? 'footer__link--active' : ''
            }`
          }
        >
          {getCategoriesSvg()}
          <p className="m-0">Categories</p>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `footer__link text-decoration-none d-flex flex-column align-items-center ${
              isActive ? 'footer__link--active' : ''
            }`
          }
        >
          {getCartSvg()}
          <p className="m-0">My Cart</p>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `footer__link text-decoration-none d-flex flex-column align-items-center ${
              isActive ? 'footer__link--active' : ''
            }`
          }
        >
          {getWishlistSvg()}
          <p className="m-0">Wishlist</p>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `footer__link text-decoration-none d-flex flex-column align-items-center ${
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
