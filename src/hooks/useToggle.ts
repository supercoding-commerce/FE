import { useCallback, useState } from 'react';

export function useToggle(): [boolean, () => void] {
  const [toggle, setToggle] = useState(false);

  const onToggle = useCallback(() => {
    setToggle((prev) => !prev);
  }, []);

  return [toggle, onToggle];
}
