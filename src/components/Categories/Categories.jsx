import useCheckScreenSize from '@/hooks/useCheckScreenSize';
import { Container } from 'react-bootstrap';
import logo from '../../assets/images/logo.png';
import CategoryList from '../UI/CategoryProductsLayout/CategoryList';

const Categories = ({ categories, moreCategories }) => {
  const { renderFooter, renderHeader } =
    useCheckScreenSize();
  const categoryList = [];
  categoryList.push(...categories);

  moreCategories.forEach((category) => {
    const categoryObj = {
      id: crypto.getRandomValues(new Uint32Array(1))[0],
      name: category,
      image: logo,
    };

    return categoryList.push(categoryObj);
  });

  return (
    <>
      <Container className="mb-7">
        {renderHeader('Categories', '..')}
        <CategoryList categories={categoryList} />
      </Container>
      {renderFooter}
    </>
  );
};

export default Categories;
