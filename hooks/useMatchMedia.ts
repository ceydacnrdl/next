import { useEffect, useState } from 'react';

interface Props {
  query: string;
}

export default function useMatchMedia({ query }: Props) {
  const [match, setMatch] = useState(false);

  useEffect(() => {
    const handleResize = (e: MediaQueryListEvent) => {
      setMatch(e.matches);
    };

    const matches = window.matchMedia(query);

    handleResize({ matches } as any);

    if (typeof matches.addEventListener === 'undefined') {
      matches.addListener(handleResize);
      return () => {
        matches.removeListener(handleResize);
      };
    }

    matches.addEventListener('change', handleResize);
    return () => {
      matches.removeEventListener('change', handleResize);
    };
  }, [query]);

  return match;
}
