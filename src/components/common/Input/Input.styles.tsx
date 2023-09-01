/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';

const inputWrapperStyle = css`
  padding: 8px;
  display: inline-flex;
  align-items: center;
  color: #333;
  background-color: transparent;
  border: 2px solid #9ba5b7;
  border-radius: 0.5rem;
  gap: 12px;

  &:focus-within {
    border: 2px solid black;
  }

  &.size {
    &_md {
      font-size: 1rem;
      height: 38px;
    }
    &_sm {
      font-size: 14px;
      height: 36px;
    }
  }

  &.full-width {
    width: 100%;
  }

  &.error {
    border: 2px solid #fe4977;
  }

  &.text-field {
    border: 0;
    border-radius: 0;
    border-bottom: 2px solid #9ba5b7;
  }
  &.text-fieldError {
    border: 0;
    border-radius: 0;
    border-bottom: 2px solid #fe4977;
  }

  &.input-radius {
    background-color: transparent;
    border-radius: 20px;
    border: 2px solid #9ba5b7;
    &:focus-within {
      border: 2px solid black;
    }
  }
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
  padding: 0;
  color: #333;
  font: inherit;
  text-overflow: ellipsis;
  background-color: transparent;

  &::placeholder {
    color: #999;
    text-overflow: ellipsis;
  }
`;
