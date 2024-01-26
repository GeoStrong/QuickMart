import useCheckAuth from '@/hooks/useCheckAuth';
import useCheckScreenSize from '@/hooks/useCheckScreenSize';
import useParentUrl from '@/hooks/useParentUrl';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import { useEffectOnce } from 'react-use';

const ProfilePage = () => {
  const [displayProfilePanel, setDisplayProfilePanel] = useState(true);
  const { renderHeader, renderFooter, renderProfilePanel } =
    useCheckScreenSize();
  const { originPath } = useParentUrl();

  const { checkAuthHandler } = useCheckAuth();

  useEffectOnce(() => {
    checkAuthHandler(`/${originPath}/authentication/login`);
  });

  return (
    <>
      <Container>
        {renderHeader}
        <div className="profile pt-3 d-flex flex-column-reverse flex-md-row gap-3">
          {displayProfilePanel && renderProfilePanel}
          <Outlet context={setDisplayProfilePanel} />
        </div>
      </Container>
      {renderFooter}
    </>
  );
};
export default ProfilePage;
