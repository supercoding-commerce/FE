import { Button } from '@/components/common/Button/Button.styles';
import DefaultHeader from '@/components/common/Header/DefaultHeader';
import { CartItem } from '@/pages/CartPage/CartItem';
import * as S from './CartPage.styles';

export function CartPage() {
  return (
    <S.CartPageContainer>
      <DefaultHeader text={'Cart'} />
      <S.AllDelete>
        <p>전체삭제</p>
      </S.AllDelete>
      <CartItem />
      <S.PriceWrapper>
        <S.AllPrice>
          <S.AllPriceTitle>총 상품 금액</S.AllPriceTitle>
          <S.AllPriceValue>134,000원</S.AllPriceValue>
        </S.AllPrice>
        <S.DeliveryPrice>
          <S.DeliveryPriceTitle>배송비</S.DeliveryPriceTitle>
          <S.DeliveryPriceValue>무료배송</S.DeliveryPriceValue>
        </S.DeliveryPrice>
        <S.Coupon>
          <S.CouponTitle>쿠폰</S.CouponTitle>
          <Button>{'쿠폰'}</Button>
        </S.Coupon>
      </S.PriceWrapper>
      <S.GoToPay>
        <S.FinalPrice>
          <S.FinalPriceTitle>총 결제 금액</S.FinalPriceTitle>
          <S.FinalPriceValue>134,000원</S.FinalPriceValue>
        </S.FinalPrice>
        <Button>{'구매하기(2)'}</Button>
      </S.GoToPay>
    </S.CartPageContainer>
  );
}
