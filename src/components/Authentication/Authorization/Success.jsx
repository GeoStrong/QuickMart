import { Container } from 'react-bootstrap';
import RedirectionPage from '../../UI/GlobalUI/RedirectionPage';
import useParentUrl from '../../../hooks/useParentUrl';
import successImg from '../../../assets/images/password-success.png';

const Success = () => {
  const { originPath, parentPath, checkLocation } = useParentUrl();
  const parentPathCheck = checkLocation('login');

  const successTitle = parentPathCheck
    ? 'New password set successfully'
    : 'Your account was verified';

  const successText = parentPathCheck
    ? 'Congratulations! Your password has been set successfully. Please proceed to the login screen to sign in to your account.'
    : 'Congratulations! Your account has been verified successfully. Please proceed to the login screen to sign in to your account.';

  const successNavigation = `/${originPath}/${parentPath}/login`;

  return (
    <Container>
      <RedirectionPage
        title={successTitle}
        text={successText}
        navigateTo={successNavigation}
        buttonName="Login"
        img={successImg}
      />
    </Container>
  );
};
export default Success;
