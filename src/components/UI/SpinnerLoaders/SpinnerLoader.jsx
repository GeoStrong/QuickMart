import { Spinner } from 'react-bootstrap';
import './SpinnerLoader.scss';

const SpinnerLoader = () => {
  return (
    <div className="spinner-container bg-transparent">
      <Spinner animation="border" variant="primary" />
    </div>
  );
};
export default SpinnerLoader;
