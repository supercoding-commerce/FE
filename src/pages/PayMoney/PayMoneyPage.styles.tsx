import styled from '@emotion/styled';

import { theme } from '@/styles/theme';

export const PayMoneyContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const PayMoney = styled.div`
  width: 365px;
  height: auto;
  background-color: white;
  margin-top: 45px;
  border-radius: 13px;
  display: flex;
  flex-direction: column;
  padding: 25px;
`;

export const PayMoneyInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 19px;
`;

export const PayMoneyUser = styled.div`
  margin-left: 12px;
  font: ${theme.font.body0};
`;

export const Money = styled.p`
  font: ${theme.font.body1};
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const MoneyInputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const ErrorMessage = styled.div`
  width: 100%;
  color: #fe4977;
  font: ${theme.font.body3};
  justify-content: flex-start;
`;

export const ChargeBtn = styled.div`
  width: 100%;
  margin-top: 10px;
  margin-bottom: 13px;
`;
