import useCheckScreenSize from '@/hooks/useCheckScreenSize';
import { useState } from 'react';
import emptyCart from '../../assets/images/empty-cart.png';
import { Container } from 'react-bootstrap';
import HeaderNavigation from '@/components/UI/GlobalUI/HeaderNavigation';
import ShoppingContainer from '@/components/UI/UserShopping/ShoppingContainer';

const CartPage = () => {
  const { renderFooter } = useCheckScreenSize();

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
  ]);

  return (
    <>
      <Container>
        <HeaderNavigation page="My Cart" />
        <ShoppingContainer
          itemsContainer={cartContainer}
          setItemsContainer={setCartContainer}
          element="cart"
        />
      </Container>
      {renderFooter}
    </>
  );
};
export default CartPage;