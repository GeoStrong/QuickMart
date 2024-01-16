import { Card, Col, Row } from 'react-bootstrap';
import './Products.scss';
import { Fragment, useEffect, useState } from 'react';
import usePlaceholder from '../../hooks/usePlaceholder';
import { Link } from 'react-router-dom';

const Products = ({ productList }) => {
  const { productsRowPlaceholder } = usePlaceholder();
  const [isProductLoaded, setIsProductLoaded] = useState(false);

  useEffect(() => {
    setIsProductLoaded(true);
  }, [productList]);

  return (
    <Fragment>
      <Row className="mt-3 products mt-md-5 mb-5 pb-4">
        <h1 className="h1 fw-bold">Latest Products</h1>
        {isProductLoaded &&
          productList.map((product) => (
            <Col key={product.id} id={product.id} xs={6} lg={4} className="">
              <Link>
                <Card className="products__card">
                  <Card.Img variant="top" src={product.images[0]} />
                  <Card.Body className="w-100">
                    <Card.Title className="h6">{product.title}</Card.Title>
                    <Card.Text className="small fw-semibold">
                      $ {product.price}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          ))}
      </Row>
      {!isProductLoaded && productsRowPlaceholder}
    </Fragment>
  );
};
export default Products;
