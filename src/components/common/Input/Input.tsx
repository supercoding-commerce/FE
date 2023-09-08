import { ComponentProps, CSSProperties, ReactNode } from 'react';
import { cx } from '@emotion/css';

import * as S from './Input.styles';

interface InputProps extends Omit<ComponentProps<'input'>, 'size' | 'style'> {
  size?: 'md' | 'sm';
  isFullWidth?: boolean;
  error?: boolean;
  errorMessage?: string;
  rightSlot?: ReactNode;
  style?: CSSProperties;
  variant?: 'outline' | 'underline';
}

export function Input({
  variant = 'outline',
  size = 'md',
  isFullWidth = false,
  error,
  errorMessage,
  rightSlot,
  style,
  ...rest
}: InputProps) {
  const _size = `size_${size}`;
  const _variant = `variant_${variant}`;

  return (
    <>
      <S.InputWrapper
        className={cx(_size, _variant, {
          ['full-width']: isFullWidth,
          error,
        })}
        style={style}
      >
        <S.Input {...rest} />
        {rightSlot}
      </S.InputWrapper>
      {error && errorMessage && <S.ErrorMessage>{errorMessage}</S.ErrorMessage>}
    </>
  );
}
