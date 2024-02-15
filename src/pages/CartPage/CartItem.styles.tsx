import styled from '@emotion/styled';

import { theme } from '@/styles/theme';

export const CartItemContainer = styled.div`
  width: 100%;
  padding: 0 30px 0 30px;
`;
export const CartItem = styled.div`
  width: 100%;
  height: auto;
`;
export const CartItemHeader = styled.span`
  display: flex;
  justify-content: space-between;
  margin: 15px 0;
`;
export const ItemBrand = styled.div`
  font: ${theme.font.body1};
  font-weight: bold;
`;
export const CartItemBodyContainer = styled.span`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`;

export const CartItemBody = styled.div`
  display: flex;
`;

export const Image = styled.img`
  width: 135px;
  height: 150px;
  margin-right: 15px;
  cursor: pointer;
`;

export const ItemInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ItemNameWrapper = styled.div``;

export const ItemName = styled.div`
  font: ${theme.font.body2};
`;

export const ItemOption = styled.div`
  font: ${theme.font.body3};
`;

export const PriceAndCount = styled.div`
  display: flex;
  align-items: center;
`;

export const ItemSaleContainer = styled.span`
  display: flex;
  flex-direction: column;
  margin-bottom: 5px;
`;

export const ItemOriginalPrice = styled.div`
  font: ${theme.font.body2};
  width: 80px;
`;

export const CounterContainer = styled.div`
  flex-direction: column;
  display: flex;
  margin-left: 35px;
`;

export const ItemOptionSelectContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;
export const ItemOptionSelect = styled.div`
  width: 365px;
  z-index: 1;
`;

export const ItemTotalPrice = styled.div`
  width: 100%;
  height: 40px;
  border-top: 1px solid#d8d8d8;
  border-bottom: 1px solid black;
  padding: 12px 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
export const ItemTotalPriceTitle = styled.div`
  font-weight: bold;
  font: ${theme.font.body1};
`;
export const ItemTotalPriceValue = styled.div`
  font: ${theme.font.body2};
  margin-right: 2px;
  width: 100px;
  display: flex;
  justify-content: flex-end;
`;
