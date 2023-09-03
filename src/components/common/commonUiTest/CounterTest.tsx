import { useState } from 'react';

import Counter from '@/components/common/Counter/Counter';

//counter에 넣을 값
const CounterTest = () => {
  const [quantity, setQuantity] = useState<number>(3);
  const [maxQuantity, setMaxQuantity] = useState<number>(100);

  //수량 변경 핸들러
  const onQuantityChange = (newQuantity: number) => {
    setQuantity(newQuantity);
  };

  return (
    <>
      <Counter quantity={quantity} maxQuantity={maxQuantity} onQuantityChange={onQuantityChange} />
    </>
  );
};

export default CounterTest;
