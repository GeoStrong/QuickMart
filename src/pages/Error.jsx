import Header from '@/components/Home/Header';
import { Container } from 'react-bootstrap';
import { useRouteError } from 'react-router-dom';

const Error = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <Container className="mt-3">
      <Header />
      <div className="text-center mt-3 fw-bold fs-3">
        <h1>{error.data ? error.data : error.message}</h1>
        <p>{error.status ? error.status : 500}</p>
      </div>
    </Container>
  );
};
export default Error;
