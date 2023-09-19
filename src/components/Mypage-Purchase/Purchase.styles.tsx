import styled from '@emotion/styled';

import { theme } from '@/styles/theme';

export const PurchaseContainer = styled.div`
  max-width: 420px;
  border-bottom: 4px solid#d8d8d8;
`;

export const PurchaseDay = styled.div`
  width: 100%;
  height: 35px;
  display: flex;
  align-items: center;
  padding: 0 30px;
  font: ${theme.font.body1Bold};
  border-bottom: 1px solid#d8d8d8;
`;

export const PurchaseInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 135px;
`;

export const JustContainer = styled.div`
  padding: 0 30px;
  display: flex;
  align-items: center;
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

export const PurchaseImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 10px;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 10px;
`;
export const ProductName = styled.div`
  font: ${theme.font.body1};
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
export const Quantity = styled.div`
  font: ${theme.font.body2};
  color: #818181;
`;

// export const = styled.div``
