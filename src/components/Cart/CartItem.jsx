import {
  Button,
  ButtonGroup,
  ButtonToolbar,
  Card,
  Col,
  Form,
  Row,
} from 'react-bootstrap';
import RemoveItemSvg from '@/assets/svg/RemoveItemSvg';
import { useEffect, useState } from 'react';
import './CartItem.scss';

const CartItem = ({
  items,
  onRemoveItem,
  onChangeItem,
  readyItems,
  readyItemsHandler,
}) => {
  const [checkedItems, setCheckedItems] = useState(
    items.reduce((acc, item) => ({ ...acc, [item.id]: true }), {})
  );

  const handleCheckChange = (event, id) => {
    setCheckedItems({ ...checkedItems, [id]: event.target.checked });
  };

  useEffect(() => {
    readyItemsHandler(items);
  }, [items, readyItemsHandler]);

  const onCheck = (event) => {
    const id = event.target.closest('.cartItem__col').id;
    const item = items.find((item) => item.id === +id);

    const isItemInCheckout = readyItems.some(
      (checkoutItem) => checkoutItem.id === item.id
    );

    if (isItemInCheckout) return;
    readyItemsHandler((prevItems) => [...prevItems, item]);
  };

  const onUncheck = (event) => {
    const id = event.target.closest('.cartItem__col').id;
    const item = items.find((item) => item.id === +id);
    readyItemsHandler((prevItems) =>
      prevItems.filter((checkoutItem) => checkoutItem.id !== item.id)
    );
  };

  const onRemove = (event) => {
    const id = event.target.closest('.cartItem__col').id;
    onRemoveItem(id);
  };

  const onQuantityChange = (event) => {
    const id = event.target.closest('.cartItem__col').id;
    const checked = event.target
      .closest('.cartItem__col')
      .querySelector('input').checked;

    const item = items.find((item) => item.id === +id);
    const action = event.target.dataset.action;

    if (!checked) return;

    if (item.quantity === 1 && action === '-') return;

    if (action === '-') {
      onChangeItem(item, item.quantity - 1);
    } else {
      onChangeItem(item, item.quantity + 1);
    }
  };

  return (
    <Row className="cartItem mt-1 overflow-y-scroll">
      {items.map((item) => (
        <Col
          key={item.id}
          id={item.id}
          xs={12}
          md={6}
          className="cartItem__col"
        >
          <Card className="cartItem__card w-100 flex-row">
            <Card.Img className="cartItem__img" src={item.img} />
            <Card.Body className="cartItem__body">
              <div className="cartItem__body-header d-flex gap-3">
                <Card.Title className="cartItem__body-title fw-medium">
                  {item.name}
                </Card.Title>
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
              </div>
              <Card.Text className="cartItem__body-text text-dark fw-medium">
                ${item.price}
              </Card.Text>
              <ButtonToolbar className="cartItem__body-toolbar justify-content-between">
                <ButtonGroup className="cartItem__body-group align-items-center small">
                  <Button
                    onClick={onQuantityChange}
                    data-action="-"
                    className="bg-white"
                  >
                    -
                  </Button>
                  <p className="m-0">{item.quantity}</p>
                  <Button
                    onClick={onQuantityChange}
                    data-action="+"
                    className="bg-white"
                  >
                    +
                  </Button>
                </ButtonGroup>
                <ButtonGroup className="cartItem__body-group cartItem__body-group--noborder">
                  <Button onClick={onRemove} className="bg-white p-0">
                    <RemoveItemSvg />
                  </Button>
                </ButtonGroup>
              </ButtonToolbar>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};
export default CartItem;
