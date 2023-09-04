import styled from '@emotion/styled';

// import { theme } from '@/styles/theme';

export const CartItemContainer = styled.div`
  width: 100%;
`;
export const CartItem = styled.div`
  width: 100%;
  height: 280px;
  padding: 0 30px 0 30px;
  border-bottom: 1px solid#d8d8d8;
`;
export const CartItemHeader = styled.span`
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
`;
export const ItemBrand = styled.div``;

export const Image = styled.img`
  width: 135px;
  height: 135px;
  margin-right: 20px;
`;

export const CartItemBodyContainer = styled.span`
  display: flex;
  justify-content: space-between;
`;

export const CartItemBody = styled.span`
  display: flex;
`;

export const CartItemInfo = styled.div`
  flex-direction: column;
  display: flex;
  justify-content: space-between;
`;

export const ItemName = styled.div``;

export const ItemInfo = styled.div``;

export const ItemSaleContainer = styled.span`
  display: flex;
  margin-bottom: 5px;
`;

export const ItemSalePercent = styled.div`
  margin-right: 5px;
`;

export const ItemSalePrice = styled.div``;

export const ItemOption = styled.div``;

export const CounterContainer = styled.div`
  flex-direction: column;
  display: flex;
  justify-content: end;
  padding-right: 15px;
`;
