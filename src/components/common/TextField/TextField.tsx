import { ReactNode } from 'react';

import { theme } from '@/styles/theme';
import * as S from './TextField.styles';

interface TextFieldProps {
  labelId: string;
  label: ReactNode;
  children?: ReactNode;
  error?: boolean;
  required?: boolean;
  rightSlot?: ReactNode;
  help?: ReactNode;
}

const TextField = ({
  labelId,
  label,
  error = false,
  required = false,
  children,
  rightSlot,
  help,
}: TextFieldProps) => {
  const errorStyle = error ? { color: `${theme.color.pink}` } : {};
  return (
    <S.TextField>
      <S.TextFieldLabel>
        <S.LabelWrapper>
          <S.Label htmlFor={labelId} style={errorStyle}>
            {label}
          </S.Label>
          {help && <S.Help>{help}</S.Help>}
        </S.LabelWrapper>
        {required && <S.Required>*</S.Required>}
      </S.TextFieldLabel>
      <S.ChildrenWrapper>
        {children}
        {rightSlot && <S.RightSlot>{rightSlot}</S.RightSlot>}
      </S.ChildrenWrapper>
    </S.TextField>
  );
};

export default TextField;
