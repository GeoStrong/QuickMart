import { Col } from 'react-bootstrap';
import { useOutletContext } from 'react-router-dom';
import { useEffectOnce } from 'react-use';
import './SupportStyles.scss';

const Terms = () => {
  const setPage = useOutletContext();

  useEffectOnce(() => {
    setPage('Terms & Conditions');
  });

  return (
    <Col xs={12} lg={9} className="support mt-6 mt-md-0">
      <h1 className="support__title">Terms &amp; Conditions</h1>
      <p className="support__descr">
        Welcome to QuickMart! These Terms and Conditions (&quot;Terms&quot;)
        govern your use of our e-commerce app. By accessing or using QuickMart,
        you agree to be bound by these Terms. Please read them carefully before
        proceeding
      </p>
      <ol className="support__list">
        <li className="support__item">
          <h2 className="support__item-title">Account Registration</h2>
          <p className="support__item-descr">
            You must create an account to use certain features of QuickMart.
          </p>
          <p className="support__item-descr">
            You are responsible for providing accurate and up-to-date
            information during the registration process.
          </p>
          <p className="support__item-descr">
            You must safeguard your account credentials and notify us
            immediately of any unauthorized access or use of your account.
          </p>
        </li>
        <li className="support__item">
          <h2 className="support__item-title">
            Product Information and Pricing
          </h2>
          <p className="support__item-descr">
            QuickMart strives to provide accurate product descriptions, images,
            and pricing information.
          </p>
          <p className="support__item-descr">
            We reserve the right to modify product details and prices without
            prior notice.
          </p>
          <p className="support__item-descr">
            In the event of an error, we may cancel or refuse orders placed for
            incorrectly priced products.
          </p>
        </li>
        <li className="support__item">
          <h2 className="support__item-title">
            Order Placement and Fulfillment
          </h2>
          <p className="support__item-descr">
            By placing an order on QuickMart, you agree to purchase the selected
            products at the stated price.
          </p>
          <p className="support__item-descr">
            We reserve the right to accept or reject any order, and we may
            cancel orders due to product unavailability, pricing errors, or
            suspected fraudulent activity.
          </p>
          <p className="support__item-descr">
            Once an order is confirmed, we will make reasonable efforts to
            fulfill and deliver it in a timely manner.
          </p>
        </li>
        <li className="support__item">
          <h2 className="support__item-title">Payment</h2>
          <p className="support__item-descr">
            QuickMart supports various payment methods, including credit/debit
            cards and online payment platforms.
          </p>
          <p className="support__item-descr">
            By providing payment information, you represent and warrant that you
            are authorized to use the chosen payment method.
          </p>
          <p className="support__item-descr">
            All payments are subject to verification and approval by relevant
            financial institutions.
          </p>
        </li>
        <li className="support__item">
          <h2 className="support__item-title">Shipping and Delivery</h2>
          <p className="support__item-descr">
            QuickMart will make reasonable efforts to ensure timely delivery of
            products.
          </p>
          <p className="support__item-descr">
            Shipping times may vary based on factors beyond our control, such as
            location, weather conditions, or carrier delays.
          </p>
          <p className="support__item-descr">
            Risk of loss or damage to products passes to you upon delivery.
          </p>
        </li>
        <li className="support__item">
          <h2 className="support__item-title">Returns and Refunds</h2>
          <p className="support__item-descr">
            QuickMart&apos;s return and refund policies are outlined separately
            and govern the process for returning products and seeking refunds.
          </p>
          <p className="support__item-descr">
            Certain products may be non-returnable or subject to specific
            conditions.
          </p>
        </li>
        <li className="support__item">
          <h2 className="support__item-title">Intellectual Property</h2>
          <p className="support__item-descr">
            QuickMart and its content, including logos, trademarks, text,
            images, and software, are protected by intellectual property rights.
          </p>
          <p className="support__item-descr">
            You may not use, reproduce, modify, distribute, or display any part
            of QuickMart without our prior written consent.
          </p>
        </li>
        <li className="support__item">
          <h2 className="support__item-title">User Conduct</h2>
          <p className="support__item-descr">
            You agree to use QuickMart in compliance with applicable laws and
            regulations.
          </p>
          <p className="support__item-descr">
            You will not engage in any activity that disrupts or interferes with
            the functioning of QuickMart or infringes upon the rights of others.
          </p>
          <p className="support__item-descr">
            Any unauthorized use or attempt to access restricted areas or user
            accounts is strictly prohibited.
          </p>
        </li>
        <li className="support__item">
          <h2 className="support__item-title">Limitation of Liability</h2>
          <p className="support__item-descr">
            QuickMart and its affiliates shall not be liable for any direct,
            indirect, incidental, consequential, or punitive damages arising
            from the use or inability to use our app or any products purchased
            through it.
          </p>
          <p className="support__item-descr">
            We do not guarantee the accuracy, completeness, or reliability of
            information provided on QuickMart.
          </p>
        </li>
        <li className="support__item">
          <h2 className="support__item-title">Governing Law</h2>
          <p className="support__item-descr">
            These Terms shall be governed by and construed in accordance with
            the laws of [Jurisdiction].
          </p>
          <p className="support__item-descr">
            Any disputes arising out of or relating to these Terms shall be
            resolved in the courts of [Jurisdiction].
          </p>
        </li>
      </ol>
      <p className="support__descr">
        If you have any questions or concerns regarding these Terms and
        Conditions, please contact our customer support. By using QuickMart, you
        acknowledge that you have read, understood, and agreed to these Terms
        and Conditions.
      </p>
    </Col>
  );
};
export default Terms;
