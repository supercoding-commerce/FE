import styled from '@emotion/styled';

import { theme } from '@/styles/theme';

export const SoldHistoryContainer = styled.div`
  max-width: 420px;
  height: calc(100vh - 60px);
  background-color: ${theme.color.backgroundColor};
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const SoldDay = styled.div`
  width: 100%;
  height: 35px;
  display: flex;
  align-items: center;
  padding: 0 30px;
  font: ${theme.font.body1Bold};
  background-color: #d8d8d8;
  border-bottom: 1px solid#d8d8d8;
`;

export const SoldInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 135px;
`;

export const ProductInfoContainer = styled.div`
  padding: 0 30px;
  height: 95px;
  display: flex;
  align-items: center;
  padding-bottom: 10px;
  border-bottom: 1px solid#d8d8d8;
`;

export const Delivery = styled.div`
  color: ${theme.color.green};
  font: ${theme.font.body1};
  width: 100%;
  height: 40px;
  padding-left: 30px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
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

export const Price = styled.div`
  font: ${theme.font.body2};
  margin-right: 5px;
`;

export const Option = styled.div`
  font: ${theme.font.body2};
  color: #818181;
  margin-right: 5px;
`;

export const Quantity = styled.div`
  font: ${theme.font.body2};
  color: #818181;
`;
