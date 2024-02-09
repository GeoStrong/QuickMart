import { useLoaderData } from 'react-router-dom';
import Products from '../UI/CategoryProductsLayout/ProductsList';
import { Container } from 'react-bootstrap';
import HeaderNavigation from '../UI/GlobalUI/HeaderNavigation';
import { useSelector } from 'react-redux';
import useCheckScreenSize from '@/hooks/useCheckScreenSize';

const Category = () => {
  const loaderData = useLoaderData();
  const { activeCategory } = useSelector((state) => state.products);
  const { renderFooter } = useCheckScreenSize();

  return (
    <>
      <Container>
        <HeaderNavigation page={activeCategory.name} whereTo=".." />
        {loaderData.category.length > 0 ? (
          <Products productList={loaderData.category} />
        ) : (
          <h1 className="text-center mt-5">No products found</h1>
        )}
      </Container>
      {renderFooter}
    </>
  );
};
export default Category;
