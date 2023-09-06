import * as S from '../ListItemComponent/AllProductList.styles';

// import React, { useEffect } from 'react';
// import { useRecoilState } from 'recoil';

// import { productListState } from './recoilState';

const AllProductList: React.FC = () => {
  //  *백엔드와 통신 할때 로직*

  //   const [productList, setProductList] = useRecoilState(productListState);
  //   interface Product {
  //     id: number;
  //     imageUrl: string;
  //     productName: string;
  //     productDescription: string;
  //     price: number;
  //   }
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get<Product[]>('백엔드 API');
  //       const data = response.data;
  //       setProductList(data);
  //     } catch (error) {
  //       console.error('데이터를 불러오는 동안 오류 발생:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <S.ListContainer>
      <S.ProductContainer>
        <S.ListItem>{/*이미지들어갈곳*/}</S.ListItem>
        <S.Description>
          <S.Price>39,990원</S.Price>
          <S.Name>멜팅블루</S.Name>
          <S.DetailDescription>Tension나일론 밴딩...</S.DetailDescription>
        </S.Description>
      </S.ProductContainer>
      <S.ProductContainer>
        <S.ListItem>{/*이미지들어갈곳*/}</S.ListItem>
        <S.Description>
          <S.Price>39,990원</S.Price>
          <S.Name>멜팅블루</S.Name>
          <S.DetailDescription>Tension나일론 밴딩...</S.DetailDescription>
        </S.Description>
      </S.ProductContainer>
      <S.ProductContainer>
        <S.ListItem>{/*이미지들어갈곳*/}</S.ListItem>
        <S.Description>
          <S.Price>39,990원</S.Price>
          <S.Name>멜팅블루</S.Name>
          <S.DetailDescription>Tension나일론 밴딩...</S.DetailDescription>
        </S.Description>
      </S.ProductContainer>{' '}
      <S.ProductContainer>
        <S.ListItem>{/*이미지들어갈곳*/}</S.ListItem>
        <S.Description>
          <S.Price>39,990원</S.Price>
          <S.Name>멜팅블루</S.Name>
          <S.DetailDescription>Tension나일론 밴딩...</S.DetailDescription>
        </S.Description>
      </S.ProductContainer>
      {/* 백엔드 통신 시 변경 할 로직
        {productList.map((product) => (
          <li key={product.id}>
            <img src={product.imageUrl} alt={product.productName} />
            <div>
              <h3>{product.productName}</h3>
              <p>{product.productDescription}</p>
              <p>가격: {product.price} 원</p>
            </div>
          </li>
        ))} */}
    </S.ListContainer>
  );
};

export default AllProductList;
