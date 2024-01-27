import { Col, ListGroup } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import arrow from '@/assets/svg/arrow.svg';
import privacy from '@/assets/svg/privacy.svg';
import terms from '@/assets/svg/terms.svg';
import faq from '@/assets/svg/faq.svg';

const SupportPanel = () => {
  return (
    <Col lg={3}>
      <ListGroup as="ul" className="pb-2">
        <ListGroup.Item as="li" className="support__panel-item px-0 border-0">
          <NavLink
            to="privacy"
            className={({ isActive }) =>
              `support__panel-link ${
                isActive ? 'text-primary' : 'text-dark'
              } d-flex justify-content-between align-items-center small fw-medium`
            }
          >
            <div className="d-flex align-items-center">
              <img src={privacy} alt="icon" className="me-3" />
              Privacy Policy
            </div>
            <img src={arrow} alt="arrow" />
          </NavLink>
        </ListGroup.Item>
        <ListGroup.Item as="li" className="support__panel-item px-0 border-0">
          <NavLink
            to="terms"
            className={({ isActive }) =>
              `support__panel-link ${
                isActive ? 'text-primary' : 'text-dark'
              } d-flex justify-content-between align-items-center small fw-medium`
            }
          >
            <div className="d-flex align-items-center">
              <img src={terms} alt="icon" className="me-3" />
              Terms & Conditions
            </div>
            <img src={arrow} alt="arrow" />
          </NavLink>
        </ListGroup.Item>
        <ListGroup.Item as="li" className="support__panel-item px-0 border-0">
          <NavLink
            to="faq"
            className={({ isActive }) =>
              `support__panel-link ${
                isActive ? 'text-primary' : 'text-dark'
              } d-flex justify-content-between align-items-center small fw-medium`
            }
          >
            <div className="d-flex align-items-center">
              <img src={faq} alt="icon" className="me-3" />
              FAQs
            </div>
            <img src={arrow} alt="arrow" />
          </NavLink>
        </ListGroup.Item>
      </ListGroup>
    </Col>
  );
};
export default SupportPanel;
