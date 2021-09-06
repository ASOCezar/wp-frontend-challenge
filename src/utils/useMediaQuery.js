import { useEffect, useState } from 'react';

export const useMediaQuery = (queryValue) => {
  const [match, setMatch] = useState(false);

  useEffect(() => {
    let isMounted = false;
    const matchMedia = window.matchMedia(queryValue);

    const handleChange = () => {
      !isMounted && false;
      setMatch(matchMedia.matches);
    };

    matchMedia.addEventListener('change', handleChange);
    setMatch(matchMedia.matches);

    return () => {
      isMounted = false;
      matchMedia.removeEventListener('change', handleChange);
    };
  }, [queryValue]);

  return match;
};
