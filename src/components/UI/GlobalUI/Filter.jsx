import { Button, Form } from 'react-bootstrap';
import PopupModal from './PopupModal';
import filterImg from '../../../assets/svg/filter.svg';
import { useState } from 'react';

const Filter = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [filterState, setFilterState] = useState({
    price: null,
    name: null,
  });

  const [filterPriceHolder, setFilterPriceHolder] = useState(null);
  const [filterNameHolder, setFilterNameHolder] = useState(null);

  const onClosePopup = () => {
    setShowPopup(false);
  };

  const filterChangeHandler = (event) => {
    if (event.target.name === 'price') {
      setFilterPriceHolder(+event.target.id);
    } else {
      setFilterNameHolder(+event.target.id);
    }
  };

  const filterSubmitHandler = (event) => {
    event.preventDefault();
    setShowPopup(false);
    setFilterState((prevFilter) => ({
      ...prevFilter,
      price: filterPriceHolder,
      name: filterNameHolder,
    }));
  };

  return (
    <>
      <Button
        variant="white"
        className="stack__form-btn p-0 position-absolute"
        tabIndex={0}
        onClick={() => {
          setShowPopup(true);
        }}
      >
        <img src={filterImg} alt="filter" />
      </Button>
      <PopupModal title="Filter" show={showPopup} onClose={onClosePopup}>
        <Form className="filter d-flex flex-column gap-3">
          <Form.Check
            name="price"
            type="radio"
            id="1"
            label="Price (Low to High)"
            className="filter__checkbox fw-lighter"
            onChange={filterChangeHandler}
            defaultChecked={filterState.price === 1}
          />
          <Form.Check
            name="price"
            type="radio"
            id="2"
            label="Price (High to Low)"
            className="filter__checkbox fw-lighter"
            onChange={filterChangeHandler}
            defaultChecked={filterState.price === 2}
          />
          <Form.Check
            name="name"
            type="radio"
            id="3"
            label="A-Z"
            className="filter__checkbox fw-lighter"
            onChange={filterChangeHandler}
            defaultChecked={filterState.name === 3}
          />
          <Form.Check
            name="name"
            type="radio"
            id="4"
            label="Z-A"
            className="filter__checkbox fw-lighter"
            onChange={filterChangeHandler}
            defaultChecked={filterState.name === 4}
          />
          <Button variant="dark" onClick={filterSubmitHandler}>
            Apply
          </Button>
        </Form>
      </PopupModal>
    </>
  );
};
export default Filter;
