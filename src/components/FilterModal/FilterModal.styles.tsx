import styled from '@emotion/styled';

export const ModalBackground = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* 어두운 배경의 색상과 투명도 설정 */
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')}; /* 모달이 열렸을 때만 표시 */
  justify-content: center; /* 가운데 정렬 */
  align-items: center; /* 가운데 정렬 */
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
  bottom: 0;
  justify-content: center;
  z-index: 1;
`;

export const ModalWrapper = styled.div``;

export const ModalFilterBtn = styled.button`
  width: 100%;
  background-color: white;
  text-align: start;
  border: 0;
  padding: 15px 30px;
`;

export const ModalCloseBtn = styled.button`
  width: 100%;
  background-color: black;
  border: 0;
  color: white;
  padding: 15px 30px;
`;
