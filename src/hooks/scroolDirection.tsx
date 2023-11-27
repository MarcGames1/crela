/**
 * Hook-ul `useScrollDirection` detectează direcția de scroll într-o aplicație React.
 * Returnează o valoare booleană care indică dacă utilizatorul derulează în sus.
 * Este utilizat pentru a reacționa la schimbările direcției de scroll în componentele tale.
 *
 * @returns {boolean} isScrollingUp - true dacă utilizatorul derulează în sus, altfel false.
 */
import { useState, useEffect } from 'react';

const useScrollDirection = () => {
  const [isScrollingUp, setIsScrollingUp] = useState(false);

  useEffect(() => {
    let lastScrollTop = 0;

    const handleScroll = () => {
      const currentScroll =
        window.scrollY || document.documentElement.scrollTop;

      if (currentScroll > 0 && currentScroll < lastScrollTop) {
        setIsScrollingUp(true);
      } else {
        setIsScrollingUp(false);
      }

      lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return isScrollingUp;
};

export default useScrollDirection;
