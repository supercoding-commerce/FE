import styled from '@emotion/styled';

import { theme } from '@/styles/theme';
export const ModalBackground = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

export const ModalContainer = styled.div`
  width: 420px;
  background-color: white;
  padding-top: 20px;
  border-radius: 20px 20px 0px 0px;
  display: flex;
  flex-direction: column;
  position: fixed;
  left: 348px;
  bottom: 0;
  justify-content: center;
  z-index: 1;
`;

export const ModalWrapper = styled.div``;

export const ModalFilterBtn = styled.button`
  ${theme.font.body2Bold}
  width: 100%;
  background-color: white;
  text-align: start;
  border: 0;
  padding: 15px 30px;
`;

export const ModalCloseBtn = styled.button`
  width: 100%;
  ${theme.font.body2Bold}
  background-color: black;
  border: 0;
  color: ${theme.color.brand};
  padding: 15px 30px;
`;
