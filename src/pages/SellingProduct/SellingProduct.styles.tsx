import styled from '@emotion/styled';

import { theme } from '@/styles/theme.ts';

export const SellingProductWrapper = styled.div`
  height: calc(100vh - 60px);
  overflow: auto;
  overflow-x: hidden;
`;

export const ProductInfoContainer = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  border-bottom: 1px solid#d8d8d8;
`;

export const ProductImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 10px;
  cursor: pointer;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 10px;
`;

export const ProductName = styled.div`
  font: ${theme.font.body1};
  cursor: pointer;
`;

export const Options = styled.div`
  display: flex;
  align-items: center;
`;

export const BrandName = styled.div`
  font: ${theme.font.body2};
  color: #818181;
`;

export const Price = styled.div`
  font: ${theme.font.body2};
  margin-right: 5px;
`;

export const Option = styled.div`
  font: ${theme.font.body2};
  color: #818181;
  margin-right: 5px;
`;
