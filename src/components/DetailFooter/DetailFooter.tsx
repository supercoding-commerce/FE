import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { OrderNCartItemAPI, postCart, postPayment } from '@/apis/product';
import { getInfo } from '@/apis/user';
import { deleteWish, getWish, postWish } from '@/apis/wish';
import Button from '@/components/common/Button/Button';
import Icon, { IconNameType } from '@/components/common/Icon';
import { StyledToastContainer, Toast } from '@/components/common/Toastify/Toastify';
import { Wish } from '@/components/Mypage-Wish/WishPage';
import { DetailProduct } from '@/pages/DetailPage/DetailPage';
import { userState } from '@/recoil/userState';
import * as S from './DetailFooter.styles';

type FooterProps = {
  orderNCartProduct: OrderNCartItemAPI[];
  productId: number;
  shopName: string;
};

export type OnlyProductId = Pick<DetailProduct, 'productId'>;

type SellerInformation = {
  shopName: string;
};

const DetailFooter = ({ orderNCartProduct, productId, shopName }: FooterProps) => {
  const [heart, setHeart] = useState<IconNameType>('IconEmptyHeart');
  const [sellerInfo, setSellerInfo] = useState<SellerInformation>({ shopName: '' });

  const navigate = useNavigate();
  const userInfo = useRecoilValue(userState);

  const changeHeartHandler = (productId: number) => {
    setHeart(heart === 'IconEmptyHeart' ? 'IconFullHeart' : 'IconEmptyHeart');
    if (heart === 'IconEmptyHeart') {
      postWish(productId);
    } else {
      deleteWish(productId);
    }
  };

  const postPaymentProduct = () => {
    if (orderNCartProduct.length === 0) return;

    postPayment([...orderNCartProduct]).then(() =>
      navigate('/pay', {
        state: {
          type: 'PAY',
          payload: orderNCartProduct[0].productId,
          // GYU-TODO: 임시로 구현 (클라작업을 위함)
          count: orderNCartProduct.length,
        },
      }),
    );
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
          Toast.success('이미 장바구니에 담긴 상품입니다.');
        }
      });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getWish();
        const wishCheck = productId;
        const hasProductId = result.data.some((item: Wish) => item.productId === wishCheck);
        if (hasProductId) {
          setHeart('IconFullHeart');
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    getInfo().then((result) => {
      if (result) {
        setSellerInfo(result);
      }
    });
  }, []);

  const nonSelectedProduct = orderNCartProduct.length === 0;
  return (
    <>
      {userInfo.role === 'USER' ? (
        <S.BuyerDetailFooter>
          <Icon
            name={heart}
            size={25}
            style={{ cursor: 'pointer' }}
            onClick={() => changeHeartHandler(productId)}
          />
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
          <StyledToastContainer limit={1} />
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
      ) : userInfo.role === 'SELLER' && sellerInfo.shopName === shopName ? (
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
      ) : null}
    </>
  );
};
export default DetailFooter;
