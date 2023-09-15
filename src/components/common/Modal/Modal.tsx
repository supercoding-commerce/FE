import { Dispatch, ReactNode } from 'react';

import Icon from '@/components/common/Icon';
import { ModalContainer, ModalXBtnBox } from '@/components/common/Modal/Modal.styles';

interface ModalProps {
  children: ReactNode;
  setModalOpen: Dispatch<React.SetStateAction<boolean>>;
}

const Modal = ({ children, setModalOpen }: ModalProps) => {
  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <ModalContainer>
      <ModalXBtnBox>
        <Icon name="IconX" size={30} onClick={handleCloseModal} color="white" />
      </ModalXBtnBox>
      {children}
    </ModalContainer>
  );
};
export default Modal;
