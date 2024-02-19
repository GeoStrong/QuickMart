import ProfilePanel from '@/components/Profile/ProfilePanel';
import Footer from '../components/UI/GlobalUI/Footer';
import Header from '@/components/Home/Header/Header';
import SupportPanel from '@/components/Support/SupportPanel';
import { useState } from 'react';

const useCheckScreenSize = () => {
  const [footerFade, setFooterFade] = useState(true);
  const { innerWidth } = window;
  const isScreenMobile = innerWidth <= 992;

  const renderHeader = !isScreenMobile && <Header />;
  const renderFooter = isScreenMobile && <Footer open={footerFade} />;
  const renderProfilePanel = !isScreenMobile && <ProfilePanel />;
  const renderSupportPanel = !isScreenMobile && <SupportPanel />;

  return {
    isScreenMobile,
    innerWidth,
    renderHeader,
    renderProfilePanel,
    renderSupportPanel,
    renderFooter,
    setFooterFade,
  };
};
export default useCheckScreenSize;
