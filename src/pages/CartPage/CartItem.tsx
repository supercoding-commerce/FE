import Counter from '@/components/common/Counter/Counter';
import Icon from '@/components/common/Icon';
import SelectBox from '@/components/common/SelectBox/SelectBox';
import { Cart } from '@/pages/CartPage/CartPage';
import * as S from './CartItem.styles';

type CartItemProps = {
  cartItems: Cart[];
  onDelete: (index: number) => void;
  onQuantityChange?: (index: number, newQuantity: number) => void;
  onOptionChange?: (index: number, newOption: string) => void;
};

export function CartItem({ cartItems, onDelete, onQuantityChange, onOptionChange }: CartItemProps) {
  return (
    <S.CartItemContainer>
      {cartItems.map((item, idx: number) => (
        <S.CartItem key={idx}>
          <S.CartItemHeader>
            <S.ItemBrand>{item.shopName}</S.ItemBrand>
            <Icon
              name="IconX"
              style={{ cursor: 'pointer' }}
              onClick={() => onDelete(item.cartId)}
            />
          </S.CartItemHeader>
          <S.CartItemBodyContainer>
            <S.CartItemBody>
              <S.Image src={item.imageUrl} />
              <S.ItemInfoWrapper>
                <S.ItemNameWrapper>
                  <S.ItemName>{item.productName}</S.ItemName>
                  <S.ItemOption>{item.option}</S.ItemOption>
                </S.ItemNameWrapper>
                <S.PriceAndCount>
                  <S.ItemSaleContainer>
                    <S.ItemOriginalPrice>{item.price.toLocaleString()}원</S.ItemOriginalPrice>
                  </S.ItemSaleContainer>
                  <S.CounterContainer>
                    {onQuantityChange ? (
                      <Counter
                        quantity={item.quantity}
                        maxQuantity={item.stock}
                        onQuantityChange={(newQuantity) => onQuantityChange(idx, newQuantity)}
                      />
                    ) : null}
                  </S.CounterContainer>
                </S.PriceAndCount>
              </S.ItemInfoWrapper>
            </S.CartItemBody>
          </S.CartItemBodyContainer>
          <S.ItemOptionSelectContainer>
            <S.ItemOptionSelect>
              {onOptionChange ? (
                <SelectBox
                  optionList={item.productOptionList}
                  onChange={(newOption) => onOptionChange(idx, newOption)}
                  value={item.option[0]}
                />
              ) : (
                item.option
              )}
            </S.ItemOptionSelect>
          </S.ItemOptionSelectContainer>
          <S.ItemTotalPrice>
            <S.ItemTotalPriceTitle>상품 총액</S.ItemTotalPriceTitle>
            <S.ItemTotalPriceValue>
              {(item.price * item.quantity).toLocaleString()}원
            </S.ItemTotalPriceValue>
          </S.ItemTotalPrice>
        </S.CartItem>
      ))}
    </S.CartItemContainer>
  );
}
