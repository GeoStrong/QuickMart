import useCheckScreenSize from '@/hooks/useCheckScreenSize';
import { Button, Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import HeaderNavigation from '../GlobalUI/HeaderNavigation';
// import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import './ProductDetail.scss';
import { Rating } from 'react-simple-star-rating';

const ProductDetail = () => {
  const loaderData = useLoaderData();
  const { renderFooter } = useCheckScreenSize();
  // const { activeProduct } = useSelector((state) => state.products);
  const [product, setProduct] = useState(null);
  const [isDescriptionShort, setIsDescriptionShort] = useState(true);

  let description;

  useEffect(() => {
    if (loaderData.product) {
      Promise.resolve(loaderData.product).then((data) => setProduct(data));
    }
  }, [loaderData.product]);

  useEffect(() => {
    if (product?.description.length > 100) {
      setIsDescriptionShort(true);
    } else {
      setIsDescriptionShort(false);
    }
  }, [product]);

  if (isDescriptionShort) {
    description = product?.description.slice(0, 100) + ' ...';
  } else {
    description = product?.description;
  }

  console.log(product);

  const getFullImage = (image) => {
    ['[', ']', '"'].forEach((char) => {
      image ? (image = image.replaceAll(char, '')) : '';
    });
    return image;
  };

  return (
    <>
      <div className=" bg-light">
        <Container className="mb-5">
          <HeaderNavigation page="Product Details" whereTo=".." />
          <main className="product pt-6">
            <div className="product__image mb-3 d-flex position-sticky justify-content-center">
              <img
                src={product?.image || getFullImage(product?.images[0])}
                alt={product?.title}
              />
            </div>
            <div className="product__detail bg-white p-3 rounded-4">
              <div className="product__detail-start d-flex justify-content-between align-items-center">
                <h1 className="h4 w-75 fw-bold">{product?.title}</h1>
                <p className="fw-bold">$ {product?.price}</p>
              </div>
              <div className="product__detail-middle">
                <div className="product__detail-testimonials d-flex gap-1 align-items-center">
                  <Rating
                    iconsCount={5}
                    initialValue={
                      product?.rating
                        ? product?.rating.rate
                        : (Math.random() * (5 - 1 - 0 + 1) + 0).toFixed(1)
                    }
                    readonly
                    allowFraction
                    size={15}
                    showTooltip
                    tooltipClassName="bg-white text-dark ms-1 small"
                  />
                  <span className="small">
                    (
                    {product?.rating
                      ? product?.rating.count
                      : Math.floor(Math.random() * (1000 - 1 - 0 + 1) + 0)}{' '}
                    reviews)
                  </span>
                </div>
                <p className="product__detail-description fw-light">
                  {description}{' '}
                  <Button
                    variant="white"
                    className="p-0 text-primary"
                    onClick={() => {
                      setIsDescriptionShort((prevValue) => !prevValue);
                    }}
                  >
                    {isDescriptionShort ? 'Read More' : 'Read Less'}
                  </Button>
                </p>
              </div>
            </div>
          </main>
        </Container>
      </div>
      {renderFooter}
    </>
  );
};
export default ProductDetail;
