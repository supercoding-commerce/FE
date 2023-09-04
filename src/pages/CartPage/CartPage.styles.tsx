import styled from '@emotion/styled';

import { theme } from '@/styles/theme';

export const CartPageContainer = styled.div`
  width: 100%;
  background-color: ${theme.color.backgroundColor};
  padding: 0 30px 0 30px;
`;

// export const CartWrapper = styled.div``;

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
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 30px 0 30px;
  border-bottom: 1px solid #d8d8d8;
`;

export const AllPrice = styled.span`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  font: ${theme.font.body1};
`;
export const AllPriceTitle = styled.div``;
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
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 110px;
  padding: 0 30px 0 30px;
`;

export const FinalPrice = styled.span`
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
  font: ${theme.font.body0};
`;

export const FinalPriceTitle = styled.div``;

export const FinalPriceValue = styled.div``;
