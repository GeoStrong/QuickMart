import {
  Alert,
  Button,
  ButtonGroup,
  ButtonToolbar,
  Card,
  Col,
  Form,
  Row,
} from 'react-bootstrap';
import { useEffect, useState } from 'react';
import PopupModal from '../GlobalUI/PopupModal';
import RemoveItemSvg from '@/assets/svg/RemoveItemSvg';
import './ShoppingItem.scss';
import { useFetcher } from 'react-router-dom';

const ShoppingItem = ({ onItemsModify, readyItemsState, page }) => {
  const fetcher = useFetcher();
  const [showPopup, setShowPopup] = useState(false);
  const [itemId, setItemId] = useState(null);
  const [items, onRemoveItem, onChangeItem] = onItemsModify;
  const [checkedItems, setCheckedItems] = useState(
    items.reduce((acc, item) => ({ ...acc, [item.id]: true }), {})
  );
  const [readyItems, readyItemsHandler] = readyItemsState;
  const cartPage = page === 'cart';
  const orderPage = page === 'order';

  useEffect(() => {
    readyItemsHandler(items);
  }, [items, readyItemsHandler]);

  const handleCheckChange = (event, id) => {
    setCheckedItems({ ...checkedItems, [id]: event.target.checked });
  };

  const onCheck = (event) => {
    const id = event.target.closest('.shoppingItem__col').id;
    const item = items.find((item) => item.id === +id);

    const isItemInCheckout = readyItems.some(
      (checkoutItem) => checkoutItem.id === item.id
    );

    if (isItemInCheckout) return;
    readyItemsHandler((prevItems) => [...prevItems, item]);
  };

  const onUncheck = (event) => {
    const id = event.target.closest('.shoppingItem__col').id;
    const item = items.find((item) => item.id === +id);
    readyItemsHandler((prevItems) =>
      prevItems.filter((checkoutItem) => checkoutItem.id !== item.id)
    );
  };

  const onRemove = (event) => {
    const id = event.target.closest('.shoppingItem__col').id;
    setShowPopup(true);
    setItemId(id);
  };

  const onQuantityChange = (event) => {
    const id = event.target.closest('.shoppingItem__col').id;
    const checked =
      cartPage &&
      event.target.closest('.shoppingItem__col').querySelector('input').checked;

    const item = items.find((item) => item.id === +id);
    const action = event.target.dataset.action;

    if (cartPage && !checked) return;

    if (item.quantity === 1 && action === '-') return;

    if (action === '-') {
      onChangeItem(item, item.quantity - 1);
    } else {
      onChangeItem(item, item.quantity + 1);
    }
  };

  return (
    <>
      <Row className={`shoppingItem mt-1 ${!cartPage && 'wishlistPage'}`}>
        {items.map((item) => (
          <Col
            key={item.id}
            id={item.id}
            xs={12}
            md={6}
            className="shoppingItem__col mb-2"
          >
            {orderPage && (
              <Alert className="shoppingItem__alert mb-2 p-1 alert-danger rounded-3 text-white bg-danger">
                Estimated time: {Math.floor(Math.random() * 7) + 1} working days
              </Alert>
            )}
            <Card className="shoppingItem__card w-100 flex-row">
              <Card.Img
                className="shoppingItem__img"
                src={item.image || item.images[0]}
              />
              <Card.Body className="shoppingItem__body">
                <div className="shoppingItem__body-header d-flex gap-3 justify-content-between">
                  <Card.Title className="shoppingItem__body-title fw-medium small">
                    {item.title}
                  </Card.Title>
                  {cartPage && (
                    <Form.Check
                      checked={checkedItems[item.id]}
                      onChange={(event) => {
                        handleCheckChange(event, item.id);
                        if (event.target.checked) {
                          onCheck(event);
                        } else {
                          onUncheck(event);
                        }
                      }}
                      id={item.id}
                    />
                  )}
                </div>
                <Card.Text className="shoppingItem__body-text text-dark fw-medium">
                  ${item.price}
                </Card.Text>
                <ButtonToolbar className="shoppingItem__body-toolbar justify-content-between">
                  <ButtonGroup className="shoppingItem__body-group align-items-center small">
                    <Button
                      onClick={onQuantityChange}
                      data-action="-"
                      className="bg-white"
                      disabled={orderPage}
                    >
                      -
                    </Button>
                    <p className="m-0">{item.quantity}</p>
                    <Button
                      onClick={onQuantityChange}
                      data-action="+"
                      className="bg-white"
                      disabled={orderPage}
                    >
                      +
                    </Button>
                  </ButtonGroup>
                  <ButtonGroup className="shoppingItem__body-group shoppingItem__body-group--noborder">
                    {!orderPage && (
                      <Button onClick={onRemove} className="bg-white p-0">
                        <RemoveItemSvg />
                      </Button>
                    )}
                  </ButtonGroup>
                </ButtonToolbar>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <PopupModal
        title="Delete product from wishlist"
        show={showPopup}
        onClose={() => {
          setShowPopup(false);
        }}
      >
        <Button
          variant="white"
          className="py-3 py-sm-2 rounded-3"
          onClick={() => {
            setShowPopup(false);
          }}
        >
          Cancel
        </Button>
        <Button
          variant="dark"
          className="py-3 py-sm-2 rounded-3"
          onClick={() => {
            onRemoveItem(itemId);
            setShowPopup(false);
            fetcher.submit(
              { intent: 'remove item from cart', itemId },
              { method: 'DELETE' }
            );
          }}
        >
          Delete product
        </Button>
      </PopupModal>
    </>
  );
};
export default ShoppingItem;
