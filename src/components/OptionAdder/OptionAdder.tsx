import { Dispatch, FormEvent, SetStateAction } from 'react';

import { OptionItem } from '@/components/OptionItem/OptionItem.tsx';
import { useInput } from '@/hooks/useInput.ts';
import * as S from './OptionAdder.styles';

interface OptionAdderProps {
  options: string[];
  setOptions: Dispatch<SetStateAction<string[]>>;
}

export function OptionAdder({ options, setOptions }: OptionAdderProps) {
  const { value, onChange } = useInput('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    let splittedOption = value.split('/');
    if (splittedOption.length !== 2) {
      alert('올바른 형식으로 입력 바랍니다.');
      return;
    }
    splittedOption = splittedOption.map((option) => option.trim());
    const newOption = `${splittedOption[0]} / ${splittedOption[1]}`;
    if (options.includes(newOption)) {
      alert('동일한 옵션이 있습습니다.');
      return;
    }
    setOptions((prev) => prev.concat(newOption));
  };

  const handleDelete = (selectedIndex: number) => {
    setOptions(() => options.filter((_, index) => index !== selectedIndex));
  };

  return (
    <S.OptionAdderWrapper onSubmit={handleSubmit}>
      <label htmlFor="">
        <span>컬러 / 사이즈 등록</span>
        <input
          type="text"
          placeholder={'컬러 / 사이즈 형태로 지정 후 Enter 를 입려해주세요'}
          value={value}
          onChange={onChange}
        />
      </label>
      <S.OptionList>
        {options.map((option, index) => (
          <OptionItem key={option} option={option} onClick={() => handleDelete(index)} />
        ))}
      </S.OptionList>
    </S.OptionAdderWrapper>
  );
}
