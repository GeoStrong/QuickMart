import { useLoaderData } from 'react-router-dom';
import ProductsList from '../UI/CategoryProductsLayout/ProductsList';
import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import useCheckScreenSize from '@/hooks/useCheckScreenSize';

const Category = () => {
  const loaderData = useLoaderData();
  const { activeCategory } = useSelector((state) => state.products);
  const { renderFooter, renderHeader } = useCheckScreenSize();

  return (
    <>
      <Container className="mt-3">
        {renderHeader(activeCategory.name, '..')}
        {loaderData.category.length > 0 ? (
          <>
            <h1 className="h1 pt-5 fw-bold">Latest Products</h1>
            <ProductsList productList={loaderData.category} />
          </>
        ) : (
          <h1 className="text-center pt-6">No products found</h1>
        )}
      </Container>
      {renderFooter}
    </>
  );
};
export default Category;
