import { Card, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CategoryList.scss';

const CategoryList = ({ categories }) => {
  return (
    <ListGroup className="categories__list my-2 text-center flex-row flex-wrap justify-content-around gap-2">
      {categories.map((category) => (
        <ListGroup.Item
          key={category.id}
          id={category.id}
          className="categories__list-item p-0 rounded-3 d-flex flex-column"
        >
          <Link className="w-100 h-100 text-decoration-none">
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
