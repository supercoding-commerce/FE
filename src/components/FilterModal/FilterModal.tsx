import React from 'react';

import * as S from './FilterModal.styles';

type FilterOption = '신상품' | '나이' | '성별';

interface FilterModalProps {
  isOpen: boolean;
  onClose: () => void;
  options: string[];
  selectedOption: (option: string) => void;
}

const FilterModal: React.FC<FilterModalProps> = ({ isOpen, onClose, options, selectedOption }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <S.ModalWrapper>
      {isOpen && <S.ModalBackground onClick={onClose} isOpen={isOpen}></S.ModalBackground>}
      <S.ModalContainer>
        {options.map((option, index) => (
          <S.ModalFilterBtn key={index} onClick={() => selectedOption(option as FilterOption)}>
            {option}
          </S.ModalFilterBtn>
        ))}
        <S.ModalCloseBtn onClick={onClose}>닫기</S.ModalCloseBtn>
      </S.ModalContainer>
    </S.ModalWrapper>
  );
};

export default FilterModal;
