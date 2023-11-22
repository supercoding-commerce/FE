import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useInfiniteQuery } from '@tanstack/react-query';

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
      ['categoryProducts', category, age, gender, filter, searchWord],
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

// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { useInView } from 'react-intersection-observer';

// import * as S from '@/components/MainPage/ListItemComponent/AllProductList.styles';
// import ListItem from '@/components/MainPage/ListItemComponent/ListItem';

// interface Product {
//   productId: number;
//   imageUrl: string;
//   name: string;
//   price: number;
//   shopName: string;
//   ageCategory: string;
//   genderCategory: string;
// }

// interface CategoryListProps {
//   category: string | null;
//   age: string | null;
//   gender: string | null;
// }

// const CategoryList: React.FC<CategoryListProps> = ({ category, age, gender }) => {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [page, setPage] = useState<number>(1);
//   const [ref, inView] = useInView();

//   const productFetch = async () => {
//     try {
//       let url = `https://pet-commerce.shop/v1/api/product/category/${category}?pageNumber=${page}`;

//       if (age !== null && age !== undefined) {
//         url += `&ageCategory=${age}`;
//       }

//       if (gender !== null && gender !== undefined) {
//         url += `&genderCategory=${gender}`;
//       }

//       const response = await axios.get(url);
//       console.log('RESPONSE', response.data);
//       setProducts((prevProducts) => [...prevProducts, ...response.data]);
//       setPage((prevPage) => prevPage + 1);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   useEffect(() => {
//     if (age === '나이' && gender === '성별') return;

//     setPage(1);
//     setProducts([]);
//     productFetch();

//     console.log(page);
//   }, [age, gender]);

//   useEffect(() => {
//     if (inView) {
//       console.log(inView, '무한 스크롤 요청 🎃', page);
//       productFetch();
//     }
//   }, [inView]);

//   return (
//     <S.ListContainer>
//       {products.map((product, index) => (
//         <ListItem
//           key={index}
//           productId={product.productId}
//           imageUrl={product.imageUrl}
//           name={product.name}
//           price={product.price}
//           shopName={product.shopName}
//         />
//       ))}
//       <div ref={ref}></div> {/* 여기에 닿으면 스크롤 */}
//     </S.ListContainer>
//   );
// };

// export default CategoryList;

// import axios from 'axios';
// import React, { useEffect, useRef, useState } from 'react';
// import { useInView } from 'react-intersection-observer';

// import * as S from '@/components/MainPage/ListItemComponent/AllProductList.styles';
// import ListItem from '@/components/MainPage/ListItemComponent/ListItem';

// interface Product {
//   productId: number;
//   imageUrl: string;
//   name: string;
//   price: number;
//   shopName: string;
//   ageCategory: string;
//   genderCategory: string;
// }

// interface CategoryListProps {
//   category: string | null;
//   age: string | null;
//   gender: string | null;
// }

// const CategoryList: React.FC<CategoryListProps> = ({ category, age, gender }) => {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [ref, inView] = useInView();
//   const pageRef = useRef(1);
//   // console.log('page', page);

//   const productFetch = async () => {
//     // console.log('productFetch call');
//     try {
//       let url = `https://pet-commerce.shop/v1/api/product/category/${category}?pageNumber=${pageRef.current}`;

//       if (age !== null && age !== undefined) {
//         url += `&ageCategory=${age}`;
//       }

//       if (gender !== null && gender !== undefined) {
//         url += `&genderCategory=${gender}`;
//       }

//       const response = await axios.get(url);
//       console.log('RESPONSE', response.data);
//       setProducts((prevProducts) => [
//         ...(pageRef.current === 1 ? [] : prevProducts),
//         ...response.data,
//       ]);
//       pageRef.current = pageRef.current + 1;
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   useEffect(() => {
//     if (age === '나이' && gender === '성별') return;

//     pageRef.current = 1;
//     productFetch();
//   }, [age, gender]);

//   useEffect(() => {
//     if (inView) {
//       console.log(inView, '무한 스크롤 요청 🎃', pageRef);
//       productFetch();
//     }
//   }, [inView]);

//   console.log('pageRef.current', pageRef.current);

//   return (
//     <S.ListContainer>
//       {products.map((product, index) => (
//         <ListItem
//           key={index}
//           productId={product.productId}
//           imageUrl={product.imageUrl}
//           name={product.name}
//           price={product.price}
//           shopName={product.shopName}
//         />
//       ))}
//       <div ref={ref}></div> {/* 여기에 닿으면 스크롤 */}
//     </S.ListContainer>
//   );
// };

// export default CategoryList;
