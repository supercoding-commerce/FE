import { useCallback, useState } from 'react';
import styled from '@emotion/styled';

import SelectBox from '@/components/common/SelectBox/SelectBox';

interface SampleItem {
  productId: number;
  quantity: number;
  option: string | null;
}

const SelectTest = () => {
  const sampleArray = [
    '옵션1',
    '옵션2',
    '옵션3',
    '옵션4',
    '옵션5',
    '옵션6',
    '옵션7',
    '옵션8',
    '옵션9',
    '옵션10',
    '옵션11',
    '옵션12',
  ];
  const [item, setItem] = useState<SampleItem>({
    productId: 123,
    quantity: 2,
    option: '',
  });

  const optionChangeHandler = useCallback((option: string) => {
    setItem({
      ...item,
      option: option,
    });
  }, []);
  console.log(item);
  return (
    <Container>
      <Div>
        <SelectBox optionList={sampleArray} onChange={optionChangeHandler} value={item.option} />
      </Div>
    </Container>
  );
};

export default SelectTest;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  padding-top: 100px;
  /* align-items: center; */
`;

const Div = styled.div`
  width: 365px;
`;
