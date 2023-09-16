import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { theme } from '@/styles/theme.ts';

export const DefaultLayoutWrapper = styled.main<{ onlyDesktop: boolean }>`
  max-width: 420px;
  margin: 0 auto;
  background-color: ${theme.color.backgroundColor};
  position: relative;
  height: 100vh;
  ${({ onlyDesktop }) =>
    onlyDesktop &&
    css`
      max-width: 1040px;
      height: 100%;
    `}
`;
