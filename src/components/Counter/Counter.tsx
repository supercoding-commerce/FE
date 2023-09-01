import { ChangeEvent, useState } from 'react';

import * as S from './Counter.styles';

interface CounterProps {
  maxQuantity: number;
  quantity?: number;
}

const Counter = ({ quantity = 1, maxQuantity = 100 }: CounterProps) => {
  const [count, setCount] = useState<string>(quantity.toString());

  const increaseNumber = () => {
    const nextValue = Number(count) + 1;
    if (nextValue <= maxQuantity) {
      setCount(() => nextValue.toString());
    }
  };
  const decreaseNumber = () => {
    const nextValue = Number(count) - 1;
    if (nextValue > 0) {
      setCount(() => nextValue.toString());
    }
  };
  const quantityChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    if (!value) {
      setCount(value);
    } else {
      if (parseInt(value) <= maxQuantity) {
        setCount(value);
      }
    }
  };

  return (
    <S.Counter>
      <S.MinusBtn onClick={decreaseNumber}>
        <div>-</div>
      </S.MinusBtn>
      <S.InputContainer>
        <input type="number" value={count} onChange={quantityChange} min={0} max={maxQuantity} />
      </S.InputContainer>
      <S.PlusBtn onClick={increaseNumber}>
        <div>+</div>
      </S.PlusBtn>
    </S.Counter>
  );
};
export default Counter;
