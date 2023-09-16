import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { theme } from '@/styles/theme.ts';

export const PaymentWrapper = styled.div`
  background-color: ${theme.color.backgroundColor};
  height: calc(100% - 60px - 45px);
  overflow-y: auto;
`;

export const SectionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 28px;
`;

// Address
export const AddressSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  border: 1px solid ${theme.color.black};
  border-radius: 8px;
  background-color: #fff;
`;
export const AddressWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const AddressTitle = styled.p`
  ${theme.font.body0}
`;
export const Address = styled.p`
  ${theme.font.body3}
  color: #666666;
`;

// 보유 금액
export const PayMoneySection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  border: 1px solid ${theme.color.black};
  background-color: #fff;
`;
export const MoneyWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.span`
  font-family: SUITE;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

// 최종 결제 금액
export const TotalPaySection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px;
  border: 1px solid ${theme.color.black};
  background-color: #fff;
`;
export const TotalPayItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  ${theme.font.body2}
`;

export const TotalPayItemOptionWrapper = styled.div`
  display: flex;
  gap: 12px;
`;
export const Hr = styled.hr`
  border: 1px solid ${theme.color.black};
  width: 100%;
`;
export const TotalPayWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: SUITE;
  font-size: 15px;
  font-weight: 800;
`;

// 주문 목록
export const OrderSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const OrderList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const OrderItem = styled.li`
  display: flex;
  padding: 8px;
  align-items: flex-start;
  gap: 16px;

  border: 1px solid #000;
  background: #fff;

  img {
    width: 80px;
    height: 80px;
    border-radius: 8px;
    background: #d9d9d9;
  }
`;

export const OrderItemInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  .name {
    ${theme.font.body0}
  }
  .option {
    ${theme.font.body2}
  }
  .info {
    ${theme.font.body2}
  }
`;

// 결제 버튼
export const ButtonWrapper = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;
`;

export const Button = styled.button<{ color?: string }>`
  display: inline-flex;
  padding: 4px 15px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background: #fff;
  width: 50px;
  white-space: nowrap;
  font-size: 10px;
  font-weight: 400;
  border-radius: 3px;
  cursor: pointer;

  &.active {
    border-color: ${theme.color.borderColor};
    color: ${theme.color.borderColor};
  }

  ${({ color = theme.color.pink }) => css`
    border: 1px solid ${color};
    color: ${color};
  `}
`;

export const TextHighlight = styled.span`
  font-family: SUITE;
  font-size: 18px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  color: ${theme.color.pink};
`;
