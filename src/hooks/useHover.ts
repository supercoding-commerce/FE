import { useEffect, useRef, useState } from 'react';

export function useHover<T extends HTMLElement = HTMLElement>() {
  const [isHover, setIsHover] = useState(false);
  const ref = useRef<T | null>(null);

  const handleMouseEnter = () => setIsHover(true);
  const handleMouseLeave = () => setIsHover(false);

  useEffect(() => {
    const node = ref.current;
    if (node) {
      node.addEventListener('mouseenter', handleMouseEnter);
      node.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (node) {
        node.removeEventListener('mouseenter', handleMouseEnter);
        node.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return { ref, isHover };
}
