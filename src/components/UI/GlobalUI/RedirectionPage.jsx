import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './RedirectionPage.scss';

const RedirectionPage = ({ title, text, navigateTo, buttonName, img }) => {
  return (
    <Card className="flex-column mt-3 mb-6 flex-md-row gap-2 w-100 justify-content-around">
      <div className="card__img-container rounded-5">
        <img src={img} alt="logo" className="w-100" />
      </div>
      <Card.Body className="d-flex flex-column justify-content-center">
        <Card.Title className="text-center fw-bold h1">{title}</Card.Title>
        <Card.Text className="text-center fw-normal small">{text}</Card.Text>
        <Link to={navigateTo} className="btn btn-dark text-white mt-2 py-3">
          {buttonName}
        </Link>
      </Card.Body>
    </Card>
  );
};

export default RedirectionPage;
