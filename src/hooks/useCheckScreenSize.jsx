import ProfilePanel from '@/components/Profile/ProfilePanel';
import Footer from '../components/UI/GlobalUI/Footer';
import Header from '@/components/Home/Header/Header';
import SupportPanel from '@/components/Support/SupportPanel';

const useCheckScreenSize = () => {
  const { innerWidth } = window;
  const isScreenMobile = innerWidth <= 992;

  const renderHeader = !isScreenMobile && <Header />;
  const renderFooter = isScreenMobile && <Footer />;
  const renderProfilePanel = !isScreenMobile && <ProfilePanel />;
  const renderSupportPanel = !isScreenMobile && <SupportPanel />;

  return {
    isScreenMobile,
    innerWidth,
    renderHeader,
    renderProfilePanel,
    renderSupportPanel,
    renderFooter,
  };
};
export default useCheckScreenSize;
