import { Col } from 'react-bootstrap';
import { useOutletContext } from 'react-router-dom';
import { useEffectOnce } from 'react-use';
import './SupportStyles.scss';

const Faq = () => {
  const setPage = useOutletContext();

  useEffectOnce(() => {
    setPage('Faqs');
  });

  return (
    <Col xs={12} lg={9} className="support">
      <h1 className="support__title">FAQs</h1>
      <ul className="support__list support__list--unordered">
        <li className="support__item">
          <h2 className="support__item-title support__item-title--unordered">
            Can I cancel my order?
          </h2>
          <p className="support__item-descr">
            Yes only if the order is not dispatched yet. You can contact our
            customer service department to get your order canceled.
          </p>
        </li>
        <li className="support__item">
          <h2 className="support__item-title support__item-title--unordered">
            Will I receive the same product I see in the photo?
          </h2>
          <p className="support__item-descr">
            Actual product color may vary from the images shown. Every monitor
            or mobile display has a different capability to display colors, and
            every individual may see these colors differently. In addition,
            lighting conditions at the time the photo was taken can also affect
            an image&apos;s color.
          </p>
        </li>
        <li className="support__item">
          <h2 className="support__item-title support__item-title--unordered">
            How can I recover the forgotten password?
          </h2>
          <p className="support__item-descr">
            If you have forgotten your password, you can recover it from
            &quot;Login - Forgotten your password?&quot; section. You will
            receive an e-mail with a link to enter and confirm your new
            password.
          </p>
        </li>
        <li className="support__item">
          <h2 className="support__item-title support__item-title--unordered">
            Is my personal information confidential?
          </h2>
          <p className="support__item-descr">
            Your personal information is confidential. We do not rent, sell,
            barter or trade email addresses. When you place an order with us, we
            collect your name, address, telephone number, credit card
            information and your email address. We use this information to
            fulfill your order and to communicate with you about your order. All
            your information is kept confidential and will not be disclosed to
            anybody unless ordered by government authorities.
          </p>
        </li>
        <li className="support__item">
          <h2 className="support__item-title support__item-title--unordered">
            What payment methods can I use to make purchases?
          </h2>
          <p className="support__item-descr">
            We offer the following payment methods: PayPal, VISA, MasterCard and
            Voucher code, if applicable.
          </p>
        </li>
      </ul>
      <p className="support__descr">
        If you have any questions or concerns about our Privacy Policy, please
        contact our customer support. By using QuickMart, you acknowledge that
        you have read and understood this Privacy Policy and agree to its terms
        and conditions.
      </p>
    </Col>
  );
};
export default Faq;
