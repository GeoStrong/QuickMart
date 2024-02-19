import useCheckScreenSize from '@/hooks/useCheckScreenSize';
import { Container } from 'react-bootstrap';

const ProductDetailError = () => {
  const { renderHeader, renderFooter } = useCheckScreenSize();

  return (
    <>
      <div className="mb-6">
        <Container className="mt-3">
          {renderHeader('Product Details', '..')}
          <h1 className="text-center pt-6">No product found</h1>
        </Container>
      </div>
      {renderFooter}
    </>
  );
};
export default ProductDetailError;
