import { Link } from 'react-router-dom';
import { Badge, Button, Form, ListGroup, Stack } from 'react-bootstrap';
import { useEffect, useRef, useState } from 'react';
import { useFormik } from 'formik';
import useParentUrl from '../../hooks/useParentUrl';
import logo from '../../assets/images/logo.png';
import search from '../../assets/svg/search.svg';
import userDefaultProfile from '../../assets/svg/user-profile.svg';
import cancel from '../../assets/svg/cancel.svg';
import filter from '../../assets/svg/filter.svg';
import './Header.scss';
import useCheckScreenSize from '../../hooks/useCheckScreenSize';
import useCheckAuth from '../../hooks/useCheckAuth';
import useCustomSvg from '../../hooks/useCustomSvg';

const Header = (submitHandler) => {
  const searchRef = useRef();
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const { originPath, parentPath } = useParentUrl();
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

  const getRecentSearch = (event) => {
    searchRef.current.value = event.target.innerText;
    searchRef.current.focus();
  };

  const formik = useFormik({
    initialValues: { search: '' },
    onSubmit: submitHandler,
  });

  return (
    <header className="header">
      <Stack
        direction="horizontal"
        gap={3}
        className="justify-content-between position-relative"
      >
        <div className="stack__start">
          <Link to={`/${originPath}/${parentPath}`}>
            <img src={logo} alt="logo" className="stack__logo" />
          </Link>
        </div>
        <Form
          className={`stack__form z-3 ${
            isScreenMobile && 'stack__form-mobile w-100'
          } ${isSearchActive && 'bg-white'}`}
          onSubmit={formik.handleSubmit}
        >
          <Form.Group
            className={`stack__form-group position-relative mb-1 ${
              isSearchActive ? 'd-block' : 'd-none'
            }`}
          >
            <Form.Control
              ref={searchRef}
              type="text"
              id="search"
              placeholder="Search"
              className="stack__form-input py-3 rounded-3 ps-5 fw-normal"
              onFocus={() => {
                setIsSearchFocused(true);
              }}
              onBlur={() => {
                setTimeout(() => {
                  setIsSearchFocused(false);
                }, 100);
              }}
            />
            <Button
              variant="white"
              className="stack__form-btn p-0 position-absolute"
              tabIndex={0}
            >
              <img src={filter} alt="filter" />
            </Button>
          </Form.Group>

          {isSearchActive && isSearchFocused && (
            <Form.Group
              className="position-absolute w-100"
              onClick={() => {
                setIsSearchFocused(true);
              }}
            >
              <Form.Text className="text-dark">RECENT SEARCH</Form.Text>
              <ListGroup className="stack__list">
                <ListGroup.Item
                  className="stack__item border-0 border-bottom small fw-medium"
                  onClick={getRecentSearch}
                >
                  Cras justo odio
                </ListGroup.Item>
              </ListGroup>
            </Form.Group>
          )}
        </Form>
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
          <Link className="d-none d-md-flex position-relative">
            {getCartSvg('#1c1b1b')}
            <Badge
              bg="danger"
              className="stack__badge position-absolute end-0 d-inline rounded-5"
            ></Badge>
          </Link>

          {isLoggedIn && (
            <Link className="d-none d-md-flex position-relative">
              {getWishlistSvg('#1c1b1b')}
              <Badge
                bg="danger"
                className="stack__badge position-absolute end-0 d-inline rounded-5"
              ></Badge>
            </Link>
          )}

          <div className={`stack__profile ${profileVisibility()}`}>
            <Link
              to={`/${originPath}/${!isLoggedIn ? 'authentication/login' : ''}`}
            >
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
