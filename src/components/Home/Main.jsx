import { useEffect, useState } from 'react';
import {
  Badge,
  Card,
  CardImgOverlay,
  Carousel,
  Col,
  Row,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import usePlaceholder from '../../hooks/usePlaceholder';
import CategoryList from '../UI/CategoryLayout/CategoryList';
import './Main.scss';

const Main = ({ categoryList, children, discountProducts }) => {
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
            {discountProducts.length > 0
              ? discountProducts.map((product) => (
                  <Carousel.Item
                    key={product.id}
                    id={product.id}
                    className="main__carousel-item h-100"
                  >
                    <Link>
                      <Card className="h-100 flex-row bg-secondary bg-opacity-10">
                        <Card.Img
                          src={product.image}
                          className="main__carousel-img rounded-3"
                        />
                        <CardImgOverlay>
                          <Card.Body className="h-100 p-0 pb-4 d-flex flex-column justify-content-end gap-1 gap-md-3">
                            <div className="bg-dark bg-opacity-50 p-1 rounded-3">
                              <Badge
                                bg="dark"
                                className="main__card-badge align-self-start py-2 small"
                              >
                                {Math.floor(
                                  Math.random() * (80 - 1 - 20 + 1) + 20
                                )}
                                % OFF
                              </Badge>
                              <Card.Text className="mb-0 fw-normal text-white small">
                                On {product.title}
                              </Card.Text>
                              <Card.Title className="text-white">
                                Exclusive Sales
                              </Card.Title>
                            </div>
                          </Card.Body>
                        </CardImgOverlay>
                      </Card>
                    </Link>
                  </Carousel.Item>
                ))
              : carouselItemPlaceholder}
          </Carousel>
        </Col>
        <Col xs={12} lg={6} className="categories">
          <div className="categories__headline d-flex justify-content-between align-items-center">
            <h2 className="fw-bold">Categories</h2>
            <Link to="categories" className="text-primary z-2">
              See All
            </Link>
          </div>
          {isCategoryLoaded ? (
            <CategoryList categories={categoryList} />
          ) : (
            <>
              <div className="d-flex gap-3">
                {listItemPlaceholder}
                {listItemPlaceholder}
                {listItemPlaceholder}
                {listItemPlaceholder}
              </div>
            </>
          )}
        </Col>
      </Row>
      {children}
    </main>
  );
};
export default Main;
