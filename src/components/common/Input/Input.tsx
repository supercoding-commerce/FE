import { ComponentProps, CSSProperties, HTMLInputTypeAttribute, ReactNode } from 'react';
import { cx } from '@emotion/css';

import * as S from './Input.styles';

interface InputProps extends Omit<ComponentProps<'input'>, 'size'> {
  size?: 'md' | 'sm';
  type?: HTMLInputTypeAttribute;
  isFullWidth?: boolean;
  error?: boolean;
  rightSlot?: ReactNode;
  placeholder?: string;
  isTextField?: boolean;
  isFieldError?: boolean;
  message?: boolean;
  style?: CSSProperties;
}

export function Input({
  type = 'text',
  size = 'md',
  isFullWidth = false,
  error,
  rightSlot,
  placeholder,
  isTextField,
  isFieldError,
  message,
  style,
  ...rest
}: InputProps) {
  const _size = `size_${size}`;

  return (
    <S.InputWrapper
      style={style}
      className={cx(_size, {
        ['full-width']: isFullWidth,
        error,
        'text-field': isTextField,
        'text-fieldError': isFieldError,
        'input-radius': message,
      })}
    >
      <S.Input type={type} placeholder={placeholder} {...rest} />
      {rightSlot}
    </S.InputWrapper>
  );
}
