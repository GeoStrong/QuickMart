import { Fragment, useEffect, useState } from 'react';
import './Splashscreen.scss';
import { Container, ProgressBar } from 'react-bootstrap';
import logo from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';

const Splashscreen = () => {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : (prevProgress + 1) * 3
      );
    }, 1000);

    if (progress >= 100) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [progress]);

  useEffect(() => {
    if (progress >= 100) {
      setTimeout(() => {
        setIsLoaded(true);
      }, 1000);
    }
  }, [progress]);

  return (
    <Fragment>
      <Container className="w-100 splashscreen d-flex justify-content-center align-items-center flex-column gap-3 gap-md-5">
        <img src={logo} alt="logo" />
        {isLoaded ? (
          <Link to="onboarding" className="btn btn-dark fs-5">
            Let&apos;s go
          </Link>
        ) : (
          <ProgressBar
            className="splashscreen__progress mt-3"
            animated
            now={progress}
          />
        )}
      </Container>
    </Fragment>
  );
};
export default Splashscreen;
