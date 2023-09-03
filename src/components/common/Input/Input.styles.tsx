/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { theme } from '@/styles/theme';

const inputWrapperStyle = css`
  padding: 10px;
  display: inline-flex;
  align-items: center;
  color: #333;
  background-color: transparent;
  border: none;

  border-radius: 0.5rem;
  &:focus-within {
    border: 2px solid black;
  }

  &.size {
    &_md {
      height: 38px;
    }
    &_sm {
      height: 30px;
    }
  }

  &.variant {
    &_outline {
      height: 45px;
      background-color: transparent;
      border-radius: 25px;
      border: 2px solid ${theme.color.borderColor};
      &:focus-within {
        border: 2px solid black;
      }
    }

    &_underline {
      height: 34px;
      padding: 0;
      border: 0;
      border-radius: 0;
      border-bottom: 2px solid ${theme.color.borderColor};
    }
  }

  &.full-width {
    width: 100%;
  }

  &.error {
    border-color: ${theme.color.error};
  }
`;

export const ErrorMessage = styled.span`
  display: block;
  padding-left: 15px;
  color: #fe4977;
  font-size: 0.7rem;
`;

export const InputWrapper = styled.span<{
  error?: boolean;
  size?: 'md' | 'sm';
  fullWidth?: boolean;
}>`
  ${inputWrapperStyle};
`;

export const Input = styled.input`
  outline: none;
  border: none;
  width: 100%;
  color: #333;
  font: inherit;
  font-size: 0.85rem;
  text-overflow: ellipsis;
  background-color: transparent;

  &::placeholder {
    color: #999;
    text-overflow: ellipsis;
  }
`;
