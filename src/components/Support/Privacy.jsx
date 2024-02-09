import { Col } from 'react-bootstrap';
import { useOutletContext } from 'react-router-dom';
import { useEffectOnce } from 'react-use';
import './SupportStyles.scss';

const Privacy = () => {
  const setPage = useOutletContext();

  useEffectOnce(() => {
    setPage('Privacy Policy');
  });

  return (
    <Col xs={12} lg={9} className="support mt-6 mt-md-0">
      <h1 className="support__title">Our Policy</h1>
      <p className="support__descr">
        At QuickMart, we are committed to protecting the privacy and security of
        our users&apos; personal information. This Privacy Policy outlines how
        we collect, use, disclose, and safeguard the information obtained
        through our e-commerce app. By using QuickMart, you consent to the
        practices described in this policy.
      </p>
      <ol className="support__list">
        <li className="support__item">
          <h2 className="support__item-title">Information Collection</h2>
          <p className="support__item-descr">
            Personal Information: We may collect personal information such as
            name, address, email, and phone number when you create an account,
            make a purchase, or interact with our services.
          </p>
          <p className="support__item-descr">
            Transaction Details: We collect information related to your
            purchases, including order history, payment method, and shipping
            details.
          </p>
          <p className="support__item-descr">
            Usage Data: We may collect data on how you interact with our app,
            such as browsing activity, search queries, and preferences.
          </p>
        </li>
        <li className="support__item">
          <h2 className="support__item-title">Information Use</h2>
          <p className="support__item-descr">
            Provide Services: We use the collected information to process
            orders, deliver products, and provide customer support.
          </p>
          <p className="support__item-descr">
            Personalization: We may use your information to personalize your
            shopping experience, recommend products, and display targeted
            advertisements.
          </p>
          <p className="support__item-descr">
            Communication: We may use your contact information to send important
            updates, promotional offers, and newsletters. You can opt-out of
            these communications at any time.
          </p>
        </li>
        <li className="support__item">
          <h2 className="support__item-title">Information Sharing</h2>
          <p className="support__item-descr">
            Third-Party Service Providers: We may share your information with
            trusted third-party service providers who assist us in operating our
            app, fulfilling orders, and improving our services.
          </p>
          <p className="support__item-descr">
            Legal Compliance: We may disclose personal information if required
            by law or in response to a valid legal request from authorities.
          </p>
        </li>
        <li className="support__item">
          <h2 className="support__item-title">Data Security</h2>
          <p className="support__item-descr">
            We implement appropriate security measures to protect your
            information from unauthorized access, alteration, disclosure, or
            destruction.
          </p>
          <p className="support__item-descr">
            However, please note that no data transmission over the internet or
            electronic storage is 100% secure. We cannot guarantee absolute
            security of your information.
          </p>
        </li>
        <li className="support__item">
          <h2 className="support__item-title">User Rights</h2>
          <p className="support__item-descr">
            Access and Update: You have the right to access, correct, or update
            your personal information stored in our app
          </p>
          <p className="support__item-descr">
            Data Retention: We retain your personal information as long as
            necessary to provide our services and comply with legal obligations
          </p>
        </li>
        <li className="support__item">
          <h2 className="support__item-title">Children&apos;s Privacy</h2>
          <p className="support__item-descr">
            QuickMart is not intended for children under the age of 13. We do
            not knowingly collect or solicit personal information from children
          </p>
        </li>
        <li className="support__item">
          <h2 className="support__item-title">Updates to the Privacy Policy</h2>
          <p className="support__item-descr">
            We reserve the right to update this Privacy Policy from time to
            time. Any changes will be posted on our app, and the revised policy
            will be effective upon posting.
          </p>
        </li>
      </ol>
      <p className="support__descr">
        If you have any questions or concerns about our Privacy Policy, please
        contact our customer support. By using QuickMart, you acknowledge that
        you have read and understood this Privacy Policy and agree to its terms
        and conditions.
      </p>
    </Col>
  );
};
export default Privacy;
