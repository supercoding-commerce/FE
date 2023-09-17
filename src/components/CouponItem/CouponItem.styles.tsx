import styled from '@emotion/styled';

import { theme } from '@/styles/theme.ts';

export const CouponItemWrapper = styled.div`
  padding: 1rem;
  border: 2px solid ${theme.color.black};
  border-radius: 8px;
  cursor: pointer;

  &.active {
    border: 2px solid ${theme.color.pink};
    color: ${theme.color.pink};
  }

  &.disabled {
    color: ${theme.color.borderColor};
    border-color: ${theme.color.borderColor};
  }
`;

export const CouponContent = styled.p`
  ${theme.font.h2}
`;

export const CouponTitle = styled.p`
  ${theme.font.body1}
`;

export const CouponExpired = styled.p`
  ${theme.font.body3}
`;
