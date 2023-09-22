import { useEffect, useState } from 'react';

function useDebounce<T>(value: T, delay: number = 500): T {
  const [debounceVal, setDebounceVal] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceVal(value);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debounceVal;
}

export default useDebounce;
