import ShoppingItem from '@/components/UI/UserShopping/ShoppingItem';
import RedirectionPage from '../GlobalUI/RedirectionPage';
import useParentUrl from '@/hooks/useParentUrl';
import CartCheckout from '@/components/Cart/CartCheckout';
import { useEffect, useState } from 'react';
import useCheckAuth from '@/hooks/useCheckAuth';

const ShoppingContainer = ({ itemsContainerState, element, emptyItemInfo }) => {
  const [itemsContainer, setItemsContainer] = itemsContainerState;
  const [readyToCheckoutItems, setReadyToCheckoutItems] = useState();
  const { originPath } = useParentUrl();
  const { checkAuthHandler } = useCheckAuth();

  useEffect(() => {
    checkAuthHandler(`/${originPath}/authentication/login`);
  }, [checkAuthHandler, originPath]);

  const cartPage = element === 'cart';

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
      <div className="container__content mb-6 pt-5 d-flex flex-column flex-lg-row gap-5 justify-content-lg-between">
        {itemsContainer.length > 0 ? (
          <ShoppingItem
            onItemsModify={[
              itemsContainer,
              removeItemHandler,
              changeItemQuantityHandler,
            ]}
            readyItemsState={[readyToCheckoutItems, setReadyToCheckoutItems]}
            page={element}
          />
        ) : (
          <RedirectionPage
            title={emptyItemInfo[0]}
            text={emptyItemInfo[1]}
            navigateTo={`/${originPath}/categories`}
            buttonName="Explore Categories"
            img={emptyItemInfo[2]}
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
