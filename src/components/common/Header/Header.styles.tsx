import styled from '@emotion/styled';

import { theme } from '@/styles/theme';

export const HeaderContainer = styled.div`
  width: 100%;
  height: 60px;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

// TODO-yukddong : Icon 추가되면 적용예정
export const IconBox = styled.div`
  position: absolute;
  left: 40px;
  width: 24px;
  height: 24px;
`;

// TODO-yukddong : theme 스타일 추가되면 적용예정
export const Title = styled.h1`
  font-size: 18px;
  font-weight: 500;
  color: ${theme.color.brand};
`;
