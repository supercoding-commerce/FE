import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useModal } from '@ebay/nice-modal-react';

import { PurchasePayload } from '@/apis/payment.ts';
import Button from '@/components/common/Button/Button.tsx';
import Icon from '@/components/common/Icon.tsx';
import { CouponModal } from '@/components/modals/CouponModal.tsx';
import { useToggle } from '@/hooks/useToggle.ts';
import { useGetOrders } from '@/queries/order/query.ts';
import { usePurchase } from '@/queries/payments/mutation.ts';
import { useGetUserInfo } from '@/queries/user/query.ts';
import { theme } from '@/styles/theme.ts';
import * as S from './Payment.styles';

export function Payment() {
  const { state } = useLocation();

  const { data: user } = useGetUserInfo();
  const { data: orders } = useGetOrders(state?.type, state?.payload, {
    enabled: !!(state && state.type),
  });

  useEffect(() => {
    if (!state || !state.type) {
      alert('잘못된 접근');
      navigate('/');
    }
  }, []);

  const [pointActive, togglePoint] = useToggle();
  const [selectedCoupon, setSelectedCoupon] = useState<Coupon | undefined>(undefined);

  const couponModal = useModal(CouponModal);
  const { purchaseMutate } = usePurchase();
  const navigate = useNavigate();

  const handleClickCoupon = async () => {
    // 이미 쿠폰 선택시 다시 클릭하면 쿠폰선택 취소
    if (쿠폰적용금액 > 0) {
      setSelectedCoupon(undefined);
      return;
    }

    // TODO: 모달 띄워서 쿠폰선택할 수 있게끔??
    await couponModal.show({
      selectedCoupon: selectedCoupon,
      onUseCoupon: (selectedCoupon: Coupon | undefined) => setSelectedCoupon(selectedCoupon),
    });
  };

  const handlePurchase = async () => {
    if (!orders || orders.length === 0) return;

    const purchasePayload: PurchasePayload = {
      couponId: selectedCoupon?.couponId || 0,
      isUsePoint: pointActive,
      orderIdList: orders.map((order) => order.orderId),
      // GYU-TODO: 단일로 처리해야함!?
      // orderIdList: [orders[orders.length - 1].orderId],
      paymentMethod: 1,
      totalPrice: 총결제금액,
    };
    purchaseMutate(purchasePayload, {
      onSuccess: () => {
        alert('구매 완료');
        navigate('/');
      },
    });
  };

  if (!user || !orders) return null;

  const 총상품가격 = getTotalPrice(orders);
  const 배송비 = getDeliveryFee(총상품가격);
  const 쿠폰적용금액 = applyCoupon(selectedCoupon, 총상품가격);
  const 적립금 = pointActive ? user.point : 0;
  const 총결제금액 = 총상품가격 + 배송비 - 쿠폰적용금액 - 적립금;

  // GYU-TODO: 단일로 처리해야함!?
  // const orderItem = orders[orders.length - 1];
  return (
    <S.PaymentWrapper>
      <S.SectionsWrapper>
        <Link to={'#'}>
          <S.AddressSection>
            <S.AddressWrapper>
              <S.AddressTitle>배송지 | {user.nickname}</S.AddressTitle>
              <S.Address>{user.address}</S.Address>
            </S.AddressWrapper>
            <Icon name={'IconArrowRightFill'} size={24} />
          </S.AddressSection>
        </Link>

        <S.PayMoneySection>
          <S.MoneyWrapper>
            <S.Title>총 보유 금액</S.Title>
            <S.TextHighlight>{moneyFormat(user.payMoney || 0)}원</S.TextHighlight>
          </S.MoneyWrapper>
          <Link to={'#'}>
            <Button variant={'main'} size={'large'} isFullWidth>
              충전하기
            </Button>
          </Link>
        </S.PayMoneySection>

        <S.TotalPaySection>
          <S.Title>최종결제금액</S.Title>
          <S.TotalPayItemWrapper>
            <span>총 상품 가격</span> <span>{moneyFormat(총상품가격)}원</span>
          </S.TotalPayItemWrapper>
          <S.TotalPayItemWrapper>
            <span>배송비</span> <span>{moneyFormat(배송비)}원</span>
          </S.TotalPayItemWrapper>
          <S.TotalPayItemWrapper>
            <span>쿠폰 적용</span>
            <S.TotalPayItemOptionWrapper>
              <S.Button
                color={theme.color.blue}
                onClick={handleClickCoupon}
                className={쿠폰적용금액 ? 'active' : ''}
              >
                {쿠폰적용금액 ? '취소' : '선택'}
              </S.Button>
              <span>{moneyFormat(쿠폰적용금액)}원</span>
            </S.TotalPayItemOptionWrapper>
          </S.TotalPayItemWrapper>
          <S.TotalPayItemWrapper>
            <span>적립금</span>
            <S.TotalPayItemOptionWrapper>
              <S.Button onClick={togglePoint} className={pointActive ? 'active' : ''}>
                {pointActive ? '취소' : '적용'}
              </S.Button>
              <span>{moneyFormat(적립금)}원</span>
            </S.TotalPayItemOptionWrapper>
          </S.TotalPayItemWrapper>

          <S.Hr />
          <S.TotalPayWrapper>
            <span>총 결제 금액</span>
            <S.TextHighlight>{moneyFormat(총결제금액)}원</S.TextHighlight>
          </S.TotalPayWrapper>
        </S.TotalPaySection>

        <S.OrderSection>
          <S.Title>주문 목록</S.Title>
          <S.OrderList>
            {orders.map((orderItem, index) => (
              <S.OrderItem key={index}>
                <img src={orderItem.imageUrl} alt="thumbnail" />
                <S.OrderItemInfoWrapper>
                  <span className={'name'}>{orderItem.productName}</span>
                  <span className={'option'}>{(orderItem.options ?? [])[0]}</span>
                  <span className={'info'}>
                    {moneyFormat(orderItem.price)}원 - {orderItem.quantity}개
                  </span>
                </S.OrderItemInfoWrapper>
              </S.OrderItem>
            ))}
            {/* GYU-TODO: 단일로 처리해야함!?*/}
            {/* GYU-TODO: 백엔드 API 수정되면 수정 */}
            {/*<S.OrderItem>*/}
            {/*  <img src={orderItem.imageUrl} alt="thumbnail" />*/}
            {/*  <S.OrderItemInfoWrapper>*/}
            {/*    <span className={'name'}>{orderItem.productName}</span>*/}
            {/*    <span className={'option'}>{(orderItem.options ?? [])[0]}</span>*/}
            {/*    <span className={'info'}>*/}
            {/*      {moneyFormat(orderItem.price)}원 - {orderItem.quantity}개*/}
            {/*    </span>*/}
            {/*  </S.OrderItemInfoWrapper>*/}
            {/*</S.OrderItem>*/}
          </S.OrderList>
        </S.OrderSection>
      </S.SectionsWrapper>

      <S.ButtonWrapper>
        <Button
          variant={'main'}
          size={'large'}
          isFullWidth
          style={{ borderRadius: 0 }}
          onClick={handlePurchase}
        >
          구매하기
        </Button>
      </S.ButtonWrapper>
    </S.PaymentWrapper>
  );
}

function moneyFormat(money: number) {
  return money.toLocaleString('ko-KR');
}

function getTotalPrice(orders: Order[]) {
  return orders.reduce((acc, cur) => (acc += cur.totalPrice), 0);
}

/**
 * 브랜드 상관 없이 장바구니 총 80000원 구매시 무료배송
 * 미만시 3000원
 * 제주도를 포함한 도서/산간 지역 추가 배송비 5000원 (후에 작업)
 */
const FREE_PRICE = 80000;
function getDeliveryFee(totalPrice: number) {
  return totalPrice >= FREE_PRICE ? 0 : 3000;
}

function applyCoupon(coupon: Coupon | undefined, 총상품가격: number) {
  if (!coupon) return 0;

  let discountRate = 1;
  if (coupon.couponContent === '15%') {
    discountRate = 0.15;
  }
  if (coupon.couponContent === '10%') {
    discountRate = 0.1;
  }

  return 총상품가격 * discountRate;
}
