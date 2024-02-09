import { Row } from 'react-bootstrap';
import './AuthorizationAdditional.scss';
import HeaderNavigation from '../GlobalUI/HeaderNavigation';

const AuthorizationAdditional = ({ navigateTo, pageName, title, text }) => {
  return (
    <>
      <HeaderNavigation whereTo={navigateTo} page={pageName} />
      <Row className="mt-3 pt-5 mb-1">
        <h1 className="row__title fw-bold h1">{title}</h1>
        <p className="row__text fw-normal">{text}</p>
      </Row>
    </>
  );
};

export default AuthorizationAdditional;
