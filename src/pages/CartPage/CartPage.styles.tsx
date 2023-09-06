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
  margin-bottom: 100px;
`;

export const AllPrice = styled.span`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  font: ${theme.font.body1};
`;
export const AllPriceTitle = styled.p``;
export const AllPriceValue = styled.div``;
export const DeliveryPrice = styled(AllPrice)``;
export const DeliveryPriceTitle = styled.div``;
export const DeliveryPriceValue = styled.div``;
export const Coupon = styled(AllPrice)``;
export const CouponTitle = styled.div`
  display: flex;
  align-items: center;
`;

export const GoToPay = styled.div`
  background-color: ${theme.color.backgroundColor};
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 420px;
  height: 110px;
`;

export const FinalPrice = styled.span`
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
  font: ${theme.font.body0};
  padding: 0 12px 0 12px;
`;

export const FinalPriceTitle = styled.div``;

export const FinalPriceValue = styled.div``;
