import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { getCategoryProducts } from '@/apis/categoryProduct';
import Button from '@/components/common/Button/Button';
import CategoryHeader from '@/components/common/Header/CategoryHeader';
import DefaultHeader from '@/components/common/Header/DefaultHeader';
import FilterModal from '@/components/FilterModal/FilterModal';
import InfiniteScrollList from '@/components/InfiniteScrollList/ScrollProductList';
import * as S from '../ProductPage/ProductPage.styles';

type FilterOption = '필터옵션' | '나이' | '성별';

const ProductPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const subcategory = searchParams.get('subcategory');
  const searchWord = searchParams.get('searchWord');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<FilterOption>();
  const [filter, setFilter] = useState<string>('필터옵션');
  const [age, setAge] = useState<string>('나이');
  const [gender, setGender] = useState<string>('성별');

  const fetchData = ({ pageParam = 1 }) =>
    getCategoryProducts(subcategory, pageParam, age, gender, filter, searchWord);

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
        setAge(option as FilterOption);
        break;
      case '성별':
        setGender(option as FilterOption);
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
            {age}
          </Button>
          <Button
            variant="contained"
            size="small"
            backgroundColor="white"
            color="black"
            icon="IconArrowDown"
            onClick={() => handleFilterButtonClick('성별')}
          >
            {gender}
          </Button>
        </S.FilterContainer>
        <InfiniteScrollList
          queryKey={['categoryProducts', subcategory, age, gender, filter, searchWord]}
          fetchData={fetchData}
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
