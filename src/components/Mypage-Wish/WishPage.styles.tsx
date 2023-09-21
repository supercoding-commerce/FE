import styled from '@emotion/styled';

import { theme } from '@/styles/theme';

export const WishPage = styled.div`
  max-width: 420px;
  height: calc(100vh - 60px);
  padding: 0 20px;
  background-color: ${theme.color.backgroundColor};
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));
`;
