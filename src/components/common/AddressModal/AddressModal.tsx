import { Dispatch, ReactNode } from 'react';

import { ModalContainer, ModalXBtnBox } from '@/components/common/AddressModal/AddressModal.styles';
import Icon from '@/components/common/Icon';

interface ModalProps {
  children: ReactNode;
  setModalOpen: Dispatch<React.SetStateAction<boolean>>;
}

const AddressModal = ({ children, setModalOpen }: ModalProps) => {
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
export default AddressModal;
