import { Link } from 'react-router-dom';
import { Badge, Button, Stack } from 'react-bootstrap';
import { useEffect, useRef, useState } from 'react';
import useParentUrl from '../../../hooks/useParentUrl';
import useCheckScreenSize from '../../../hooks/useCheckScreenSize';
import useCheckAuth from '../../../hooks/useCheckAuth';
import useCustomSvg from '../../../hooks/useCustomSvg';
import HeaderForm from './HeaderForm';
import logo from '../../../assets/images/logo.png';
import search from '../../../assets/svg/search.svg';
import cancel from '../../../assets/svg/cancel.svg';
import userDefaultProfile from '../../../assets/svg/user-profile.svg';
import './Header.scss';

const Header = (submitHandler) => {
  const searchRef = useRef();
  const [isSearchActive, setIsSearchActive] = useState(false);
  const { originPath } = useParentUrl();
  const { isLoggedIn } = useCheckAuth();
  const { isScreenMobile } = useCheckScreenSize();
  const { getCartSvg, getWishlistSvg } = useCustomSvg();

  useEffect(() => {
    !isScreenMobile && setIsSearchActive(true);
  }, [isScreenMobile]);

  const profileVisibility = () => {
    if (isSearchActive && isScreenMobile) {
      return 'd-none fade';
    } else if (isSearchActive && !isScreenMobile) {
      return 'd-block';
    }
  };

  return (
    <header className="header">
      <Stack
        direction="horizontal"
        gap={3}
        className="justify-content-between position-relative"
      >
        <div className="stack__start">
          <Link to={`/${originPath}`}>
            <img src={logo} alt="logo" className="stack__logo" />
          </Link>
        </div>
        <HeaderForm
          onSubmit={submitHandler}
          searchState={isSearchActive}
          searchRef={searchRef}
        />
        <div className="stack__end d-flex gap-2 gap-md-4 align-items-center">
          {!isSearchActive && (
            <Button
              variant="white"
              className="p-0"
              onClick={() => {
                setIsSearchActive(true);
                setTimeout(() => {
                  searchRef.current.focus();
                }, 0);
              }}
            >
              <img src={search} alt="search" />
            </Button>
          )}
          {(isSearchActive || !isSearchActive) &&
            (isLoggedIn ? (
              <>
                <Link to="cart" className="d-none d-lg-flex position-relative">
                  {getCartSvg('#1c1b1b')}
                  <Badge
                    bg="danger"
                    className="stack__badge position-absolute end-0 d-inline rounded-5"
                  ></Badge>
                </Link>

                <Link
                  to="wishlist"
                  className="d-none d-lg-flex position-relative"
                >
                  {getWishlistSvg('#1c1b1b')}
                  <Badge
                    bg="danger"
                    className="stack__badge position-absolute end-0 d-inline rounded-5"
                  ></Badge>
                </Link>
              </>
            ) : (
              <Link
                to={`/${originPath}/authentication/signup`}
                className="text-dark small fw-light d-none d-sm-block"
              >
                Sign up
              </Link>
            ))}
          <div className={`stack__profile ${profileVisibility()}`}>
            <Link to={`/${originPath}${!isLoggedIn ? '/authentication' : ''}`}>
              <img src={userDefaultProfile} alt="profile" className="w-100" />
            </Link>
          </div>
        </div>

        {isSearchActive && isScreenMobile && (
          <Button
            variant="white"
            className="p-0"
            onClick={() => {
              setIsSearchActive(false);
            }}
          >
            <img src={cancel} alt="cancel" />
          </Button>
        )}
      </Stack>
    </header>
  );
};
export default Header;
