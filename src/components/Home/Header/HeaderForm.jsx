import useCheckScreenSize from '@/hooks/useCheckScreenSize';
import { useFormik } from 'formik';
import { useState } from 'react';
import { Form, ListGroup } from 'react-bootstrap';
import { useLockBodyScroll } from 'react-use';
import Filter from '@/components/UI/GlobalUI/Filter';
import './HeaderForm.scss';
import { useNavigate } from 'react-router-dom';
import useParentUrl from '@/hooks/useParentUrl';

const HeaderForm = ({ searchState, searchRef, separate = false }) => {
  const navigate = useNavigate();
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const { isScreenMobile } = useCheckScreenSize();
  const { originPath, parentPath } = useParentUrl();

  const blockScroll = separate ? false : isScreenMobile ? searchState : false;

  useLockBodyScroll(blockScroll);

  const formik = useFormik({
    initialValues: { search: '' },
    onSubmit: (values) => {
      navigate(`/${originPath}/search/?searchText=${values.search}`);
      // setSearchParams(values);
    },
  });

  const getRecentSearch = (event) => {
    searchRef.current.value = event.target.innerText;
    formik.values.search = event.target.innerText;
    searchRef.current.focus();
  };

  return (
    <>
      <Form
        className={`stack__form ${separate ? 'p-3' : 'pt-3'} ${
          isScreenMobile && 'stack__form-mobile w-100'
        } 
        ${searchState && 'bg-white z-3'}
      `}
        onSubmit={formik.handleSubmit}
        style={{ height: `${!separate && isScreenMobile ? '100svh' : ''}` }}
      >
        <Form.Group
          className={`stack__form-group position-relative mb-1 
        ${searchState || separate ? 'd-block' : 'd-none'}
            `}
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
            {...formik.getFieldProps('search')}
          />
          {parentPath === 'search' && <Filter />}
        </Form.Group>
        {searchState && isSearchFocused && (
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
    </>
  );
};
export default HeaderForm;
