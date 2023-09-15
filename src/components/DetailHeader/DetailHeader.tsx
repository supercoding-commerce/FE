import { useState } from 'react';

import { Rating } from '@/components/common/Rating/Rating';
import ProductOption from '@/components/DetailHeader/ProductOption';
import * as S from './DetailHeader.styles';

export type DetailProduct = {
  productId: number;
  thumbnailUrl: string;
  shopName: string;
  name: string;
  leftAmount: number;
  quantity: number;
  star: number;
  reviewer: number;
  price: number;
  optionList: {
    orderId: number;
    orderOption: string;
  }[];
  options: string;
};

const DetailHeader = () => {
  const [product, setProduct] = useState<DetailProduct[]>([
    {
      productId: 386,
      thumbnailUrl:
        'https://cdn.eqlstore.com/goods/EQBR/23/09/08/GQ7O23090836756_0_ORGINL_1694158616650.jpg?RS=1300',
      shopName: 'KUME',
      name: 'V-neck Zip-up Mohair Wool Cardigan',
      leftAmount: 76,
      quantity: 1,
      star: 4,
      reviewer: 5,
      price: 249000,
      optionList: [
        { orderId: 1, orderOption: 'Beige(S)' },
        { orderId: 2, orderOption: 'Beige(M)' },
        { orderId: 3, orderOption: 'Oatmeal(S)' },
        { orderId: 4, orderOption: 'Oatmeal(M)' },
        { orderId: 5, orderOption: 'Charcoal(S)' },
        { orderId: 6, orderOption: 'Charcoal(M)' },
      ],
      options: '',
    },
  ]);

  const optionPlusHandler = (index: number, newOption: string) => {
    setProduct(product.map((p, idx) => (idx === index ? { ...p, option: newOption } : p)));
  };

  const quantityChangeHandler = (index: number, newQuantity: number) => {
    setProduct(product.map((p, idx) => (idx === index ? { ...p, quantity: newQuantity } : p)));
  };

  return (
    <S.DetailHeaderContainer>
      {product.map((p, idx: number) => (
        <S.DetailHeader key={idx}>
          <S.Image src={p.thumbnailUrl} />
          <S.ProductInfo1>
            <S.Brand>{p.shopName}</S.Brand>
            <S.ProductName>{p.name}</S.ProductName>
          </S.ProductInfo1>
          <S.ProductInfo2>
            <S.Rating>
              <Rating readOnly count={p.star} />
              <p>({p.reviewer})</p>
            </S.Rating>
            <S.Price>{p.price.toLocaleString()}원</S.Price>
          </S.ProductInfo2>
          <ProductOption
            product={product}
            onOptionChange={optionPlusHandler}
            onQuantityChange={quantityChangeHandler}
          />
        </S.DetailHeader>
      ))}
    </S.DetailHeaderContainer>
  );
};

export default DetailHeader;
