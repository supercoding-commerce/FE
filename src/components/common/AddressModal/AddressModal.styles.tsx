import styled from '@emotion/styled';

export const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(32, 32, 32, 0.6);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  box-sizing: border-box;
  padding: 0 10px;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 100;
`;

export const ModalXBtnBox = styled.button`
  width: 100%;
  background-color: transparent;
  border: none;
  display: flex;
  justify-content: end;
`;
