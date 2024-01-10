import {
  matchPath,
  resolvePath,
  useHref,
  useLocation,
  useMatch,
  useMatches,
  useResolvedPath,
} from 'react-router-dom';

const useParentUrl = (order = 2) => {
  const { pathname } = useLocation();
  const originPath = pathname.split('/')[1];
  const parentPath = pathname.split('/')[order];

  const href = useHref();
  const match = useMatch;
  const matches = useMatches();
  const resolvedPath = useResolvedPath();

  // console.log(href);
  // console.log(matches);
  // console.log(resolvedPath);

  // console.log(match(href, pathname));
  // console.log(matchPath('/QuickMart/', pathname));
  // console.log(resolvePath('signup', pathname));

  const checkLocation = (urlName) => {
    if (!href.includes(urlName)) return;

    if (matchPath(href, pathname) !== null) {
      return true;
    } else {
      return false;
    }
  };

  const getSiblingLocation = (urlName) => {
    const siblingUrl = href.split('/');
    siblingUrl.splice(-1, 1, urlName);
    return siblingUrl.join('/');
  };

  return {
    originPath,
    parentPath,
    checkLocation,
    getSiblingLocation,
  };
};
export default useParentUrl;
