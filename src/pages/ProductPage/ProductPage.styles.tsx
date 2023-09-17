import styled from '@emotion/styled';

import { theme } from '@/styles/theme.ts';

export const ProductPageWrapper = styled.div`
  padding: 0 20px;
  padding-top: 0;
  padding-bottom: 0;
  height: calc(100vh - 60px - 46px - 170px);
  overflow: scroll;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    height: 30%;
    background: #535353;
    border-radius: 30px;
  }

  &::-webkit-scrollbar-track {
    background: #cecece;
  }
`;

export const SubCategoryTitle = styled.h1`
  text-align: center;
  ${theme.font.body1}
  padding-top: 10px;
`;
export const FilterContainer = styled.div`
  display: flex;
  margin: 20px 0;
  ${theme.font.body1}
  padding-top: 10px;
  gap: 10px;
`;
