import styled from '@emotion/styled';

import { theme } from '@/styles/theme';

export const WishPage = styled.div`
  max-width: 420px;
  height: calc(100vh - 60px);
  padding: 0 15px;
  background-color: ${theme.color.backgroundColor};
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;
