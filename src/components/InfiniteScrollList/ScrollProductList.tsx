import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useInfiniteQuery } from 'react-query';
import { QueryKey } from '@tanstack/react-query';

import * as S from '@/components/MainPage/ListItemComponent/AllProductList.styles';
import ListItem from '@/components/MainPage/ListItemComponent/ListItem';

interface Product {
  productId: number;
  imageUrl: string;
  name: string;
  price: number;
  shopName: string;
}

interface InfiniteScrollListProps {
  queryKey: QueryKey;
  fetchData: (params: { pageParam?: number }) => Promise<Product[]>;
}

const InfiniteScrollList: React.FC<InfiniteScrollListProps> = ({ queryKey, fetchData }) => {
  const [ref, inView] = useInView();
  const { data, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage, status } =
    useInfiniteQuery(queryKey, fetchData, {
      getNextPageParam: (lastPage, pages) => {
        if (lastPage.length === 0) {
          return undefined;
        }
        return pages.length + 1;
      },
    });

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);

  return (
    <S.ListContainer>
      {data?.pages.map((page) =>
        page.map((product: Product) => (
          <ListItem
            key={product.productId}
            productId={product.productId}
            imageUrl={product.imageUrl}
            name={product.name}
            price={product.price}
            shopName={product.shopName}
          />
        )),
      )}
      {isFetching ? (
        <p>🔎 Loading...</p>
      ) : status === 'error' ? (
        <p>😥 데이터를 불러오는데 실패했습니다</p>
      ) : null}
      {hasNextPage && !isFetchingNextPage && <div ref={ref}></div>}
    </S.ListContainer>
  );
};

export default InfiniteScrollList;
