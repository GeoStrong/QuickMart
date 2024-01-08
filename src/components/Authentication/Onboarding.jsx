import { useState } from 'react';
import { Button, Card, Carousel, Container } from 'react-bootstrap';
import logo from '../../assets/images/logo.png';
import back from '../../assets/svg/back.svg';
import './Onboarding.scss';
import { Link } from 'react-router-dom';
import useParentUrl from '../../hooks/useParentUrl';

const Onboarding = () => {
  const { originPath } = useParentUrl();
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Container className="d-flex justify-content-center onboarding">
      <Carousel
        controls={false}
        interval={null}
        activeIndex={index}
        onSelect={handleSelect}
      >
        <Carousel.Item>
          <Card className="onboarding__card flex-md-row border-0 py-3">
            <div className="onboarding__card-header onboarding__card-header--1 bg-secondary rounded-5">
              <img
                src={logo}
                alt="logo"
                className="onboarding__card-img pt-3 ps-3"
              />
              <Button
                variant="white"
                className="text-primary float-end mt-3 py-1"
                onClick={() => setIndex(2)}
              >
                Skip for now
              </Button>
            </div>
            <Card.Body className="onboarding__card-body pt-0 d-flex flex-column justify-content-center gap-1 gap-md-3">
              <Card.Title className="fw-bold fs-3 text-dark text-center text-md-end">
                Explore a wide range of products
              </Card.Title>
              <Card.Text className="onboarding__card-text fs-6 fw-normal text-center text-md-end">
                Explore a wide range of products at your fingertips. QuickMart
                offers an extensive collection to suit your needs.
              </Card.Text>
              <Button
                variant="dark"
                className="px-5 py-2 align-self-md-end"
                onClick={() => setIndex((prevIndex) => prevIndex + 1)}
              >
                Next
              </Button>
            </Card.Body>
          </Card>
        </Carousel.Item>
        <Carousel.Item>
          <Card className="onboarding__card flex-md-row border-0 py-3">
            <div className="onboarding__card-header onboarding__card-header--2 bg-secondary rounded-5">
              <Button
                variant="white"
                onClick={() => setIndex((prevIndex) => prevIndex - 1)}
              >
                <img src={back} alt="logo" className="pt-1" />
              </Button>
            </div>
            <Card.Body className="onboarding__card-body pt-0 d-flex flex-column justify-content-center gap-1 gap-md-3">
              <Card.Title className="fw-bold fs-3 text-dark text-center text-md-end">
                Unlock exclusive offers and discounts
              </Card.Title>
              <Card.Text className="onboarding__card-text fs-6 fw-normal text-center text-md-end">
                Get access to limited-time deals and special promotions
                available only to our valued customers.
              </Card.Text>
              <Button
                variant="dark"
                className="px-5 py-2  align-self-md-end"
                onClick={() => setIndex((prevIndex) => prevIndex + 1)}
              >
                Next
              </Button>
            </Card.Body>
          </Card>
        </Carousel.Item>
        <Carousel.Item>
          <Card className="onboarding__card flex-md-row border-0 py-3">
            <div className="onboarding__card-header onboarding__card-header--3 bg-secondary rounded-5">
              <Button
                variant="white"
                onClick={() => setIndex((prevIndex) => prevIndex - 1)}
              >
                <img src={back} alt="logo" className="pt-1" />
              </Button>
            </div>
            <Card.Body className="onboarding__card-body pt-0 d-flex flex-column justify-content-center gap-1 gap-md-3">
              <Card.Title className="fw-bold fs-3 text-dark text-center text-md-end">
                Safe and secure payments
              </Card.Title>
              <Card.Text className="onboarding__card-text fs-6 fw-normal text-center text-md-end">
                QuickMart employs industry-leading encryption and trusted
                payment gateways to safeguard your financial information.
              </Card.Text>
              <div className="d-flex flex-md-column justify-content-between gap-1">
                <Link
                  to={`/${originPath}/authentication/login`}
                  className="btn bg-white px-4 py-3 w-100 align-self-md-end"
                >
                  Login
                </Link>
                <Link
                  to={`/${originPath}/authentication/signup`}
                  className="btn bg-dark text-white px-4 py-3 w-100 align-self-md-end"
                >
                  Get Started
                </Link>
              </div>
            </Card.Body>
          </Card>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default Onboarding;
