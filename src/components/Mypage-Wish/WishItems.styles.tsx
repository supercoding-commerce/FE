import styled from '@emotion/styled';

import { theme } from '@/styles/theme';

export const WishItemsContainer = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const WishItems = styled.div`
  width: 180px;
  height: auto;
  margin-top: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const WishImage = styled.img`
  width: 180px;
  height: 190px;
  margin-bottom: 3px;
  border: 1px solid black;
  cursor: pointer;
`;

export const BrandNameContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 22px;
`;

export const BrandName = styled.div`
  font: ${theme.font.body2Bold};
  display: flex;
  align-items: center;
  width: 100%;
  height: 22px;
  padding-left: 2px;
`;

export const ProductName = styled.div`
  font: ${theme.font.body2};
  width: 180px;
  height: 22px;
  display: flex;
  align-items: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-left: 2px;
`;

export const Price = styled(BrandName)`
  font: ${theme.font.body3};
  width: 100%;
  height: 22px;
  display: flex;
  align-items: center;
  padding-left: 2px;
`;
