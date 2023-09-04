import { Counter } from '@/components/common/Counter/Counter.styles';
import Icon from '@/components/common/Icon';
import SelectBox from '@/components/common/SelectBox/SelectBox';
import * as S from './CartItem.styles';

export function CartItem() {
  return (
    <S.CartItemContainer>
      <S.CartItem>
        <S.CartItemHeader>
          <S.ItemBrand>브랜드</S.ItemBrand>
          <Icon name="IconX" />
        </S.CartItemHeader>
        <S.CartItemBodyContainer>
          <S.CartItemBody>
            <S.Image
              src={
                'https://cdn.eqlstore.com/goods/EQBR/23/08/29/GQ0G23082930503_0_ORGINL_1693299953333.jpg?RS=491'
              }
            />
            <S.CartItemInfo>
              <S.ItemName>제품이름</S.ItemName>
              <S.ItemInfo>
                <S.ItemSaleContainer>
                  <S.ItemSalePercent>15%</S.ItemSalePercent>
                  <S.ItemSalePrice>114,000원</S.ItemSalePrice>
                </S.ItemSaleContainer>
                <S.ItemOption>Black(M)</S.ItemOption>
              </S.ItemInfo>
            </S.CartItemInfo>
          </S.CartItemBody>
          <S.CounterContainer>
            <Counter />
          </S.CounterContainer>
        </S.CartItemBodyContainer>
      </S.CartItem>
    </S.CartItemContainer>
  );
}
