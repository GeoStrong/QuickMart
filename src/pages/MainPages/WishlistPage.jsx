import useCheckScreenSize from '@/hooks/useCheckScreenSize';
import { useState } from 'react';
import emptyWishlist from '../../assets/images/empty-wishlist.png';
import { Container } from 'react-bootstrap';
import HeaderNavigation from '@/components/UI/GlobalUI/HeaderNavigation';
import ShoppingContainer from '@/components/UI/UserShopping/ShoppingContainer';

const WishlistPage = () => {
  const { renderFooter } = useCheckScreenSize();

  const [wishlistContainer, setWishlistContainer] = useState([
    {
      id: 15,
      name: 'Loop Silicone Strong Magnetic Watch',
      price: 20.25,
      img: emptyWishlist,
      quantity: 2,
    },
    {
      id: 20,
      name: 'Loop Silicone Strong Magnetic Watch',
      price: 15.25,
      img: emptyWishlist,
      quantity: 1,
    },
  ]);
  return (
    <>
      <Container>
        <HeaderNavigation page="Wishlist" />
        <ShoppingContainer
          itemsContainer={wishlistContainer}
          setItemsContainer={setWishlistContainer}
          element="wishlist"
        />
      </Container>
      {renderFooter}
    </>
  );
};

export default WishlistPage;
