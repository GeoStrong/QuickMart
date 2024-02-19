import useCheckScreenSize from '@/hooks/useCheckScreenSize';
import { Suspense } from 'react';
import { Container } from 'react-bootstrap';
import HeaderNavigation from '@/components/UI/GlobalUI/HeaderNavigation';
import ShoppingContainer from '@/components/UI/UserShopping/ShoppingContainer';
import emptyCartImg from '../../assets/images/empty-cart.png';
import { Await, useRouteLoaderData } from 'react-router-dom';
import SpinnerLoader from '@/components/UI/SpinnerLoaders/SpinnerLoader';

const CartPage = () => {
  const { renderFooter } = useCheckScreenSize();
  const loaderData = useRouteLoaderData('root');

  const emptyCartTitle = 'Your cart is empty';
  const emptyCartText =
    'Looks like you have not added anything in your cart. Go ahead and explore top categories.';

  return (
    <>
      <Container>
        <HeaderNavigation page="My Cart" />
        <Suspense fallback={<SpinnerLoader />}>
          <Await resolve={loaderData.accountData}>
            {(resolvedData) => (
              <ShoppingContainer
                accountData={resolvedData}
                emptyItemInfo={[emptyCartTitle, emptyCartText, emptyCartImg]}
                element="cart"
              />
            )}
          </Await>
        </Suspense>
      </Container>
      {renderFooter}
    </>
  );
};
export default CartPage;
