import { ComponentProps, CSSProperties, PropsWithChildren } from 'react';
import { cx } from '@emotion/css';

import Icon, { IconNameType } from '@/components/common/Icon';
import * as S from './Button.styles';

interface ButtonProps extends ComponentProps<'button'> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  color?: CSSProperties['color'];
  backgroundColor?: CSSProperties['backgroundColor'];
  width?: CSSProperties['width'];
  height?: CSSProperties['height'];
  isCircle?: boolean;
  isFullWidth?: boolean;
  isDisabled?: boolean;
  icon?: IconNameType;
  // {이 안에 기본적인 button 속성도 있음}
}

const Button = ({
  variant,
  size,
  isCircle = false,
  isFullWidth = false,
  isDisabled = false,
  backgroundColor,
  width,
  height,
  color,
  children,
  icon,
  ...rest
}: PropsWithChildren<ButtonProps>) => {
  const _variant = `variant_${variant}`;
  const _size = `size_${size}`;

  return (
    <S.Button
      className={cx(_variant, _size, {
        ['circle']: isCircle,
        ['full-width']: isFullWidth,
        isDisabled,
      })}
      disabled={isDisabled}
      style={
        {
          '--background-color': backgroundColor,
          '--color': color,
          '--width': width,
          '--height': height,
        } as CSSProperties
      }
      {...rest}
    >
      <span>{children}</span>
      {icon && <Icon name={icon} color="black" />}
    </S.Button>
  );
};

export default Button;

type ButtonVariant = 'contained' | 'outlined' | 'main';
type ButtonSize = 'large' | 'medium' | 'small' | 'xsmall';
