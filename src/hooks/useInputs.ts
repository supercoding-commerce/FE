import { useState } from 'react';

const useInputs = (initialValue = {}) => {
  const [form, setForm] = useState(initialValue);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;

    setForm({
      ...form,
      [name]: value,
    });
  };

  return { form, handleChange };
};

export default useInputs;
