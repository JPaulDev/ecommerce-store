import { useEffect } from 'react';

export default function useCloseOnEscape(callback) {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        callback();
      }
    };

    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [callback]);
}
