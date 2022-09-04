import { useState, useEffect, useCallback } from 'react';

export default function useIsHovered() {
  const [element, setElement] = useState(null);
  const [isHovered, setIsHovered] = useState(false);

  const ref = useCallback((refElement) => {
    if (refElement !== null) {
      setElement(refElement);
    }
  }, []);

  useEffect(() => {
    if (element === null) return undefined;

    const handleMouseOver = () => setIsHovered(true);
    const handleMouseOut = () => setIsHovered(false);

    element.addEventListener('mouseenter', handleMouseOver);
    element.addEventListener('mouseleave', handleMouseOut);

    return () => {
      element.removeEventListener('mouseenter', handleMouseOver);
      element.removeEventListener('mouseleave', handleMouseOut);
    };
  }, [element]);

  return [isHovered, ref];
}
