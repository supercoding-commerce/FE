import React from 'react';

import * as S from './FilterModal.styles';

type FilterOption = '필터옵션' | '나이' | '성별';

interface FilterModalProps {
  isOpen: boolean;
  options: string[];
  onClose: () => void;
  onSelectOption: (option: FilterOption) => void;
}

const FilterModal: React.FC<FilterModalProps> = ({ isOpen, onClose, options, onSelectOption }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <S.ModalWrapper>
      {isOpen && <S.ModalBackground onClick={onClose} isOpen={isOpen}></S.ModalBackground>}
      <S.ModalContainer>
        {options.map((option, index) => (
          <S.ModalFilterBtn key={index} onClick={() => onSelectOption(option as FilterOption)}>
            {option}
          </S.ModalFilterBtn>
        ))}
        <S.ModalCloseBtn onClick={onClose}>닫기</S.ModalCloseBtn>
      </S.ModalContainer>
    </S.ModalWrapper>
  );
};

export default FilterModal;
