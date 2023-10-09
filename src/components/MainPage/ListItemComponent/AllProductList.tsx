import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useInfiniteQuery } from 'react-query';

import { fetchProducts } from '@/apis/mainscroll';
import ListItem from '@/components/MainPage/ListItemComponent/ListItem';
import * as S from '../ListItemComponent/AllProductList.styles';

interface Product {
  productId: number;
  imageUrl: string;
  name: string;
  price: number;
  shopName: string;
}

const AllProductList: React.FC = () => {
  const [ref, inView] = useInView();
  const { data, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage, status } =
    useInfiniteQuery('products', async ({ pageParam = 1 }) => fetchProducts(pageParam), {
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
            productId={product.productId}
            key={product.productId}
            imageUrl={product.imageUrl}
            name={product.name}
            price={product.price}
            shopName={product.shopName}
          />
        )),
      )}
      {isFetching ? (
        <p>🔎Loading...</p>
      ) : status === 'error' ? (
        <p>😥데이터를 불러오는데 실패했습니다</p>
      ) : null}
      {hasNextPage && !isFetchingNextPage && <div ref={ref}></div>}
    </S.ListContainer>
  );
};

export default AllProductList;
