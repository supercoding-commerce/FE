import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from '@emotion/styled';

import { getProduct, OrderNCartItemAPI } from '@/apis/product';
import DetailFooter from '@/components/DetailFooter/DetailFooter';
import DetailInfo from '@/components/DetailInfo/DetailInfo';
import ProductOption from '@/components/DetailInfo/ProductOption';
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
  const [orderNCartProduct, setOrderNCartProduct] = useState<OrderNCartItemAPI[]>([]);

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
  console.log(product);

  const onOptionPlusHandler = (item: string) => {
    setOrderNCartProduct([
      ...orderNCartProduct,
      {
        productId: Number(productId),
        quantity: 1,
        options: [item],
      },
    ]);
  };

  //배열에 useState 사용하는 법
  const onQuantityChangeHandler = (idx: number, newQuantity: number) => {
    const array = orderNCartProduct;
    const newArray = array.map((v, index) => {
      if (index === idx) {
        v.quantity = newQuantity;
        return v;
      }
      return v;
    });

    setOrderNCartProduct(newArray);
  };

  const onOptionDeleteHandler = (idx: number) => {
    setOrderNCartProduct(orderNCartProduct.filter((_, index) => index !== idx));
  };

  return (
    <DetailPageContainer>
      <DetailInfo product={product} />
      <ProductOption
        product={product}
        orderNCartProduct={orderNCartProduct}
        onOptionPlus={onOptionPlusHandler}
        onOptionDelete={onOptionDeleteHandler}
        onQuantityChange={onQuantityChangeHandler}
      />
      <DetailFooter orderNCartProduct={orderNCartProduct} />
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
