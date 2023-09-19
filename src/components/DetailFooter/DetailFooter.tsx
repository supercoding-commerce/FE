import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { OrderNCartItemAPI, postCart, postPayment } from '@/apis/product';
import Button from '@/components/common/Button/Button';
import Icon, { IconNameType } from '@/components/common/Icon';
import * as S from './DetailFooter.styles';

type FooterProps = {
  orderNCartProduct: OrderNCartItemAPI[];
};

const DetailFooter = ({ orderNCartProduct }: FooterProps) => {
  const [heart, setHeart] = useState<IconNameType>('IconEmptyHeart');
  const navigate = useNavigate();

  const isBuyer = true;

  const changeHeartHandler = () => {
    setHeart(heart === 'IconEmptyHeart' ? 'IconFullHeart' : 'IconEmptyHeart');
  };

  const postPaymentProduct = () => {
    if (orderNCartProduct.length === 0) return;

    postPayment([...orderNCartProduct]).then(() => navigate('/pay'));
  };

  const postCartProduct = () => {
    postCart(orderNCartProduct)
      .then((result) => {
        if (result.status === 200) {
          navigate('/mycart');
        }
      })
      .catch((error) => {
        if (error.response.status === 409) {
          alert('이미 장바구니에 담긴 상품입니다.');
        }
      });
  };

  const nonSelectedProduct = orderNCartProduct.length === 0;
  return (
    <>
      {isBuyer && (
        <S.BuyerDetailFooter>
          <Icon onClick={changeHeartHandler} name={heart} size={25} style={{ cursor: 'pointer' }} />
          <Button
            variant="outlined"
            size="medium"
            width="150px"
            color="black"
            isCircle={false}
            isFullWidth={false}
            onClick={postCartProduct}
            disabled={nonSelectedProduct}
          >
            장바구니
          </Button>
          <Button
            variant="main"
            size="medium"
            width="150px"
            isCircle={false}
            isFullWidth={false}
            onClick={postPaymentProduct}
            disabled={nonSelectedProduct}
          >
            구매하기
          </Button>
        </S.BuyerDetailFooter>
      )}
      {!isBuyer && (
        <S.SellerDetailFooter>
          <Button
            variant="outlined"
            size="medium"
            width="150px"
            color="black"
            isCircle={false}
            isFullWidth={false}
          >
            수정
          </Button>
          <Button variant="main" size="medium" width="150px" isCircle={false} isFullWidth={false}>
            삭제
          </Button>
        </S.SellerDetailFooter>
      )}
    </>
  );
};
export default DetailFooter;
