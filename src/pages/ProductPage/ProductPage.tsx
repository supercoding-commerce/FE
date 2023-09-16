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
  const [filter, setFilter] = useState<string>('신상품');
  const [ageCategory, setAgeCategory] = useState<string>('나이');
  const [genderCategory, setGenderCategory] = useState<string>('성별');

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
        setFilter(option as FilterOption);
        break;
      case '나이':
        setAgeCategory(option as FilterOption);
        break;
      case '성별':
        setGenderCategory(option as FilterOption);
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
            {filter}
          </Button>
          <Button
            variant="contained"
            size="small"
            backgroundColor="white"
            color="black"
            icon="IconArrowDown"
            onClick={() => handleFilterButtonClick('나이')}
          >
            {ageCategory}
          </Button>
          <Button
            variant="contained"
            size="small"
            backgroundColor="white"
            color="black"
            icon="IconArrowDown"
            onClick={() => handleFilterButtonClick('성별')}
          >
            {genderCategory}
          </Button>
        </S.FilterContainer>
        <CategoryList category={subcategory} age={ageCategory} gender={genderCategory} />

        <FilterModal
          isOpen={isModalOpen}
          options={
            selectedOption
              ? selectedOption === '신상품'
                ? ['신상품', '리뷰순', '저가순', '고가순']
                : selectedOption === '나이'
                ? ['10', '20', '30']
                : ['MALE', 'FEMALE']
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
