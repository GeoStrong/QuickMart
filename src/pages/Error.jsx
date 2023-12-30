import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

const Error = () => {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    console.log(error);
  }
  return <div>error</div>;
};
export default Error;
