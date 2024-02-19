import { Suspense, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Await, useLoaderData } from 'react-router-dom';
import SpinnerLoader from '../../components/UI/SpinnerLoaders/SpinnerLoader';
import ProductDetail from '../../components/UI/CategoryProductsLayout/ProductDetail';
import useCheckScreenSize from '@/hooks/useCheckScreenSize';

const ProductPage = () => {
  const loaderData = useLoaderData();
  const [description, setDescription] = useState(true);
  const { renderFooter, renderHeader } = useCheckScreenSize();

  return (
    <>
      <div className="pb-7 pb-lg-2">
        <Container>
          {renderHeader('Product Details', '..')}
          <Suspense fallback={<SpinnerLoader />}>
            <Await resolve={loaderData.product}>
              {(resolvedProduct) => (
                <ProductDetail
                  product={resolvedProduct}
                  isDescriptionShort={description}
                  setIsDescriptionShort={setDescription}
                />
              )}
            </Await>
          </Suspense>
        </Container>
      </div>
      {description && renderFooter}
    </>
  );
};
export default ProductPage;
