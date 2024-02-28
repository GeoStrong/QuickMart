import useCheckScreenSize from '@/hooks/useCheckScreenSize';
import { useState } from 'react';
import { Button, ButtonGroup, Container } from 'react-bootstrap';
import orderImg from '@/assets/images/order.png';
import emptyCart from '../../../assets/images/empty-cart.png';
import ShoppingContainer from '@/components/UI/UserShopping/ShoppingContainer';
import { useOutletContext } from 'react-router-dom';
import { useEffectOnce } from 'react-use';
import HeaderNavigation from '@/components/UI/GlobalUI/HeaderNavigation';

const Order = () => {
  const [activeTab, setActiveTab] = useState('ongoing');
  const { setDisplayProfilePanel } = useOutletContext();
  const { isScreenMobile } = useCheckScreenSize();

  useEffectOnce(() => {
    setDisplayProfilePanel(true);
  });

  const ongoingTab = activeTab === 'ongoing';
  const completedTab = activeTab === 'completed';

  const ongoingItemsContainer = [
    {
      id: 33,
      title: 'Loop Silicone Strong Magnetic Watch',
      price: 20.25,
      image: emptyCart,
      quantity: 2,
    },
    {
      id: 99,
      title: 'Loop Silicone Strong Magnetic Watch',
      price: 15.25,
      image: emptyCart,
      quantity: 1,
    },
  ];
  const completedItemsContainer = [];

  const emptyOngoingOrderTitle = 'No ongoing order';
  const emptyOngoingOrderText = `We currently don't have any active orders in progress. Feel free to explore our products and place a new order.`;

  const emptyCompletedOrderTitle = 'No completed order';
  const emptyCompletedOrderText = `We currently don't have any completed orders. Feel free to explore our products and place a new order.`;

  return (
    <Container>
      {isScreenMobile && <HeaderNavigation page="Order History" />}
      <ButtonGroup className="mb-3 mt-6 mt-md-3 w-100 gap-2 bg-secondary">
        <Button
          variant={`${ongoingTab ? 'dark' : 'secondary'}`}
          onClick={() => {
            setActiveTab('ongoing');
          }}
          className="rounded-3 fw-semibold py-3"
        >
          Ongoing
        </Button>
        <Button
          variant={`${completedTab ? 'dark' : 'secondary'}`}
          onClick={() => {
            setActiveTab('completed');
          }}
          className="rounded-3 fw-semibold py-3"
        >
          Completed
        </Button>
      </ButtonGroup>
      {ongoingTab && (
        <ShoppingContainer
          randomData={ongoingItemsContainer}
          emptyItemInfo={[
            emptyOngoingOrderTitle,
            emptyOngoingOrderText,
            orderImg,
          ]}
          element="order"
        />
      )}
      {completedTab && (
        <ShoppingContainer
          randomData={completedItemsContainer}
          emptyItemInfo={[
            emptyCompletedOrderTitle,
            emptyCompletedOrderText,
            orderImg,
          ]}
          element="order"
        />
      )}
    </Container>
  );
};
export default Order;
