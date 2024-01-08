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
  padding-bottom: 20px;
`;

export const NoneWish = styled.div`
  max-width: 420px;
  height: calc(100vh - 60px);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  p {
    display: flex;
    justify-content: center;
    align-items: center;
    font: ${theme.font.body1Bold};
    margin-bottom: 5px;
  }
`;
