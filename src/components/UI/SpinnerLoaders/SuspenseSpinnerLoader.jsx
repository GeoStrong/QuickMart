import { Spinner } from 'react-bootstrap';

const SuspenseSpinnerLoader = () => {
  return (
    <div className="mt-3 w-100 d-flex justify-content-center align-items-center">
      <Spinner animation="border" variant="primary" />
    </div>
  );
};
export default SuspenseSpinnerLoader;
