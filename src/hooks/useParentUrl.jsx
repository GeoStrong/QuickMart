import { useLocation } from 'react-router-dom';

const useParentUrl = (order = 2) => {
  const { pathname } = useLocation();
  const originPath = pathname.split('/')[1];
  const parentPath = pathname.split('/')[order];
  const currentPath = pathname.split('/').at(-1);

  return { originPath, parentPath, currentPath };
};
export default useParentUrl;
