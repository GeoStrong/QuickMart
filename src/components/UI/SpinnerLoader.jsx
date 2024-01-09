import { Spinner } from 'react-bootstrap';

const SpinnerLoader = () => {
  return (
    <div className="spinner-container position-absolute start-50 top-50">
      <Spinner animation="border" variant="primary" />
    </div>
  );
};
export default SpinnerLoader;
