import { useNavigate } from 'react-router-dom';

import { deleteAll, deleteCartItem, postPayment, putCart } from '@/apis/cart';
import Button from '@/components/common/Button/Button';
import { useGetCart } from '@/queries/cart/query';
import { CartItem } from './CartItem';
import * as S from './CartPage.styles';

export type Cart = {
  cartId: number;
  productId: number;
  productName: string;
  imageUrl: string;
  shopName: string;
  price: number;
  stock: number;
  quantity: number;
  productOptionList: string[];
  option: string[];
};

export type OrderCart = {
  productId: number;
  cartId: number;
  quantity: number;
  options: string[];
};

export function CartPage() {
  const navigate = useNavigate();
  const { cartItems: cart = [] } = useGetCart();

  const cartQuantityChangeHandler = (index: number, newQuantity: number) => {
    const updatedItem = cart[index];
    putCart([
      {
        productId: updatedItem.productId,
        cartId: updatedItem.cartId,
        quantity: newQuantity,
        options: updatedItem.option,
      },
    ]);
    // .then(() => {
    //   const newCartItemArray = cartItem.map((item, idx) => {
    //     if (idx === index) {
    //       item.quantity = newQuantity;
    //       return item;
    //     }
    //     return item;
    //   });
    //   setCartItems(newCartItemArray);
    // });
  };

  const cartOptionChangeHandler = (index: number, newOption: string) => {
    const updatedItem = cart[index];
    putCart([
      {
        productId: updatedItem.productId,
        cartId: updatedItem.cartId,
        quantity: updatedItem.quantity,
        options: [newOption],
      },
    ]);
    // .then(() => {
    //   const newCartItemArray = cartItem.map((item, idx) => {
    //     if (idx === index) {
    //       item.option = [newOption];
    //       return item;
    //     }
    //     return item;
    //   });
    //   setCartItems(newCartItemArray);
    // });
  };

  const deleteItemHandler = (cartId: number) => {
    deleteCartItem(cartId);
    // setCartItems((prev) => prev.filter((item) => item.cartId !== cartId));
  };

  const deleteAllHandler = () => {
    deleteAll();
    // setCartItems([]);
  };

  const postCartItemPayment = () => {
    const cartIds = cart.map((item) => item.cartId);
    postPayment({ cartIdList: cartIds }).then((data) => {
      navigate('/pay', {
        state: {
          type: 'CART',
          payload: data,
        },
      });
    });
  };

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  let deliveryPrice;
  if (totalPrice === 0) {
    deliveryPrice = '0원';
  } else if (totalPrice < 80000) {
    deliveryPrice = '3,000원';
  } else {
    deliveryPrice = '무료배송';
  }

  let finalTotalPrice = totalPrice;
  if (deliveryPrice === '3,000원') {
    finalTotalPrice += 3000;
  }
  const noneCartItem = cart.length === 0;

  return (
    <S.CartPageContainer>
      {cart && cart.length > 0 ? (
        <>
          <S.AllDelete>
            <p onClick={deleteAllHandler}>전체삭제</p>
          </S.AllDelete>
          <CartItem
            cartItems={cart}
            onDelete={deleteItemHandler}
            onQuantityChange={cartQuantityChangeHandler}
            onOptionChange={cartOptionChangeHandler}
          />
          <S.PriceWrapper>
            <S.AllPrice>
              <p>총 상품 금액</p>
              <p>{totalPrice.toLocaleString()}원</p>
            </S.AllPrice>
            <S.DeliveryPrice>
              <p>배송비</p>
              <p>{deliveryPrice}</p>
            </S.DeliveryPrice>
          </S.PriceWrapper>
          <S.GoToPay>
            <S.FinalPrice>
              <S.FinalPriceTitle>총 결제 금액</S.FinalPriceTitle>
              <S.FinalPriceValue>{finalTotalPrice.toLocaleString()}원</S.FinalPriceValue>
            </S.FinalPrice>
            <Button
              variant="main"
              size="medium"
              isFullWidth
              onClick={postCartItemPayment}
              disabled={noneCartItem}
            >
              구매하기({cart.length})
            </Button>
          </S.GoToPay>
        </>
      ) : (
        <S.NoneCart>
          <p>장바구니에 담긴 상품이 없습니다.</p>
          <Button
            variant="main"
            size="medium"
            width="120px"
            color="black"
            isCircle={false}
            isFullWidth={false}
            onClick={() => {
              navigate('/');
            }}
          >
            상품 보러 가기
          </Button>
        </S.NoneCart>
      )}
    </S.CartPageContainer>
  );
}
