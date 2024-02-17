import useCheckScreenSize from '@/hooks/useCheckScreenSize';
import { Button, ButtonGroup, ButtonToolbar, Container } from 'react-bootstrap';
import { Link, useFetcher, useLoaderData } from 'react-router-dom';
import HeaderNavigation from '../GlobalUI/HeaderNavigation';
import { useEffect, useState } from 'react';
import { Rating } from 'react-simple-star-rating';
import cartSvg from '@/assets/svg/cart.svg';
import './ProductDetail.scss';
import useCustomSvg from '@/hooks/useCustomSvg';
import { useEffectOnce } from 'react-use';

const ProductDetail = () => {
  const fetcher = useFetcher();
  const loaderData = useLoaderData();
  const [product, setProduct] = useState(null);
  const [isDescriptionShort, setIsDescriptionShort] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [isItemFavoirite, setIsItemFavoirite] = useState(false);
  const [randomRatingRate, setRandomRatingRate] = useState(null);
  const [randomRatingCount, setRandomRatingCount] = useState(null);
  const { renderFooter } = useCheckScreenSize();
  const { getWishlistSvg } = useCustomSvg();

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

  const getFullImage = (image) => {
    ['[', ']', '"'].forEach((char) => {
      image ? (image = image.replaceAll(char, '')) : '';
    });
    return image;
  };

  const handleQuantity = (action) => {
    if (action === '+') {
      setQuantity((prevValue) => prevValue + 1);
    } else if (action === '-' && quantity > 1) {
      setQuantity((prevValue) => prevValue - 1);
    }
  };

  useEffectOnce(() => {
    setRandomRatingRate((Math.random() * (5 - 1 - 0 + 1) + 0).toFixed(1));
    setRandomRatingCount(Math.floor(Math.random() * (1000 - 1 - 0 + 1) + 0));
  });

  const productWithUpdatedImg = {
    ...product,
    image: product?.image || getFullImage(product?.images[0]),
  };

  const productInfo = { ...productWithUpdatedImg, quantity };

  return (
    <>
      <div className="bg-light mb-6">
        <Container className="">
          <HeaderNavigation page="Product Details" whereTo=".." />
          <main className="product pt-6">
            <div className="product__image mb-3 d-flex position-sticky justify-content-center">
              <img
                src={productWithUpdatedImg.image}
                alt={productWithUpdatedImg.title}
              />
            </div>
            <div className="product__detail bg-white position-relative p-3 rounded-4">
              <Button
                variant="white"
                className="product__detail--favorite position-absolute border-0"
                onClick={() => {
                  setIsItemFavoirite((prevValue) => !prevValue);
                }}
              >
                {getWishlistSvg('#000', isItemFavoirite)}
              </Button>
              <div className="product__detail-start d-flex justify-content-between align-items-center">
                <h1 className="h4 w-75 m-0 fw-bold">
                  {productWithUpdatedImg.title}
                </h1>
                <p className="fw-bold m-0">$ {productWithUpdatedImg.price}</p>
              </div>
              <div className="product__detail-middle">
                <div className="product__detail-testimonials d-flex gap-1 align-items-center">
                  <Rating
                    iconsCount={5}
                    initialValue={
                      productWithUpdatedImg.rating
                        ? productWithUpdatedImg.rating.rate
                        : randomRatingRate
                    }
                    readonly
                    allowFraction
                    size={15}
                    showTooltip
                    tooltipClassName="bg-white text-dark ms-1 small"
                  />
                  <span className="small">
                    (
                    {productWithUpdatedImg.rating
                      ? productWithUpdatedImg.rating.count
                      : randomRatingCount}{' '}
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
                <ButtonToolbar className="product__detail-toolbar justify-content-between">
                  <ButtonGroup className="product__detail-group align-items-center small">
                    <Button
                      onClick={() => {
                        handleQuantity('-');
                      }}
                      data-action="-"
                      className="bg-white"
                    >
                      -
                    </Button>
                    <span className="">{quantity}</span>
                    <Button
                      onClick={() => {
                        handleQuantity('+');
                      }}
                      data-action="+"
                      className="bg-white"
                    >
                      +
                    </Button>
                  </ButtonGroup>
                </ButtonToolbar>
              </div>
              <div className="d-flex">
                <Link className="btn btn-white w-50 fw-bold py-3 rounded-3">
                  Buy Now
                </Link>
                <Button
                  variant="dark fw-bold"
                  className="w-50 d-flex align-items-center justify-content-center py-3 rounded-3"
                  type="submit"
                  onClick={() => {
                    fetcher.submit(
                      {
                        intent: 'add to cart',
                        product: JSON.stringify(productInfo),
                      },
                      { method: 'patch' }
                    );
                  }}
                >
                  <span>Add to Cart</span>
                  <img src={cartSvg} alt="cart" />
                </Button>
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
