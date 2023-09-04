import { useState } from 'react';

import useValid from '@/hooks/useValid';

export interface userInfoProps {
  email: string;
  password: string;
}

const useInputs = (initialValue: userInfoProps) => {
  const [form, setForm] = useState(initialValue);

  useValid(form);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const onReset = () => {
    setForm(initialValue);
  };

  return { form, onChange, onReset };
};

export default useInputs;
