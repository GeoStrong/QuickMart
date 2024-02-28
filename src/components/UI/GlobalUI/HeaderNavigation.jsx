import { Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './HeaderNavigation.scss';

const HeaderNavigation = ({ whereTo = -1, page }) => {
  return (
    <Row className="top w-100 rounded-4 position-fixed bg-white z-2 align-items-center flex-nowrap pb-3">
      <Link to={whereTo} className="row__link">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
        >
          <path
            d="M12.7599 25.0935C12.5066 25.0935 12.2533 25.0002 12.0533 24.8002L3.95992 16.7068C3.57326 16.3202 3.57326 15.6802 3.95992 15.2935L12.0533 7.20016C12.4399 6.81349 13.0799 6.81349 13.4666 7.20016C13.8533 7.58682 13.8533 8.22682 13.4666 8.61349L6.07992 16.0002L13.4666 23.3868C13.8533 23.7735 13.8533 24.4135 13.4666 24.8002C13.2799 25.0002 13.0133 25.0935 12.7599 25.0935Z"
            fill="#1C1B1B"
          />
          <path
            d="M27.3333 17H4.89331C4.34664 17 3.89331 16.5467 3.89331 16C3.89331 15.4533 4.34664 15 4.89331 15H27.3333C27.88 15 28.3333 15.4533 28.3333 16C28.3333 16.5467 27.88 17 27.3333 17Z"
            fill="#1C1B1B"
          />
        </svg>
      </Link>
      <span className="row__page fw-medium small">{page}</span>
    </Row>
  );
};

export default HeaderNavigation;
