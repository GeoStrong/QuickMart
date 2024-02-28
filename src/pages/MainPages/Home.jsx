import { Container } from 'react-bootstrap';
import Header from '../../components/Home/Header/Header';
import Main from '../../components/Home/Main';
import useCheckScreenSize from '../../hooks/useCheckScreenSize';
import { Await, useLoaderData } from 'react-router-dom';
import ProductList from '../../components/UI/CategoryProductsLayout/ProductsList';
import { Suspense } from 'react';
import SuspenseSpinnerLoader from '@/components/UI/SpinnerLoaders/SuspenseSpinnerLoader';

const Home = () => {
  const { renderFooter } = useCheckScreenSize();
  const { categories, discountProducts, products } = useLoaderData();

  const promises = Promise.all([categories, discountProducts, products]);

  return (
    <>
      <Container className="mt-3 mt-lg-0">
        <Header />
        <Suspense fallback={<SuspenseSpinnerLoader />}>
          <Await resolve={promises}>
            {(loadedProducts) => (
              <Main
                categoryList={loadedProducts[0]}
                discountProducts={loadedProducts[1]}
              >
                <h1 className="h1 mt-2 fw-bold">Latest Products</h1>
                <ProductList productList={loadedProducts[2]} />
              </Main>
            )}
          </Await>
        </Suspense>
      </Container>
      {renderFooter}
    </>
  );
};
export default Home;
