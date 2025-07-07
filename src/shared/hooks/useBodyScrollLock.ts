import { useEffect } from 'react';

export const useBodyScrollLock = (enabled: boolean = true) => {
  useEffect(() => {
    if (!enabled) return;

    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = '15px';

    return () => {
      document.body.style.overflow = originalStyle;
      document.body.style.paddingRight = '0';
    };
  }, [enabled]);
};
