import {
  Card,
  Carousel,
  Col,
  ListGroup,
  Placeholder,
  Row,
} from 'react-bootstrap';

const usePlaceholder = () => {
  const carouselItemPlaceholder = (
    <Carousel.Item className="main__carousel-item main__carousel-item--placeholder rounded-5 d-flex flex-column justify-content-end pb-3 ps-3">
      <Placeholder xs={2} />
      <Placeholder as={Card.Text} animation="glow" className="m-0">
        <Placeholder xs={4} /> <Placeholder xs={6} />{' '}
      </Placeholder>
      <Placeholder as={Card.Title} animation="glow">
        <Placeholder xs={6} />
      </Placeholder>
    </Carousel.Item>
  );

  const listItemPlaceholder = (
    <>
      <Placeholder
        as={ListGroup.Item}
        animation="glow"
        className="categories__placeholder p-2 d-flex flex-column align-items-center justify-content-end gap-2"
      >
        <Placeholder xs={6} />
        <Placeholder xs={12} />
      </Placeholder>
    </>
  );

  const productsRowPlaceholder = (
    <Row className="mt-3 products mt-md-5">
      <Col xs={6} lg={4} className="mb-md-7 pb-xxl-5">
        <Card className="products__card products__card--placeholder">
          <Card.Body className="w-100 d-flex flex-column justify-content-end">
            <Placeholder as={Card.Title} animation="glow">
              <Placeholder xs={10} />
            </Placeholder>
            <Placeholder as={Card.Text} animation="glow">
              <Placeholder xs={3} />
            </Placeholder>
          </Card.Body>
        </Card>
      </Col>
      <Col xs={6} lg={4} className="mb-md-7 pb-xxl-5">
        <Card className="products__card products__card--placeholder">
          <Card.Body className="w-100 d-flex flex-column justify-content-end">
            <Placeholder as={Card.Title} animation="glow">
              <Placeholder xs={10} />
            </Placeholder>
            <Placeholder as={Card.Text} animation="glow">
              <Placeholder xs={3} />
            </Placeholder>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );

  return {
    carouselItemPlaceholder,
    listItemPlaceholder,
    productsRowPlaceholder,
  };
};
export default usePlaceholder;
