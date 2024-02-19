import useCheckScreenSize from '@/hooks/useCheckScreenSize';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

const Support = () => {
  const { renderHeader, renderSupportPanel, renderFooter } =
    useCheckScreenSize();
  const [supportPage, setSupportPage] = useState('');

  return (
    <>
      <Container>{renderHeader(supportPage)}</Container>
      <Container className="d-flex mt-3 gap-3">
        {renderSupportPanel}
        <Outlet context={setSupportPage} />
      </Container>
      {renderFooter}
    </>
  );
};
export default Support;
