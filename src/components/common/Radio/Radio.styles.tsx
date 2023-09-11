import styled from '@emotion/styled';

import { theme } from '@/styles/theme.ts';

export const CheckboxWrapper = styled.div`
  display: inline-flex;
  line-height: 1.2;
  gap: 0.5rem;
`;

export const Checkbox = styled.span`
  position: relative;
  z-index: 0;
  display: inline-flex;
  width: 24px;
  height: 24px;

  &.circle {
    [data-radio-icon] {
      border-radius: 9999px;
    }
  }

  [data-radio-icon] {
    position: absolute;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    border: 1px solid #d9d9d9;
    inset: 2px;
  }

  [data-radio-control] {
    // 기존 checkbox UI 숨기기
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 100%;
    opacity: 0;
    inset: 0;

    &:checked + [data-radio-icon] {
      color: ${theme.color.white};
      background-color: ${theme.color.brand};
      border-color: ${theme.color.brand};
    }
  }
`;

export const LabelWrapper = styled.div`
  flex: 1;
  margin-top: 2px;

  label {
    display: block;
  }
  label.reverse {
    text-align: end;
  }
  p {
    font-size: 12px;
  }
  p.reverse {
    text-align: end;
  }

  ${theme.font.body2}
`;
