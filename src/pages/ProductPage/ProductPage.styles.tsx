import styled from '@emotion/styled';

import { theme } from '@/styles/theme.ts';

export const ProductPageWrapper = styled.div`
  padding: 0 20px;
  padding-top: 0;
  padding-bottom: 0;
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
