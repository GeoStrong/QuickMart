import AuthorizationAdditional from '@/components/UI/AuthorizationLayout/AuthorizationAdditional';
import { Container } from 'react-bootstrap';
import { useRouteError } from 'react-router-dom';

const AuthError = () => {
  const error = useRouteError();

  return (
    <Container className="text-center">
      <AuthorizationAdditional
        pageName={error.status}
        title="Error"
        text={error.data.message}
      />
    </Container>
  );
};
export default AuthError;
