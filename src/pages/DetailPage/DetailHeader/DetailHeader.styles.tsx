import styled from '@emotion/styled';

import { theme } from '@/styles/theme';

export const DetailHeaderContainer = styled.div`
  width: 100%;
  padding: 0 30px;
  border-bottom: 1px solid#d8d8d8;
`;

export const DetailHeader = styled.div``;

export const Image = styled.img`
  width: 100%;
  height: 400px;
  margin-top: 13px;
`;
export const ProductInfo1 = styled.div`
  margin-top: 30px;
`;

export const Brand = styled.p`
  margin-bottom: 5px;
  font: ${theme.font.body2};
`;

export const ProductName = styled.p`
  margin-bottom: 10px;
  font: ${theme.font.body1};
`;

export const ProductInfo2 = styled.span`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`;

export const Rating = styled.span`
  display: flex;
  align-items: center;
`;

export const Reviewer = styled.p`
  color: 1D1F22;
  font: ${theme.font.body2};
`;

export const Price = styled.p`
  font: ${theme.font.body1};
`;
