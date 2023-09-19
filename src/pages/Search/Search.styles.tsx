import styled from '@emotion/styled';

import { theme } from '@/styles/theme.ts';

export const SearchHeader = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`;

export const InputDiv = styled.div`
  height: 33px;
  border: 1px solid ${theme.color.black};
  border-radius: 20px;
  display: flex;
  align-items: center;
  overflow: hidden;
  padding: 0 10px;
  width: 70%;
  margin-left: 20px;
`;

export const IconBox = styled.div`
  position: absolute;
  left: 30px;
  width: 28px;
  height: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.input`
  width: 100%;
  outline: none;
  border: none;
  background-color: transparent;
  margin-left: 8px;
`;
