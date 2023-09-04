import { ChangeEvent } from 'react';

import * as S from './Counter.styles';

interface CounterProps {
  maxQuantity: number;
  quantity: number;
  onQuantityChange: (newQuantity: number) => void;
}

// 동영님 컴포넌트 참조
// SelectTest가 상위 컴포넌트 SelectBox가 하위 컴포넌트
// => Counter가 하위 컴포넌트이니 상위 컴포넌트(CounterTest)를 만들고 값 보내줄 함수 만들어서 하위 컴포넌트로 보내주기

// 1. CartProduct에 담긴 제품 수량 가져오기
// 2. input value 안에 담기게 하기
// 3. 함수 통해서 input 바뀐 값을 CartProduct에 다시 담아주기

const Counter = ({ quantity, maxQuantity, onQuantityChange }: CounterProps) => {
  const increaseNumber = () => {
    const nextValue = quantity + 1;
    if (quantity < maxQuantity) {
      onQuantityChange(nextValue);
    }
  };
  const decreaseNumber = () => {
    const nextValue = quantity - 1;
    if (nextValue > 0) {
      onQuantityChange(nextValue);
    }
  };
  const quantityChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    if (!value) {
      onQuantityChange(1);
    } else {
      if (parseInt(value) <= maxQuantity) {
        onQuantityChange(parseInt(value));
      }
    }
  };

  return (
    <S.Counter>
      <S.MinusBtn onClick={decreaseNumber}>
        <div>-</div>
      </S.MinusBtn>
      <S.InputContainer>
        <input type="number" value={quantity} onChange={quantityChange} min={0} max={maxQuantity} />
      </S.InputContainer>
      <S.PlusBtn onClick={increaseNumber}>
        <div>+</div>
      </S.PlusBtn>
    </S.Counter>
  );
};
export default Counter;
