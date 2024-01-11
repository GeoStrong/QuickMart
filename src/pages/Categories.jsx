import CategoryList from '@/components/UI/CategoryList';
import HeaderNavigation from '@/components/UI/HeaderNavigation';
import useCheckScreenSize from '@/hooks/useCheckScreenSize';
import { Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import logo from '../assets/images/logo.png';

const Categories = () => {
  const { renderFooter } = useCheckScreenSize();
  const { categories, moreCategories } = useLoaderData();
  const categoryList = [];

  categoryList.push(...categories);

  moreCategories.forEach((category) => {
    const categoryObj = {
      id: Math.floor(Math.random() * (50 - 1 - 20 + 1) + 20),
      name: category,
      image: logo,
    };

    return categoryList.push(categoryObj);
  });

  return (
    <>
      <Container className="mb-7">
        <HeaderNavigation page="Categories" />
        <CategoryList categories={categoryList} />
      </Container>
      {renderFooter}
    </>
  );
};

export default Categories;
