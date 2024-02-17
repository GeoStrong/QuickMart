import LogoutSvg from '@/assets/svg/LogoutSvg';
import useParentUrl from '@/hooks/useParentUrl';
import { Container } from 'react-bootstrap';
import { Link, useOutletContext } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfilePanel from './ProfilePanel';
import { useEffectOnce } from 'react-use';
import './Profile.scss';

const Profile = () => {
  const { email, fullName, avatarImage } = useSelector(
    (state) => state.account
  );
  const { originPath } = useParentUrl();

  const { setDisplayProfilePanel } = useOutletContext();

  useEffectOnce(() => {
    setDisplayProfilePanel(false);
  });

  return (
    <>
      <ProfilePanel />
      <Container className="profile__credentials d-flex justify-content-between">
        <div className="profile__credentials d-flex flex-md-column gap-3">
          <div>
            <img
              src={avatarImage}
              alt="avatar"
              className="profile__credentials-avatar bg-white rounded-3"
            />
          </div>
          <div className="profile__credentials-info">
            <h3 className="m-0 small">{fullName}</h3>
            <p className="m-0 small">{email}</p>
          </div>
        </div>
        <Link
          to={`/${originPath}/authentication/login`}
          className="d-block d-md-none"
        >
          <LogoutSvg />
        </Link>
      </Container>
    </>
  );
};
export default Profile;
