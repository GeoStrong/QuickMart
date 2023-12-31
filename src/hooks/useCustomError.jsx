import { useEffect, useState } from 'react';

const useCustomError = (actionData) => {
  const [customError, setCustomError] = useState();

  useEffect(() => {
    if (Array.isArray(actionData)) {
      setCustomError(actionData);
    } else {
      setCustomError(null);
    }
  }, [actionData]);

  return { customError };
};

export default useCustomError;
