import { useState } from 'react';

import { Rating } from '@/components/common/Rating/Rating';
import ProductOption from '@/components/DetailHeader/ProductOption';
import * as S from './DetailHeader.styles';

type DetailProduct = {
  productId: number;
  mainImage: string;
  shopName: string;
  name: string;
  leftAmount: number;
  quantity: number;
  star: number;
  reviewer: number;
  price: number;
  optionList: string[];
  option: string;
};

const DetailHeader = () => {
  const [product, setProduct] = useState<DetailProduct[]>([
    {
      productId: 386,
      mainImage:
        'https://cdn.eqlstore.com/goods/EQBR/23/09/08/GQ7O23090836756_0_ORGINL_1694158616650.jpg?RS=1300',
      shopName: 'KUME',
      name: 'V-neck Zip-up Mohair Wool Cardigan',
      leftAmount: 76,
      quantity: 1,
      star: 4,
      reviewer: 5,
      price: 249000,
      optionList: [
        'Beige(S)',
        'Beige(M)',
        'Oatmeal(S)',
        'Oatmeal(M)',
        'Charcoal(S)',
        'Charcoal(M)',
      ],
      option: '',
    },
  ]);

  const optionChangeHandler = (index: number, newOption: string) => {
    setProduct(product.map((p, idx) => (idx === index ? { ...p, option: newOption } : p)));
  };

  const quantityChangeHandler = (index: number, newQuantity: number) => {
    setProduct(product.map((p, idx) => (idx === index ? { ...p, quantity: newQuantity } : p)));
  };

  return (
    <S.DetailHeaderContainer>
      {product.map((p, idx: number) => (
        <S.DetailHeader key={idx}>
          <S.Image src={p.mainImage} />
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
            onOptionChange={optionChangeHandler}
            onQuantityChange={quantityChangeHandler}
          />
        </S.DetailHeader>
      ))}
    </S.DetailHeaderContainer>
  );
};

export default DetailHeader;
