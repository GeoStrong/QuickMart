import { Card, Col, Row } from 'react-bootstrap';
import { Fragment, useEffect, useState } from 'react';
import usePlaceholder from '../../../hooks/usePlaceholder';
import { Link } from 'react-router-dom';
import { productsActions } from '@/store/products';
import useLocalStorageData from '@/hooks/useLocalStorageData';
import useParentUrl from '@/hooks/useParentUrl';
import './ProductsList.scss';

const ProductsList = ({ productList }) => {
  const [isProductLoaded, setIsProductLoaded] = useState(false);
  const { productsRowPlaceholder } = usePlaceholder();
  const { setCustomStorageValue } = useLocalStorageData('activeCategory');
  const { setCustomStorageValue: setCustomProductValue } =
    useLocalStorageData('activeProduct');
  const { originPath, currentPath } = useParentUrl();

  useEffect(() => {
    setIsProductLoaded(true);
  }, [productList]);

  const getFullImage = (image) => {
    ['[', ']', '"'].forEach((char) => {
      image = image.replaceAll(char, '');
    });
    return image;
  };

  const checkCategoryType = (category) => {
    return typeof category === 'object';
  };

  return (
    <Fragment>
      <Row
        className={`mt-0 products mb-5 ${
          currentPath !== originPath && 'pt-5'
        } pb-4`}
      >
        <h1 className="h1 fw-bold">Latest Products</h1>
        {isProductLoaded &&
          productList.map((product) => (
            <Col
              key={product.id}
              id={product.id}
              xs={6}
              lg={4}
              onClick={() => {
                setCustomProductValue(
                  product,
                  productsActions.setActiveProduct
                );
                setCustomStorageValue(
                  checkCategoryType(product.category)
                    ? product.category
                    : { id: product.category, name: product.category },
                  productsActions.setActiveCategory
                );
              }}
            >
              <Link
                to={`/${originPath}/categories/${
                  checkCategoryType(product.category)
                    ? product.category.id
                    : product.category
                }/product/${product.id}`}
              >
                <Card className="products__card">
                  <Card.Img
                    variant="top"
                    src={
                      product.images
                        ? getFullImage(product.images[0])
                        : product.image
                    }
                  />
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
export default ProductsList;
