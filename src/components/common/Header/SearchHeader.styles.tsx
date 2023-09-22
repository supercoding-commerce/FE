import styled from '@emotion/styled';

import { theme } from '@/styles/theme.ts';

export const SearchHeaderContainer = styled.header`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  background-color: #fff;
  > h1 {
    ${theme.font.h2}
    cursor: pointer;
  }
`;

export const IconsContainer = styled.div`
  width: auto;
  height: 30px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

// TODO: input 공통 컴포넌트 완성되면 수정 예정
export const InputDiv = styled.div`
  height: 30px;
  border: 1px solid ${theme.color.black};
  border-radius: 20px;
  display: flex;
  align-items: center;
  overflow: hidden;
  padding: 0 5px;
`;

export const Input = styled.input`
  width: 0;
  border: none;
  background-color: transparent;
  transition: all ease-in-out 0.5s;
  &.open {
    width: 160px;
  }
`;

export const Logo = styled.h1`
  ${theme.font.body0ExtraBold};
`;
