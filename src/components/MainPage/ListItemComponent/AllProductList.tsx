import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

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
  const [products, setProducts] = useState<Product[]>([]);
  const [page, setPage] = useState<number>(1);
  const [ref, inView] = useInView();

  const productFetch = async () => {
    await axios
      .get(`https://pet-commerce.shop/v1/api/product?pageNumber=${page}`)
      .then((res) => {
        console.log(res.data);
        setProducts((prevProducts) => [...prevProducts, ...res.data]);
        setPage((prevPage) => prevPage + 1);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (inView) {
      console.log(inView, '무한 스크롤 요청 🎃');
      productFetch();
    }
  }, [inView]);

  return (
    <S.ListContainer>
      {products.map((product, index) => (
        <ListItem
          key={index}
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

export default AllProductList;
