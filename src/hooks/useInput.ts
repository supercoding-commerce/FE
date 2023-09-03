import { ChangeEvent, useState } from 'react';

export function useInput(initValue = '') {
  const [value, setValue] = useState(initValue);

  return {
    value,
    onChange: (event: ChangeEvent<HTMLInputElement>) => setValue(event.target.value),
    onReset: () => setValue(initValue),
  };
}
