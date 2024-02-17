import useCheckScreenSize from '@/hooks/useCheckScreenSize';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import HeaderNavigation from '@/components/UI/GlobalUI/HeaderNavigation';
import ShoppingContainer from '@/components/UI/UserShopping/ShoppingContainer';
import emptyCartImg from '../../assets/images/empty-cart.png';
import { useRouteLoaderData } from 'react-router-dom';

const CartPage = () => {
  const { renderFooter } = useCheckScreenSize();
  const loaderData = useRouteLoaderData('root');

  const { cart } = loaderData !== null && loaderData;

  const [cartContainer, setCartContainer] = useState(Object.values(cart));

  const emptyCartTitle = 'Your cart is empty';
  const emptyCartText =
    'Looks like you have not added anything in your cart. Go ahead and explore top categories.';

  return (
    <>
      <Container>
        <HeaderNavigation page="My Cart" />
        <ShoppingContainer
          itemsContainerState={[cartContainer, setCartContainer]}
          emptyItemInfo={[emptyCartTitle, emptyCartText, emptyCartImg]}
          element="cart"
        />
      </Container>
      {renderFooter}
    </>
  );
};
export default CartPage;
