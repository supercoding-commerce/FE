import { useState } from 'react';

const useInputs = <T>(initialValue: T) => {
  const [form, setForm] = useState(initialValue);

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const name = e.target.name;
    const value = e.target.value;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const onChangeForm = (key: keyof T, value: any) => {
    setForm({
      ...form,
      [key]: value,
    });
  };

  const onReset = () => {
    setForm(initialValue);
  };

  return { form, onChange, onChangeForm, onReset };
};

export default useInputs;
