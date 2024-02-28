import HeaderForm from '@/components/Home/Header/HeaderForm';
import ProductsList from '@/components/UI/CategoryProductsLayout/ProductsList';
import SpinnerLoader from '@/components/UI/SpinnerLoaders/SpinnerLoader';
import useCheckScreenSize from '@/hooks/useCheckScreenSize';
import { Suspense, useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Await, useLoaderData, useSearchParams } from 'react-router-dom';
import { usePromise } from 'react-use';

const SearchPage = () => {
  const loaderData = useLoaderData();
  const mounted = usePromise();
  const [searchedProducts, setSearchedProducts] = useState(null);
  const { renderHeader, renderFooter, isScreenMobile } = useCheckScreenSize();
  const [searchParams] = useSearchParams();

  const searchText = searchParams.get('searchText');

  useEffect(() => {
    (async () => {
      const value = await mounted(loaderData.searchProducts(searchText));
      setSearchedProducts(value);
    })();
  }, [searchText, mounted, loaderData]);

  return (
    <>
      <Container className="mt-3 mt-lg-0">
        {renderHeader('Search Page')}
        {isScreenMobile && <HeaderForm separate={isScreenMobile} />}
        <h1 className="pt-7 pt-md-3 fs-5">
          Search results for: <b className="fs-3">{searchText}</b>
        </h1>
        <Suspense fallback={<SpinnerLoader />}>
          <Await resolve={loaderData.searchProducts(searchText)}>
            {(resolvedData) => (
              <>
                <ProductsList
                  productList={resolvedData}
                  getSearchedProductsValue={setSearchedProducts}
                />
              </>
            )}
          </Await>
        </Suspense>
        {searchedProducts?.length === 0 && (
          <p className="fs-6 text-center">
            Sorry, but nothing matched your search terms. Please try again with
            some different keywords.
          </p>
        )}
      </Container>
      {renderFooter}
    </>
  );
};
export default SearchPage;
