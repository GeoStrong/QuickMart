import { Card, Container } from 'react-bootstrap';
import './Success.scss';
import { Link } from 'react-router-dom';
import useParentUrl from '../../../hooks/useParentUrl';

const Success = () => {
  const { originPath, parentPath } = useParentUrl(3);
  const parentPathCheck = parentPath === 'login';

  return (
    <Container className="my-3">
      <Card className="flex-column flex-md-row gap-2">
        <div className="card__img-container rounded-5"></div>
        <Card.Body className="d-flex flex-column justify-content-center">
          <Card.Title className="text-center fw-bold h1">
            {parentPathCheck
              ? 'New password set successfully'
              : 'Your account was verified'}
          </Card.Title>
          <Card.Text className="text-center fw-normal small">
            {parentPathCheck
              ? 'Congratulations! Your password has been set successfully. Please proceed to the login screen to sign in to your account.'
              : 'Congratulations! Your account has been verified successfully. Please proceed to the login screen to sign in to your account.'}
          </Card.Text>
          <Link
            to={`/${originPath}/authentication/login`}
            className="btn btn-dark text-white mt-2 py-3"
          >
            Login
          </Link>
        </Card.Body>
      </Card>
    </Container>
  );
};
export default Success;
