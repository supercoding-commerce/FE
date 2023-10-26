import styled from '@emotion/styled';

import { theme } from '@/styles/theme';

export const CartModalContainer = styled.div`
  position: fixed;
  transform: translate(-50%, -50%);
  bottom: 8%;
  left: 50%;
  width: 380px;
  height: 35px;
`;
export const CartModal = styled.div`
  background-color: black;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 5px;
  p {
    font: ${theme.font.body2};
    padding: 10px;
  }
`;

export const GoToCart = styled.div`
  cursor: pointer;
  color: ${theme.color.green};
  font: ${theme.font.body2Bold};
  padding: 10px;
`;
