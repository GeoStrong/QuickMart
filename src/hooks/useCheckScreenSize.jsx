import ProfilePanel from '@/components/Profile/ProfilePanel';
import Footer from '../components/UI/GlobalUI/Footer';
import Header from '@/components/Home/Header/Header';

const useCheckScreenSize = () => {
  const { innerWidth } = window;
  const isScreenMobile = innerWidth <= 992;

  const renderHeader = !isScreenMobile && <Header />;
  const renderFooter = isScreenMobile && <Footer />;
  const renderProfilePanel = !isScreenMobile && <ProfilePanel />;

  return {
    isScreenMobile,
    innerWidth,
    renderFooter,
    renderProfilePanel,
    renderHeader,
  };
};
export default useCheckScreenSize;
