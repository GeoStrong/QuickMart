import useCheckScreenSize from '@/hooks/useCheckScreenSize';
import { Suspense } from 'react';
import { Container } from 'react-bootstrap';
import ShoppingContainer from '@/components/UI/UserShopping/ShoppingContainer';
import emptyWishlistImg from '../../assets/images/empty-wishlist.png';
import { Await, useRouteLoaderData } from 'react-router-dom';
import SpinnerLoader from '@/components/UI/SpinnerLoaders/SpinnerLoader';

const WishlistPage = () => {
  const { renderHeader, renderFooter } = useCheckScreenSize();
  const loaderData = useRouteLoaderData('root');

  const emptyWishlistTitle = 'Your wishlist is empty';
  const emptyWishlistText =
    'Tap heart button to start saving your favorite items.';

  return (
    <>
      <Container>
        {renderHeader('Wishlist')}
        <Suspense fallback={<SpinnerLoader />}>
          <Await resolve={loaderData.accountData}>
            {(resolvedData) => (
              <ShoppingContainer
                accountData={resolvedData}
                emptyItemInfo={[
                  emptyWishlistTitle,
                  emptyWishlistText,
                  emptyWishlistImg,
                ]}
                element="wishlist"
              />
            )}
          </Await>
        </Suspense>
      </Container>
      {renderFooter}
    </>
  );
};

export default WishlistPage;
