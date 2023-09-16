import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from '@emotion/styled';

import { CartItemAPI, getProduct } from '@/apis/product';
import DetailFooter from '@/components/DetailFooter/DetailFooter';
import DetailHeader from '@/components/DetailHeader/DetailHeader';
import ProductOption from '@/components/DetailHeader/ProductOption';
import { theme } from '@/styles/theme';

export type DetailProduct = {
  productId: number;
  thumbnailUrl: string;
  shopName: string;
  name: string;
  leftAmount: number;
  star: number;
  price: number;
  options: string[];
  orderList: {
    orderId: number;
    orderOption: string;
  }[];
};

const DetailPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState<DetailProduct>();
  const [cartProduct, setCartProduct] = useState<CartItemAPI[]>([]);

  useEffect(() => {
    getProduct(Number(productId)).then((result) => {
      if (result.status === 200) {
        const options = JSON.parse(result.data.options);
        const detailItem = { ...result.data, options };
        setProduct(detailItem);
      }
    });
  }, []);
  if (!product) return;

  const onOptionPlusHandler = (item: string) => {
    setCartProduct([
      ...cartProduct,
      {
        productId: Number(productId),
        quantity: 1,
        options: [item],
      },
    ]);
  };

  //배열에 useState 사용하는 법
  const onQuantityChangeHandler = (idx: number, newQuantity: number) => {
    const array = cartProduct;
    const newArray = array.map((v, index) => {
      if (index === idx) {
        v.quantity = newQuantity;
        return v;
      }
      return v;
    });

    setCartProduct(newArray);
  };

  const onOptionDeleteHandler = (idx: number) => {
    setCartProduct(cartProduct.filter((_, index) => index !== idx));
  };

  return (
    <DetailPageContainer>
      <DetailHeader product={product} />
      <ProductOption
        product={product}
        cartProduct={cartProduct}
        onOptionPlus={onOptionPlusHandler}
        onOptionDelete={onOptionDeleteHandler}
        onQuantityChange={onQuantityChangeHandler}
      />
      <DetailFooter cartProduct={cartProduct} />
    </DetailPageContainer>
  );
};

export default DetailPage;

const DetailPageContainer = styled.div`
  width: 420px;
  height: calc(100vh - 60px - 60px);
  background-color: ${theme.color.backgroundColor};
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;
