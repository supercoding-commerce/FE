import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import Button from '@/components/common/Button/Button';
import CategoryHeader from '@/components/common/Header/CategoryHeader';
import DefaultHeader from '@/components/common/Header/DefaultHeader';
import FilterModal from '@/components/FilterModal/FilterModal';
import CategoryList from '@/pages/ProductPage/CategoryList';
import * as S from '../ProductPage/ProductPage.styles';

type FilterOption = '필터옵션' | '나이' | '성별';

const ProductPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const subcategory = searchParams.get('subcategory');
  const searchWord = searchParams.get('searchWord');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<FilterOption>();
  const [filter, setFilter] = useState<string>('필터옵션');
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
      case '필터옵션':
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
      case '필터옵션':
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
        arrowColor="black"
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
            onClick={() => handleFilterButtonClick('필터옵션')}
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
        <CategoryList
          filter={filter}
          category={subcategory}
          age={ageCategory}
          gender={genderCategory}
          searchWord={searchWord}
        />

        <FilterModal
          isOpen={isModalOpen}
          options={
            selectedOption
              ? selectedOption === '필터옵션'
                ? ['신상품', '저가순']
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
