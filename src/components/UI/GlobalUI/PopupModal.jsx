import { Button, Modal } from 'react-bootstrap';
import './PopupModal.scss';

const PopupModal = ({ content, onCloseHandler, show, setShow }) => {
  const handleClose = () => {
    setShow(false);
  };

  const handleButtonAction = () => {
    onCloseHandler();
    setShow(false);
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton className="border-0 pt-5 pt-sm-3">
        <Modal.Title className="h6">{content.title}</Modal.Title>
      </Modal.Header>
      <Modal.Footer className="border-0 flex-column-reverse flex-sm-row align-items-stretch">
        <Button
          variant="white"
          className="py-3 py-sm-2 rounded-3"
          onClick={handleClose}
        >
          Cancel
        </Button>
        <Button
          variant="dark"
          className="py-3 py-sm-2 rounded-3"
          onClick={handleButtonAction}
        >
          {content.button}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
export default PopupModal;
