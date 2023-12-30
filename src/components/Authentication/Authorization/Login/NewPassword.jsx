import { Button, Container, Form } from 'react-bootstrap';
import AuthorizationAdditional from '../../../UI/AuthorizationAdditional';
import './NewPassword.scss';
import { useNavigate } from 'react-router-dom';
import useParentUrl from '../../../../hooks/useParentUrl';

const NewPassword = () => {
  const navigate = useNavigate();
  const { originPath, parentPath } = useParentUrl();

  const submitHandler = (event) => {
    event.preventDefault();
    navigate(`/${originPath}/${parentPath}/success`);
  };
  return (
    <>
      <Container>
        <AuthorizationAdditional
          page="Create Password"
          title="New Password"
          text="Enter your new password and remember it."
        />
        <Form className="form" onSubmit={submitHandler}>
          <Form.Group className="mb-3">
            <Form.Label className="fw-medium">Password</Form.Label>
            <Form.Control type="password" className="fw-normal py-3" />
          </Form.Group>
          <Form.Group className="">
            <Form.Label className="fw-medium">Confirm Password</Form.Label>
            <Form.Control type="password" className="fw-normal py-3" />
          </Form.Group>
          <div className="form__buttons mt-3  d-flex flex-column align-items-center">
            <Button
              variant="dark"
              type="submit"
              className="text-white w-100 py-3"
            >
              Save
            </Button>
          </div>
        </Form>
      </Container>
    </>
  );
};
export default NewPassword;
