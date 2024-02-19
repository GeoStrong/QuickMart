import useCheckScreenSize from '@/hooks/useCheckScreenSize';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import HeaderNavigation from '@/components/UI/GlobalUI/HeaderNavigation';
import ShoppingContainer from '@/components/UI/UserShopping/ShoppingContainer';
import emptyWishlistImg from '../../assets/images/empty-wishlist.png';
import { useRouteLoaderData } from 'react-router-dom';

const WishlistPage = () => {
  const { renderFooter } = useCheckScreenSize();
  const loaderData = useRouteLoaderData('root');

  const [wishlistContainer, setWishlistContainer] = useState(
    loaderData?.favorite ? Object.values(loaderData.favorite) : []
  );

  const emptyWishlistTitle = 'Your wishlist is empty';
  const emptyWishlistText =
    'Tap heart button to start saving your favorite items.';

  return (
    <>
      <Container>
        <HeaderNavigation page="Wishlist" />
        <ShoppingContainer
          itemsContainerState={[wishlistContainer, setWishlistContainer]}
          emptyItemInfo={[
            emptyWishlistTitle,
            emptyWishlistText,
            emptyWishlistImg,
          ]}
          element="wishlist"
        />
      </Container>
      {renderFooter}
    </>
  );
};

export default WishlistPage;
