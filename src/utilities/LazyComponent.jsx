import { lazy, Suspense } from 'react';
import SpinnerLoader from '../components/UI/SpinnerLoaders/SpinnerLoader';

const LazyComponent = (importFunction) => {
  const LazyLoadedComponent = lazy(importFunction);

  return function WrappedComponent(props) {
    return (
      <Suspense fallback={<SpinnerLoader />}>
        <LazyLoadedComponent {...props} />
      </Suspense>
    );
  };
};

export default LazyComponent;
