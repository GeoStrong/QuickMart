import useCheckScreenSize from '@/hooks/useCheckScreenSize';
import { Button, Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import HeaderNavigation from '../GlobalUI/HeaderNavigation';
// import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import './ProductDetail.scss';

const ProductDetail = () => {
  const loaderData = useLoaderData();
  const { renderFooter } = useCheckScreenSize();
  // const { activeProduct } = useSelector((state) => state.products);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (loaderData.product) {
      Promise.resolve(loaderData.product).then((data) => setProduct(data));
    }
  }, [loaderData.product]);

  console.log(product);

  return (
    <>
      <Container className="bg-light">
        <HeaderNavigation page="Product Details" whereTo=".." />
        <main className="product pt-6">
          <div className="product__image mb-3 d-flex position-sticky justify-content-center">
            <img
              src={product?.image || product?.images[0]}
              alt={product?.title}
            />
          </div>
          <div className="product__detail bg-white p-3 rounded-4">
            <div className="product__detail-start d-flex justify-content-between align-items-center">
              <h1 className="h4 w-75 fw-bold">{product?.title}</h1>
              <p className="fw-bold">$ {product?.price}</p>
            </div>
          </div>
        </main>
      </Container>
      {renderFooter}
    </>
  );
};
export default ProductDetail;
