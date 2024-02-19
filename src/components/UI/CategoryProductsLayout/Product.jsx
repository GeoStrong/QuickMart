import { Suspense } from 'react';
import { Container } from 'react-bootstrap';
import { Await, useLoaderData } from 'react-router-dom';
import SpinnerLoader from '../SpinnerLoaders/SpinnerLoader';
import HeaderNavigation from '../GlobalUI/HeaderNavigation';
import ProductDetail from './ProductDetail';

const Product = () => {
  const loaderData = useLoaderData();

  return (
    <>
      <div className="mb-7 mb-lg-2">
        <Container>
          <HeaderNavigation page="Product Details" whereTo=".." />
          <Suspense fallback={<SpinnerLoader />}>
            <Await resolve={loaderData.product}>
              {(resolvedProduct) => <ProductDetail product={resolvedProduct} />}
            </Await>
          </Suspense>
        </Container>
      </div>
    </>
  );
};
export default Product;
