import { useState } from 'react';

import { Rating } from '@/components/common/Rating/Rating';
import * as S from './DetailHeader.styles';

type DetailProduct = {
  mainImage: string;
  brand: string;
  productName: string;
  star: number;
  reviewer: number;
  price: number;
  option: string;
};

const DetailHeader = () => {
  const [product] = useState<DetailProduct[]>([
    {
      mainImage:
        'https://cdn.eqlstore.com/goods/EQBR/23/09/08/GQ7O23090836756_0_ORGINL_1694158616650.jpg?RS=1300',
      brand: 'KUME',
      productName: 'V-neck Zip-up Mohair Wool Cardigan',
      star: 4,
      reviewer: 5,
      price: 249000,
      option: '',
    },
  ]);
  return (
    <S.DetailHeaderContainer>
      {product.map((p, idx: number) => (
        <S.DetailHeader key={idx}>
          <S.Image src={p.mainImage} />
          <S.ProductInfo1>
            <S.Brand>{p.brand}</S.Brand>
            <S.ProductName>{p.productName}</S.ProductName>
          </S.ProductInfo1>
          <S.ProductInfo2>
            <S.Rating>
              <Rating readOnly count={p.star} />
              <S.Reviewer>({p.reviewer})</S.Reviewer>
            </S.Rating>
            <S.Price>{p.price.toLocaleString()}원</S.Price>
          </S.ProductInfo2>
        </S.DetailHeader>
      ))}
    </S.DetailHeaderContainer>
  );
};

export default DetailHeader;

// 사진, 제품명, 별점, 가격 map으로
// textfiled option ,children selectbox
