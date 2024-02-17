import SpinnerLoader from '@/components/UI/SpinnerLoaders/SpinnerLoader';
import useParentUrl from '@/hooks/useParentUrl';
import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import {
  Await,
  Outlet,
  useLoaderData,
  useOutletContext,
} from 'react-router-dom';
import { useEffectOnce } from 'react-use';

const SettingsPage = () => {
  const { setDisplayProfilePanel } = useOutletContext();
  const { getGeoData, getProfileSettings } = useLoaderData();
  const { id } = useSelector((state) => state.account);
  const { currentPath } = useParentUrl();

  useEffectOnce(() => {
    setDisplayProfilePanel(true);
  });

  const resolveProfileSettings =
    currentPath === 'payment'
      ? getProfileSettings(id, 'payment method')
      : getProfileSettings(id, 'shipping address');

  return (
    <>
      <Suspense fallback={<SpinnerLoader />}>
        <Await resolve={resolveProfileSettings}>
          {(profileSettings) => (
            <>
              <Outlet context={{ getGeoData, profileSettings }} />
            </>
          )}
        </Await>
      </Suspense>
    </>
  );
};

export default SettingsPage;
