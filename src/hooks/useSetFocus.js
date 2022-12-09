import { useEffect } from 'react';

export default function useSetFocus(ref) {
  useEffect(() => {
    if (!ref.current) return;

    ref.current.focus();
  });
}
