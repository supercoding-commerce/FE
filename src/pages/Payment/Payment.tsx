import { Link } from 'react-router-dom';

import Button from '@/components/common/Button/Button.tsx';
import Icon from '@/components/common/Icon.tsx';
import { useToggle } from '@/hooks/useToggle.ts';
import { useGetOrders } from '@/queries/order/query.ts';
import { useGetUserInfo } from '@/queries/user/query.ts';
import { theme } from '@/styles/theme.ts';
import * as S from './Payment.styles';

export function Payment() {
  const { data: user } = useGetUserInfo();
  const { data: orders } = useGetOrders();

  const [pointActive, togglePoint] = useToggle();

  const 쿠폰 = 0;

  const handleClickCoupon = () => {
    // TODO: 모달 띄워서 쿠폰선택할 수 있게끔??
    alert('쿠폰 선택 완료');
  };

  if (!user || !orders) return null;

  const 총상품가격 = getTotalPrice(orders);
  const 배송비 = getDeliveryFee(총상품가격);
  const 적립금 = pointActive ? 100 : 0;
  const 총결제금액 = 총상품가격 + 배송비 - 적립금;
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
            <S.TextHighlight>{moneyFormat(user.payMoney)}원</S.TextHighlight>
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
              <S.Button color={theme.color.blue} onClick={handleClickCoupon}>
                쿠폰 선택
              </S.Button>
              <span>{moneyFormat(쿠폰)}원</span>
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
                  <span className={'option'}>옵션 - {orderItem.options[0]}</span>
                  <span className={'info'}>
                    {moneyFormat(orderItem.price)}원 - {orderItem.quantity}개
                  </span>
                </S.OrderItemInfoWrapper>
              </S.OrderItem>
            ))}
          </S.OrderList>
        </S.OrderSection>
      </S.SectionsWrapper>

      <S.ButtonWrapper>
        <Button
          variant={'main'}
          size={'large'}
          isFullWidth
          style={{ borderRadius: 0 }}
          onClick={() => {}}
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
