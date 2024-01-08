import Footer from '../components/UI/Footer';

const useCheckScreenSize = () => {
  const { innerWidth } = window;
  const isScreenMobile = innerWidth <= 992;

  const renderFooter = isScreenMobile && <Footer />;

  return { isScreenMobile, innerWidth, renderFooter };
};
export default useCheckScreenSize;
