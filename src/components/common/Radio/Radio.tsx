import { ComponentProps, ReactNode } from 'react';
import { cx } from '@emotion/css';

import { CheckIcon } from '@/components/icons/CheckIcon.tsx';
import * as S from './Radio.styles';

// GYU-TODO: Radio 컴포넌트 리팩토링
// https://ant.design/components/radio
// https://mui.com/material-ui/react-radio-button/

interface RadioBoxProps extends Omit<ComponentProps<'input'>, 'label'> {
  label?: ReactNode;
  labelId?: string;
  isCircle?: boolean;
}

export function Radio({ label, labelId, isCircle = false, ...rest }: RadioBoxProps) {
  function _Checkbox() {
    return (
      <S.Checkbox
        className={cx({
          circle: isCircle,
        })}
      >
        <input //
          id={labelId}
          type="radio"
          data-radio-control
          {...rest}
        />
        <span data-radio-icon>
          <CheckIcon />
        </span>
      </S.Checkbox>
    );
  }

  return (
    <S.CheckboxWrapper>
      <_Checkbox />
      <S.LabelWrapper>{label && <label htmlFor={labelId}>{label}</label>}</S.LabelWrapper>
    </S.CheckboxWrapper>
  );
}
