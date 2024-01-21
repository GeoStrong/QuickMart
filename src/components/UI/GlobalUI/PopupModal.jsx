import { Modal } from 'react-bootstrap';
import './PopupModal.scss';

const PopupModal = ({ title, show, onClose, children }) => {
  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton className="border-0 pt-5 pt-sm-3">
        <Modal.Title className="fs-5">{title}</Modal.Title>
      </Modal.Header>
      <Modal.Footer
        className={`${
          title === 'Filter' ? 'd-block ' : ''
        } border-0 flex-column-reverse flex-sm-row align-items-stretch`}
      >
        {children}
      </Modal.Footer>
    </Modal>
  );
};
export default PopupModal;
