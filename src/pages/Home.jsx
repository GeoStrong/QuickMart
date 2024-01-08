import { Container, Spinner } from 'react-bootstrap';
import Header from '../components/Home/Header';
import Main from '../components/Home/Main';
import useCheckScreenSize from '../hooks/useCheckScreenSize';
import { Await, useLoaderData } from 'react-router-dom';
import Products from '../components/Home/Products';
import { Suspense } from 'react';

const Home = () => {
  const { renderFooter } = useCheckScreenSize();
  const { products, categories } = useLoaderData();

  return (
    <>
      <Container className="mt-3">
        <Header />
        <Main categoryList={categories}>
          <Suspense
            fallback={
              <div className="mt-3 w-100 d-flex justify-content-center">
                <Spinner animation="border" variant="primary" />
              </div>
            }
          >
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
