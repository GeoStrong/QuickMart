import useCheckScreenSize from '@/hooks/useCheckScreenSize';
import { Container } from 'react-bootstrap';
import { useRouteError } from 'react-router-dom';

const Error = () => {
  const error = useRouteError();
  const { renderHeader, renderFooter } = useCheckScreenSize();
  console.log(error);

  return (
    <>
      <Container className="mt-3">
        {renderHeader(Error)}
        <div className="text-center pt-6 mt-3 fw-bold fs-3">
          <h1>{error.data ? error.data : error.message}</h1>
          <p>{error.status ? error.status : 500}</p>
        </div>
      </Container>
      {renderFooter}
    </>
  );
};
export default Error;
