import React from 'react';
import { useSearchParams } from 'react-router-dom';

import Button from '@/components/common/Button/Button';
import CategoryHeader from '@/components/common/Header/CategoryHeader';
import DefaultHeader from '@/components/common/Header/DefaultHeader';
import CategoryList from '@/pages/ProductPage/CategoryList';
import * as S from '../ProductPage/ProductPage.styles';

const ProductPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get('subcategory');
  console.log(searchParams);
  console.log(searchParams.get('category'));

  return (
    <>
      <DefaultHeader
        text={searchParams.get('subcategory') || 'ProductPage'}
        backgroundColor="white"
        color="black"
      />
      <CategoryHeader />
      <S.FilterContainer>
        <Button
          variant="contained"
          size="small"
          backgroundColor="white"
          color="black"
          icon="IconArrowDown"
        >
          저가순
        </Button>

        <Button
          variant="contained"
          size="small"
          backgroundColor="white"
          color="black"
          icon="IconArrowDown"
        >
          성별
        </Button>

        <Button
          variant="contained"
          size="small"
          backgroundColor="white"
          color="black"
          icon="IconArrowDown"
        >
          나이
        </Button>
      </S.FilterContainer>
      <CategoryList category={category} />
    </>
  );
};

export default ProductPage;
