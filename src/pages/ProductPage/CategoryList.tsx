import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import { fetchCategoryProducts } from '@/apis/categoryProduct';
import * as S from '@/components/MainPage/ListItemComponent/AllProductList.styles';
import ListItem from '@/components/MainPage/ListItemComponent/ListItem';

interface Product {
  productId: number;
  imageUrl: string;
  name: string;
  price: number;
  shopName: string;
  filter: string;
}

interface CategoryListProps {
  filter: string | null;
  category: string | null;
  age: string | null;
  gender: string | null;
  searchWord: string | null;
}

const CategoryList: React.FC<CategoryListProps> = ({
  filter,
  category,
  age,
  gender,
  searchWord,
}) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [ref, inView] = useInView();
  const pageRef = useRef(1);

  const productFetch = async () => {
    try {
      const response = await fetchCategoryProducts(
        category,
        pageRef.current,
        age,
        gender,
        filter,
        searchWord,
      );
      console.log('RESPONSE', response);
      setProducts((prevProducts) => [...(pageRef.current === 1 ? [] : prevProducts), ...response]);
      pageRef.current = pageRef.current + 1;
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    // 불필요 통신 막기 위함
    if (filter === '필터옵션' && age === '나이' && gender === '성별') return;

    pageRef.current = 1;
    productFetch();
  }, [filter, age, gender]);

  useEffect(() => {
    if (inView) {
      productFetch();
    }
  }, [inView]);

  console.log('pageRef.current', pageRef.current);
  console.log('category', category);
  return (
    <S.ListContainer>
      {products.map((product, index) => (
        <ListItem
          key={index}
          productId={product.productId}
          imageUrl={product.imageUrl}
          name={product.name}
          price={product.price}
          shopName={product.shopName}
        />
      ))}
      <div ref={ref}></div> {/* 여기에 닿으면 스크롤 */}
    </S.ListContainer>
  );
};

export default CategoryList;
