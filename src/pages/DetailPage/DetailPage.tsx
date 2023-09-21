import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from '@emotion/styled';

import { getProduct, OrderNCartItemAPI } from '@/apis/product';
import Chat from '@/components/chat/Chat';
import DetailCategory from '@/components/Detail/detailCategory/DetailCategory';
import InformationBox from '@/components/Detail/detailInformation/InformationBox';
import Review from '@/components/Detail/detailReview/Review';
import DetailFooter from '@/components/DetailFooter/DetailFooter';
import DetailInfo from '@/components/DetailInfo/DetailInfo';
import ProductOption from '@/components/DetailInfo/ProductOption';
import { theme } from '@/styles/theme';

export type DetailProduct = {
  seller: boolean;
  sellerId: number;
  enteredUserId: number;
  enteredUserName: string;
  productId: number;
  thumbnailUrl: string;
  shopName: string;
  shopImageUrl: string;
  name: string;
  leftAmount: number;
  averageStarPoint: number;
  price: number;
  options: string[];
  imageUrls: string[];
  orderList: {
    orderId: number;
    isReviewed: boolean;
    orderOption: string;
  }[];
};

const DetailPage = () => {
  const { productId } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState<DetailProduct>();
  const [orderNCartProduct, setOrderNCartProduct] = useState<OrderNCartItemAPI[]>([]);
  const [prevCategory, setPrevCategory] = useState<string>('');

  const [isReview, setIsReview] = useState<boolean>(false);

  useEffect(() => {
    getProduct(Number(productId))
      .then((result) => {
        if (result.status === 200) {
          const options = JSON.parse(result.data.options);
          const detailItem = { ...result.data, options };
          setProduct(detailItem);
        }
      })
      .catch((error) => {
        if (error.response.status === 404) {
          alert('상품을 찾을 수 없습니다.');
          navigate('/');
        }
      });
  }, []);
  if (!product) return;

  const onOptionPlusHandler = (item: string) => {
    const doubleOption = orderNCartProduct.some((product) => product.options.includes(item));
    if (doubleOption) {
      alert('이미 선택된 옵션입니다.');
    } else {
      setOrderNCartProduct([
        ...orderNCartProduct,
        {
          productId: Number(productId),
          quantity: 1,
          options: [item],
        },
      ]);
    }
  };

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

  /** handleCategory() : 상세정보/리뷰 카테고리 내용 전환 */
  const handleCategory = (category: string) => {
    if (category !== prevCategory) {
      setIsReview((prev) => !prev);
      setPrevCategory(category);
    }
  };

  console.log(orderNCartProduct);

  return (
    <>
      <Chat
        sellerId={product.sellerId}
        sellerName={product.shopName}
        userId={product.enteredUserId}
        userName={product.enteredUserName}
        productId={product.productId}
        productName={product.name}
        isUser={product.seller}
        shopImageUrl={product.shopImageUrl}
      />
      <DetailPageContainer>
        <DetailInfo product={product} />
        <ProductOption
          product={product}
          orderNCartProduct={orderNCartProduct}
          onOptionPlus={onOptionPlusHandler}
          onOptionDelete={onOptionDeleteHandler}
          onQuantityChange={onQuantityChangeHandler}
        />
        <DetailCategory handleCategory={handleCategory} />
        {!isReview ? (
          <InformationBox productImage={product.imageUrls} />
        ) : (
          <>
            <Review
              productId={Number(productId)}
              isReview={isReview}
              orderList={product.orderList}
            />
          </>
        )}
        <DetailFooter productId={product.productId} orderNCartProduct={orderNCartProduct} />
      </DetailPageContainer>
    </>
  );
};

export default DetailPage;

const DetailPageContainer = styled.div`
  max-width: 420px;
  z-index: 1;
  height: calc(100vh - 60px - 60px);
  background-color: ${theme.color.backgroundColor};
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;
