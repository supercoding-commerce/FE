import styled from '@emotion/styled';

import { theme } from '@/styles/theme';

export const CartPageContainer = styled.div`
  width: 420px;
  height: 100%;
  background-color: ${theme.color.backgroundColor};
`;

export const AllDelete = styled.div`
  width: 100%;
  padding: 12px 0 12px 0;
  border-bottom: 1px solid #d8d8d8;
  justify-content: flex-end;
  align-items: center;
  p {
    width: 70px;
    margin-left: auto;
    color: ${theme.color.black};
    font: ${theme.font.body1};
    cursor: pointer;
  }
`;

export const PriceWrapper = styled.div`
  width: 100%;
  height: 180px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #d8d8d8;
  padding: 0 30px 0 30px;
  margin-bottom: 300px;
`;

export const AllPrice = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 7px 0;
  font: ${theme.font.body1};
`;
export const DeliveryPrice = styled(AllPrice)``;
export const Coupon = styled(AllPrice)``;

export const GoToPay = styled.div`
  background-color: ${theme.color.backgroundColor};
  position: fixed;
  bottom: 0;
  width: 420px;
  height: 110px;
  padding: 0 12px 0 12px;
`;

export const FinalPrice = styled.span`
  display: flex;
  justify-content: space-between;
  margin: 12px 0;
  font: ${theme.font.body0};
`;

export const FinalPriceTitle = styled.div``;
export const FinalPriceValue = styled.div``;
