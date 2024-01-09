import { useEffect, useState } from 'react';
import {
  Badge,
  Card,
  CardImgOverlay,
  Carousel,
  Col,
  ListGroup,
  Row,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Main.scss';
import usePlaceholder from '../../hooks/usePlaceholder';

const Main = ({ categoryList, children }) => {
  const { carouselItemPlaceholder, listItemPlaceholder } = usePlaceholder();
  const [index, setIndex] = useState(0);
  const [isCategoryLoaded, setIsCategoryLoaded] = useState(false);

  useEffect(() => {
    setIsCategoryLoaded(true);
  }, [categoryList]);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <main className="main mt-4">
      <Row className="main__start d-flex">
        <Col xs={12} lg={6}>
          <Carousel
            activeIndex={index}
            onSelect={handleSelect}
            className="main__carousel h-100"
          >
            {categoryList.map((category) => (
              <Carousel.Item
                key={category.id}
                id={category.id}
                className="main__carousel-item h-100"
              >
                <Card className="h-100 flex-row">
                  <Card.Img src={category.image} className="rounded-3" />
                  <CardImgOverlay>
                    <Card.Body className="h-100 p-0 pb-4 d-flex flex-column justify-content-end gap-1 gap-md-3">
                      <Badge
                        bg="dark"
                        className="main__card-badge align-self-start py-2 small"
                      >
                        {Math.random().toFixed(1) * 100}% OFF
                      </Badge>
                      <Card.Text className="mb-0 fw-normal text-white small">
                        On {category.name}
                      </Card.Text>
                      <Card.Title className="text-white">
                        Exclusive Sales
                      </Card.Title>
                    </Card.Body>
                  </CardImgOverlay>
                </Card>
              </Carousel.Item>
            ))}
            {/* {carouselItemPlaceholder} */}
          </Carousel>
        </Col>
        <Col xs={12} lg={6} className="categories">
          <div className="categories__headline d-flex justify-content-between align-items-center">
            <h2 className="fw-bold">Categories</h2>
            <Link className="text-primary text-decoration-none">See All</Link>
          </div>
          <ListGroup className="categories__list my-2 text-center flex-row flex-wrap justify-content-around gap-2">
            {isCategoryLoaded ? (
              categoryList.map((category) => (
                <ListGroup.Item
                  key={category.id}
                  id={category.id}
                  className="categories__item p-0 rounded-3 d-flex flex-column"
                >
                  <Link className="w-100 h-100 text-decoration-none">
                    <Card className="categories__card gap-2">
                      <Card.Img variant="top" src={category.image} />
                      <Card.Title className="m-0 h6">
                        {category.name}
                      </Card.Title>
                    </Card>
                  </Link>
                </ListGroup.Item>
              ))
            ) : (
              <>
                {listItemPlaceholder}
                {listItemPlaceholder}
              </>
            )}
          </ListGroup>
        </Col>
      </Row>
      {children}
    </main>
  );
};
export default Main;
