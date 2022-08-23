import { useState, useEffect } from 'react';

export default function useMediaQuery(query) {
  const [isMatch, setIsMatch] = useState(window.matchMedia(query).matches);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    const handleMatch = () => setIsMatch(mediaQuery.matches);

    mediaQuery.addEventListener('change', handleMatch);

    return () => mediaQuery.removeEventListener('change', handleMatch);
  }, [query]);

  return isMatch;
}
