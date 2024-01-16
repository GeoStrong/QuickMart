import { Container } from 'react-bootstrap';
import HeaderNavigation from '../UI/GlobalUI/HeaderNavigation';
import RedirectionPage from '../UI/GlobalUI/RedirectionPage';
import emptyCart from '../../assets/images/empty-cart.png';
import useParentUrl from '@/hooks/useParentUrl';
import './Cart.scss';
import CartItem from './CartItem';
import { useState } from 'react';
import CartCheckout from './CartCheckout';
import useCheckScreenSize from '@/hooks/useCheckScreenSize';

const Cart = () => {
  const { originPath } = useParentUrl();
  const { renderFooter } = useCheckScreenSize();

  const emptyCartTitle = 'Your cart is empty';
  const emptyCartText =
    'Looks like you have not added anything in your cart. Go ahead and explore top categories.';

  const [cartContainer, setCartContainer] = useState([
    {
      id: 15,
      name: 'Loop Silicone Strong Magnetic Watch',
      price: 20.25,
      img: emptyCart,
      quantity: 2,
    },
    {
      id: 20,
      name: 'Loop Silicone Strong Magnetic Watch',
      price: 15.25,
      img: emptyCart,
      quantity: 1,
    },
    {
      id: 21,
      name: 'Loop Silicone Strong Magnetic Watch',
      price: 15.25,
      img: emptyCart,
      quantity: 1,
    },
    {
      id: 22,
      name: 'Loop Silicone Strong Magnetic Watch',
      price: 15.25,
      img: emptyCart,
      quantity: 1,
    },
    {
      id: 23,
      name: 'Loop Silicone Strong Magnetic Watch',
      price: 15.25,
      img: emptyCart,
      quantity: 1,
    },
    {
      id: 24,
      name: 'Loop Silicone Strong Magnetic Watch',
      price: 15.25,
      img: emptyCart,
      quantity: 1,
    },
  ]);

  const [readyToCheckoutItems, setReadyToCheckoutItems] = useState();

  const removeItemHandler = (index) =>
    setCartContainer((prevItems) =>
      prevItems.filter((checkoutItem) => checkoutItem.id !== +index)
    );

  const changeItemQuantityHandler = (item, quantity) => {
    setCartContainer((prevItems) => {
      item.quantity = quantity;
      return [...prevItems];
    });
  };

  return (
    <>
      <Container>
        <HeaderNavigation page="My Cart" />
        <div className="container__content mb-6 d-flex flex-column flex-lg-row gap-3 justify-content-lg-between">
          {cartContainer.length > 0 ? (
            <CartItem
              items={cartContainer}
              onRemoveItem={removeItemHandler}
              onChangeItem={changeItemQuantityHandler}
              readyItems={readyToCheckoutItems}
              readyItemsHandler={setReadyToCheckoutItems}
            />
          ) : (
            <RedirectionPage
              title={emptyCartTitle}
              text={emptyCartText}
              navigateTo={`/${originPath}/categories`}
              buttonName="Explore Categories"
              img={emptyCart}
            />
          )}
          {cartContainer.length > 0 && (
            <CartCheckout items={readyToCheckoutItems} />
          )}
        </div>
      </Container>
      {renderFooter}
    </>
  );
};
export default Cart;
