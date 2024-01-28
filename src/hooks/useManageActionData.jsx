import { useEffect, useState } from 'react';

const useManageActionData = (actionData) => {
  const [customError, setCustomError] = useState();

  useEffect(() => {
    if (actionData === undefined) return;

    if (Array.isArray(actionData)) {
      setCustomError(actionData);
    } else {
      setCustomError(null);
    }
  }, [actionData]);

  return { customError };
};

export default useManageActionData;
