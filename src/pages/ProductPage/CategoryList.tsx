import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useInfiniteQuery } from 'react-query';

import { getCategoryProducts } from '@/apis/categoryProduct';
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
  const [ref, inView] = useInView();

  const { data, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage, status } =
    useInfiniteQuery(
      ['categoryProducts'],
      async ({ pageParam = 1 }) =>
        getCategoryProducts(category, pageParam, age, gender, filter, searchWord),
      {
        getNextPageParam: (lastPage, pages) => {
          if (lastPage.length === 0) {
            return undefined;
          }
          return pages.length + 1;
        },
      },
    );

  useEffect(() => {
    // 불필요 통신 막기 위함
    if (filter === '필터옵션' && age === '나이' && gender === '성별') return;

    fetchNextPage();
  }, [filter, age, gender, fetchNextPage]);

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);

  return (
    <S.ListContainer>
      {data?.pages.map((page) =>
        page.map((product: Product, index: number) => (
          <ListItem
            key={index}
            productId={product.productId}
            imageUrl={product.imageUrl}
            name={product.name}
            price={product.price}
            shopName={product.shopName}
          />
        )),
      )}
      {isFetching ? (
        <p>🔎 로딩 중...</p>
      ) : status === 'error' ? (
        <p>😥 데이터를 불러오는데 실패했습니다</p>
      ) : null}
      {hasNextPage && !isFetchingNextPage && <div ref={ref}></div>}
    </S.ListContainer>
  );
};

export default CategoryList;
