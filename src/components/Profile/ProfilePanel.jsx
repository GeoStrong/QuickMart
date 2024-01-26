import { Container, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useParentUrl from '@/hooks/useParentUrl';
import address from '@/assets/svg/address.svg';
import payment from '@/assets/svg/payment.svg';
import order from '@/assets/svg/order.svg';
import privacy from '@/assets/svg/privacy.svg';
import terms from '@/assets/svg/terms.svg';
import faq from '@/assets/svg/faq.svg';
import password from '@/assets/svg/password.svg';
import theme from '@/assets/svg/theme.svg';
import arrow from '@/assets/svg/arrow.svg';
import './ProfilePanel.scss';

const ProfilePanel = () => {
  const { originPath } = useParentUrl();

  const renderListGroup = (title, items) => {
    return (
      <>
        <h2 className="h6 fw-semibold">{title}</h2>
        <ListGroup as="ul" className="pb-2">
          {items.map((item, index) => (
            <ListGroup.Item
              as="li"
              key={index}
              className="profile__panel-item px-0"
            >
              <Link
                to={item.navigateTo}
                className="profile__panel-link d-flex justify-content-between align-items-center small fw-medium"
              >
                <div className="d-flex align-items-center">
                  <img src={item.icon} alt="icon" className="me-3" />
                  {item.name}
                </div>
                <img src={arrow} alt="arrow" />
              </Link>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </>
    );
  };

  return (
    <div className="profile__panel z-1 bg-white">
      <Container className="pt-3 pb-6">
        {renderListGroup('Personal Information', [
          {
            name: 'Shipping Address',
            icon: address,
            navigateTo: 'shipping address',
          },
          { name: 'Payment Method', icon: payment, navigateTo: 'payment' },
          { name: 'Order History', icon: order },
        ])}
        {renderListGroup('Support & Information', [
          { name: 'Privacy Policy', icon: privacy },
          { name: 'Terms & Conditions', icon: terms },
          { name: 'FAQs', icon: faq },
        ])}
        {renderListGroup('Account Management', [
          { name: 'Change Password', icon: password },
          { name: 'Dark Theme', icon: theme },
        ])}
        <Link
          to={`/${originPath}/authentication/login`}
          className="d-none d-md-block mt-3 small fw-light"
        >
          Logout
        </Link>
      </Container>
    </div>
  );
};
export default ProfilePanel;
