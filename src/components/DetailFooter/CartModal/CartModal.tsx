import { useNavigate } from 'react-router-dom';

import * as S from './CartModal.styles';

export function CartModal() {
  const navigate = useNavigate();

  return (
    <S.CartModalContainer>
      <S.CartModal>
        <p>장바구니에 상품이 담겼습니다</p>
        <S.GoToCart
          onClick={() => {
            navigate('/mycart');
          }}
        >
          장바구니로 이동
        </S.GoToCart>
      </S.CartModal>
    </S.CartModalContainer>
  );
}
