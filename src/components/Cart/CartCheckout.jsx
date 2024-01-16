import { Button } from 'react-bootstrap';
import './CartCheckout.scss';

const CartCheckout = ({ items }) => {
  const subtotal = items?.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const shipping = 0;
  const total = subtotal + shipping;

  return (
    <section className="cartCheckout mt-lg-3 d-flex flex-column justify-content-lg-center align-items-center gap-lg-3">
      <h2 className="h6">Order info</h2>
      <div className="align-self-start d-lg-flex flex-column gap-1 w-100">
        <div className="cartCheckout__item d-flex justify-content-between">
          <h3 className="cartCheckout__title small fw-normal">Subtotal</h3>
          <span className="cartCheckout__value small fw-normal">
            $ {subtotal}
          </span>
        </div>
        <div className="cartCheckout__item d-flex justify-content-between">
          <h3 className="cartCheckout__title small fw-normal">Shipping</h3>
          <span className="cartCheckout__value small fw-normal">
            $ {shipping}
          </span>
        </div>
        <div className="cartCheckout__item d-flex justify-content-between">
          <h2 className="h6 mb-3">Total</h2>
          <span className="fw-normal">$ {total}</span>
        </div>
      </div>
      <div className="align-self-stretch w-100">
        <Button className="btn-dark w-100">Checkout ({items?.length})</Button>
      </div>
    </section>
  );
};
export default CartCheckout;
