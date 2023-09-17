import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import Button from '@/components/common/Button/Button';
import CategoryHeader from '@/components/common/Header/CategoryHeader';
import DefaultHeader from '@/components/common/Header/DefaultHeader';
import FilterModal from '@/components/FilterModal/FilterModal';
import CategoryList from '@/pages/ProductPage/CategoryList';
import * as S from '../ProductPage/ProductPage.styles';

type FilterOption = '신상품' | '나이' | '성별';

const ProductPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<FilterOption>();
  const [searchParams] = useSearchParams();
  const subcategory = searchParams.get('subcategory');
  const [filterButtonText, setFilterButtonText] = useState<string>('신상품');
  const [ageButtonText, setAgeButtonText] = useState<string>('나이');
  const [genderButtonText, setGenderButtonText] = useState<string>('성별');

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleOptionSelect = (option: FilterOption) => {
    closeModal();

    switch (selectedOption) {
      case '신상품':
        setFilterButtonText(option as FilterOption);
        break;
      case '나이':
        setAgeButtonText(option as FilterOption);
        break;
      case '성별':
        setGenderButtonText(option as FilterOption);
        break;
      default:
        break;
    }
  };

  const handleFilterButtonClick = (filterType: FilterOption) => {
    switch (filterType) {
      case '신상품':
      case '나이':
      case '성별':
        setSelectedOption(filterType);
        openModal();
        break;
      default:
        closeModal();
    }
  };

  return (
    <>
      <DefaultHeader
        text={searchParams.get('subcategory') || 'ProductPage'}
        backgroundColor="white"
        color="black"
      />
      <CategoryHeader />
      <S.ProductPageWrapper>
        <S.FilterContainer>
          <Button
            variant="contained"
            size="small"
            backgroundColor="white"
            color="black"
            icon="IconArrowDown"
            onClick={() => handleFilterButtonClick('신상품')}
          >
            {filterButtonText}
          </Button>
          <Button
            variant="contained"
            size="small"
            backgroundColor="white"
            color="black"
            icon="IconArrowDown"
            onClick={() => handleFilterButtonClick('나이')}
          >
            {ageButtonText}
          </Button>
          <Button
            variant="contained"
            size="small"
            backgroundColor="white"
            color="black"
            icon="IconArrowDown"
            onClick={() => handleFilterButtonClick('성별')}
          >
            {genderButtonText}
          </Button>
        </S.FilterContainer>
        <CategoryList category={subcategory} />

        <FilterModal
          isOpen={isModalOpen}
          options={
            selectedOption
              ? selectedOption === '신상품'
                ? ['신상품', '리뷰순', '저가순', '고가순']
                : selectedOption === '나이'
                ? ['10대', '20대', '30대']
                : ['남성', '여성']
              : []
          }
          onClose={closeModal}
          onSelectOption={handleOptionSelect}
        />
      </S.ProductPageWrapper>
    </>
  );
};

export default ProductPage;
