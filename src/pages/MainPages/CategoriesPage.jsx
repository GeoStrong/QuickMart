import { Await, useRouteLoaderData } from 'react-router-dom';
import { Suspense } from 'react';
import Categories from '@/components/Categories/Categories';
import SpinnerLoader from '@/components/UI/SpinnerLoaders/SpinnerLoader';

const CategoriesPage = () => {
  const { categories, moreCategories } = useRouteLoaderData('categories');

  const categoryPromises = Promise.all([categories, moreCategories]);

  return (
    <>
      <Suspense fallback={<SpinnerLoader />}>
        <Await resolve={categoryPromises}>
          {(resolvedCategories) => (
            <Categories
              categories={resolvedCategories[0]}
              moreCategories={resolvedCategories[1]}
            />
          )}
        </Await>
      </Suspense>
    </>
  );
};

export default CategoriesPage;
