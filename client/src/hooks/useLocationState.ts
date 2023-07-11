import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * The useLocationState function returns a boolean value indicating whether the current pathname
 * matches the provided pathname.
 * @param {string} pathname - The `pathname` parameter is a string that represents the desired
 * pathname. It is used to compare against the current pathname of the location object obtained from
 * the `useLocation` hook.
 * @returns The function `useLocationState` returns an object with a single property `isPathname`.
 */
const useLocationState = (pathname: string) => {
  const location = useLocation();
  const [isPathname, setIsPathname] = useState<boolean>(true);

  useEffect(() => {
    if (location.pathname !== pathname) setIsPathname(false);
  }, [location, pathname]);

  return { isPathname };
};

export default useLocationState;
