import ShoppingItem from '@/components/UI/UserShopping/ShoppingItem';
import RedirectionPage from '../GlobalUI/RedirectionPage';
import useParentUrl from '@/hooks/useParentUrl';
import emptyCart from '../../../assets/images/empty-cart.png';
import emptyWishlist from '../../../assets/images/empty-wishlist.png';
import CartCheckout from '@/components/Cart/CartCheckout';
import { useState } from 'react';
import useCheckAuth from '@/hooks/useCheckAuth';
import { useEffectOnce } from 'react-use';

const ShoppingContainer = ({ itemsContainer, setItemsContainer, element }) => {
  const [readyToCheckoutItems, setReadyToCheckoutItems] = useState();
  const { originPath } = useParentUrl();

  const { checkAuthHandler } = useCheckAuth();

  useEffectOnce(() => {
    checkAuthHandler(`/${originPath}/authentication/login`);
  });

  const cartPage = element === 'cart';
  const wishlistPage = element === 'wishlist';

  const emptyCartTitle = `${
    cartPage ? 'Your cart is empty' : 'Your wishlist is empty'
  }`;

  const emptyCartText = `${
    cartPage
      ? 'Looks like you have not added anything in your cart. Go ahead and explore top categories.'
      : 'Tap heart button to start saving your favorite items.'
  }`;

  const removeItemHandler = (index) =>
    setItemsContainer((prevItems) =>
      prevItems.filter((checkoutItem) => checkoutItem.id !== +index)
    );

  const changeItemQuantityHandler = (item, quantity) => {
    setItemsContainer((prevItems) => {
      item.quantity = quantity;
      return [...prevItems];
    });
  };

  return (
    <>
      <div className="container__content mb-6 d-flex flex-column flex-lg-row gap-5 justify-content-lg-between">
        {itemsContainer.length > 0 ? (
          <ShoppingItem
            items={itemsContainer}
            onRemoveItem={removeItemHandler}
            onChangeItem={changeItemQuantityHandler}
            readyItems={readyToCheckoutItems}
            readyItemsHandler={setReadyToCheckoutItems}
            isWishlist={wishlistPage}
          />
        ) : (
          <RedirectionPage
            title={emptyCartTitle}
            text={emptyCartText}
            navigateTo={`/${originPath}/categories`}
            buttonName="Explore Categories"
            img={cartPage ? emptyCart : emptyWishlist}
          />
        )}
        {itemsContainer.length > 0 && cartPage && (
          <CartCheckout items={readyToCheckoutItems} />
        )}
      </div>
    </>
  );
};

export default ShoppingContainer;
