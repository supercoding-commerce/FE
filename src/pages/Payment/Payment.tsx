import { Link } from 'react-router-dom';

import Button from '@/components/common/Button/Button.tsx';
import Icon from '@/components/common/Icon.tsx';
import { useGetUserInfo } from '@/queries/user/query.ts';
import { theme } from '@/styles/theme.ts';
import * as S from './Payment.styles';

export function Payment() {
  const { data: user } = useGetUserInfo();

  // const userName = '김승규';
  // const address = '서울특별시 용산구 후암동 서울특별시 용산구 후암동 서울특별시 용산구 후암동';
  // const 보유금액 = 100000;

  const 총금액 = 70750;
  const 배송비 = 0;
  const 쿠폰 = 0;
  const 적립금 = 0;
  const 총결제금액 = 706982;

  const handleClickCoupon = () => {
    // TODO: 모달 띄워서 쿠폰선택할 수 있게끔??
    alert('쿠폰 선택 완료');
  };

  const handleClickApplyPoint = () => {
    // TODO: 보유한 포인트 모두 적용
    alert('포인트 전액 사용');
  };

  if (!user) return null;
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
            <span>총 상품 가격</span> <span>{moneyFormat(총금액)}원</span>
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
              <S.Button onClick={handleClickApplyPoint}>적용</S.Button>
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
            {ORDER_LIST.map((orderItem: any, index) => (
              <S.OrderItem key={index}>
                <img src={orderItem.imageSrc} alt="thumbnail" />
                <S.OrderItemInfoWrapper>
                  <span className={'name'}>{orderItem.name}</span>
                  <span className={'info'}>
                    {orderItem.price}원 - {orderItem.count}개
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

const ORDER_LIST = [
  {
    imageSrc:
      'https://static.lookpin.co.kr/20210427175525-97e0/a1b08da0dd004af8efb631ef9c87c644.jpg',
    name: '무신사 무지 티셔츠',
    price: 15000,
    count: 1,
  },
  {
    imageSrc:
      'https://static.lookpin.co.kr/20210427175525-97e0/a1b08da0dd004af8efb631ef9c87c644.jpg',
    name: '무신사 무지 티셔츠',
    price: 15000,
    count: 1,
  },
  {
    imageSrc:
      'https://static.lookpin.co.kr/20210427175525-97e0/a1b08da0dd004af8efb631ef9c87c644.jpg',
    name: '무신사 무지 티셔츠',
    price: 15000,
    count: 1,
  },
  {
    imageSrc:
      'https://static.lookpin.co.kr/20210427175525-97e0/a1b08da0dd004af8efb631ef9c87c644.jpg',
    name: '무신사 무지 티셔츠',
    price: 15000,
    count: 1,
  },
  {
    imageSrc:
      'https://static.lookpin.co.kr/20210427175525-97e0/a1b08da0dd004af8efb631ef9c87c644.jpg',
    name: '무신사 무지 티셔츠',
    price: 15000,
    count: 1,
  },
];
