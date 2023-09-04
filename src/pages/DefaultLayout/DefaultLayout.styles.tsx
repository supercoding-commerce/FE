import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { theme } from '@/styles/theme.ts';

export const DefaultLayoutWrapper = styled.main<{ onlyDesktop: boolean }>`
  max-width: 420px;
  margin: 0 auto;
  background-color: ${theme.color.backgroundColor};
  position: relative;

  // 구현하다가 막히면 이 부분 수정해도됨
  height: 100vh;

  ${({ onlyDesktop }) =>
    onlyDesktop &&
    css`
      max-width: 1040px;
    `}
`;
