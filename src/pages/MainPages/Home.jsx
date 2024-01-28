import { Container } from 'react-bootstrap';
import Header from '../../components/Home/Header/Header';
import Main from '../../components/Home/Main';
import useCheckScreenSize from '../../hooks/useCheckScreenSize';
import { Await, useLoaderData } from 'react-router-dom';
import Products from '../../components/Home/Products';
import { Suspense } from 'react';
import SuspenseSpinnerLoader from '@/components/UI/SpinnerLoaders/SuspenseSpinnerLoader';

const Home = () => {
  const { renderFooter } = useCheckScreenSize();
  const { products, categories, discountProducts } = useLoaderData();

  return (
    <>
      <Container className="mt-3">
        <Header />
        <Main categoryList={categories} discountProducts={discountProducts}>
          <Suspense fallback={<SuspenseSpinnerLoader />}>
            <Await resolve={products}>
              {(loadedProducts) => <Products productList={loadedProducts} />}
            </Await>
          </Suspense>
        </Main>
      </Container>
      {renderFooter}
    </>
  );
};
export default Home;
