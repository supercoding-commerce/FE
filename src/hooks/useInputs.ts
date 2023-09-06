import { useState } from 'react';

const useInputs = <T>(initialValue: T) => {
  const [form, setForm] = useState(initialValue);

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
