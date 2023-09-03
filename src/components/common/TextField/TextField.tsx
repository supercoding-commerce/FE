// default
// required
//margin r/l 30px

import { ReactNode } from 'react';

import * as S from './TextField.styles';

interface TextFieldProps {
  label: ReactNode;
  placeholder?: string;
  isError?: boolean;
  isRequired?: boolean;
}

const TextField = ({ label, isError = false, isRequired = false }: TextFieldProps) => {
  return (
    <>
      <S.TextField>
        <S.Label>
          {label}
          {isRequired && <S.Required> *</S.Required>}
        </S.Label>
      </S.TextField>
    </>
  );
};
