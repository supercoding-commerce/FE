import styled from '@emotion/styled';

import { theme } from '@/styles/theme';

export const Counter = styled.span`
  display: flex;
  width: 90px;
  height: 34px;
  border: 1px solid black;
  border-radius: 4px;
  background-color: #e7e7e7;
`;

export const MinusBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 33px;
  border-right: 1px solid black;
  border-radius: 4px 0 0 4px;
  cursor: pointer;
  ${theme.font.body0}

  & div {
    &:hover {
      color: ${theme.color.brandHover};
      transition: 0.15s ease-in-out;
    }
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 2px;
    width: 20px;
    height: 25px;
  }
`;
export const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 42px;
  height: 33px;
  input {
    ::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    ::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    border-width: 0;
    &:focus {
      outline: none;
    }
    ${theme.font.body2}
    background-color:transparent;
    padding: 0;
    text-align: center;
    width: 30px;
  }
`;

export const PlusBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 33px;
  border-left: 1px solid black;
  cursor: pointer;
  ${theme.font.body1}

  div {
    &:hover {
      color: ${theme.color.brandHover};
      transition: 0.15s ease-in-out;
    }
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20px;
    height: 25px;
  }
`;
