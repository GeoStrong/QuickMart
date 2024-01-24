import useCheckAuth from '@/hooks/useCheckAuth';
import useCheckScreenSize from '@/hooks/useCheckScreenSize';
import useParentUrl from '@/hooks/useParentUrl';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { useEffectOnce } from 'react-use';

const ProfilePage = () => {
  const [displayProfilePanel, setDisplayProfilePanel] = useState(true);
  const { renderHeader, renderFooter, renderProfilePanel } =
    useCheckScreenSize();
  const { originPath } = useParentUrl();

  const { checkAuthHandler } = useCheckAuth();

  // useEffectOnce(() => {
  //   checkAuthHandler(`/${originPath}/authentication/login`);
  // });

  return (
    <>
      <div className="px-2">{renderHeader}</div>
      <div className="profile pt-3 d-flex flex-column flex-md-row-reverse gap-3">
        <Outlet context={setDisplayProfilePanel} />
        {displayProfilePanel && renderProfilePanel}
      </div>
      {renderFooter}
    </>
  );
};
export default ProfilePage;
