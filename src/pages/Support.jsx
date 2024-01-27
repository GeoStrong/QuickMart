import Header from '@/components/Home/Header/Header';
import HeaderNavigation from '@/components/UI/GlobalUI/HeaderNavigation';
import useCheckScreenSize from '@/hooks/useCheckScreenSize';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

const Support = () => {
  const { isScreenMobile, renderSupportPanel, renderFooter } =
    useCheckScreenSize();
  const [supportPage, setSupportPage] = useState('');

  return (
    <>
      <Container>
        {!isScreenMobile ? <Header /> : <HeaderNavigation page={supportPage} />}
      </Container>
      <Container className="d-flex mt-3 gap-3">
        {renderSupportPanel}
        <Outlet context={setSupportPage} />
      </Container>
      {renderFooter}
    </>
  );
};
export default Support;
