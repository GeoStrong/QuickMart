import { Link } from 'react-router-dom';
import { Card, ListGroup } from 'react-bootstrap';
import useParentUrl from '@/hooks/useParentUrl';
import { productsActions } from '@/store/products';
import useLocalStorageData from '@/hooks/useLocalStorageData';
import './CategoryList.scss';

const CategoryList = ({ categories }) => {
  const { setCustomStorageValue } = useLocalStorageData('activeCategory');
  const { originPath, currentPath } = useParentUrl();

  return (
    <ListGroup
      className={`categories__list mb-2 ${
        currentPath !== originPath && 'pt-6 pt-lg-4'
      } text-center flex-row flex-wrap justify-content-around gap-2`}
    >
      {categories.map((category) => (
        <ListGroup.Item
          key={category.id}
          id={category.id}
          className="categories__list-item p-0 rounded-3 d-flex flex-column"
          onClick={() => {
            setCustomStorageValue(category, productsActions.setActiveCategory);
          }}
        >
          <Link
            to={`/${originPath}/categories/${
              category.id > 100 ? category.name : category.id
            }`}
            className="w-100 h-100"
          >
            <Card className="categories__list-card gap-2">
              <Card.Img
                variant="top"
                src={category.image}
                className="categories__list-img"
              />
              <Card.Title className="m-0 h6">{category.name}</Card.Title>
            </Card>
          </Link>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};
export default CategoryList;
