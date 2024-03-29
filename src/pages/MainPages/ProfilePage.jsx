import Header from '@/components/Home/Header/Header';
import useCheckAuth from '@/hooks/useCheckAuth';
import useCheckScreenSize from '@/hooks/useCheckScreenSize';
import useParentUrl from '@/hooks/useParentUrl';
import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

const ProfilePage = () => {
  const [displayProfilePanel, setDisplayProfilePanel] = useState(true);
  const { isScreenMobile, renderFooter, renderProfilePanel } =
    useCheckScreenSize();
  const { originPath } = useParentUrl();

  const { checkAuthHandler } = useCheckAuth();

  useEffect(() => {
    checkAuthHandler(`/${originPath}/authentication/login`);
  }, [checkAuthHandler, originPath]);

  return (
    <>
      <Container>
        {!isScreenMobile && <Header />}
        <div className="profile pt-3 d-flex flex-column-reverse flex-md-row gap-3">
          {displayProfilePanel && renderProfilePanel}
          <Outlet context={{ setDisplayProfilePanel }} />
        </div>
      </Container>
      {renderFooter}
    </>
  );
};
export default ProfilePage;
