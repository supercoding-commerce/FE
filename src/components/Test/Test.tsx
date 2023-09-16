import { useState } from 'react';
import styled from '@emotion/styled';

import BtnTest from '@/components/common/commonUiTest/BtnTest';
import Icon from '@/components/common/Icon.tsx';
import { Rating } from '@/components/common/Rating/Rating.tsx';
import { DeleteIcon } from '@/components/icons/DeleteIcon.tsx';
import { theme } from '@/styles/theme.ts';

function Test() {
  // TODO: 별점 레이팅 UI 예제
  const [ratingStar, setRatingStar] = useState(0);
  const handleChangeRating = (count: number) => {
    setRatingStar(count);
  };

  return (
    <div>
      하이
      <H0>Title</H0>
      <H1>Title</H1>
      <Body0>Title</Body0>
      <div>
        <H0>Icons</H0>
        <div>
          <H2>SIZE 기본</H2>
          <Icon name="IconBag" size={100} color="brand" />
          <Icon name="IconSearch" />
          <Icon name="IconUser" />
          <Icon name="IconBag" />
        </div>
        <div>
          <H2>SIZE Custom & Color Custom</H2>
          <Icon name="IconSearch" size={30} />
          <Icon name="IconUser" width={'50px'} height={'40px'} color="brand" />
          <Icon name="IconBag" size={100} />
          <Icon
            name="IconClear"
            color="orange"
            fill="orange"
            style={{ width: '100px', height: '100px', border: '1px solid red' }}
          />
          <DeleteIcon />
        </div>
      </div>
      <div>
        <Rating count={ratingStar} onChange={handleChangeRating} /> <span>{ratingStar}</span>
        <Rating readOnly count={2} size={12} />
      </div>
      <BtnTest />
    </div>
  );
}

export default Test;

const H0 = styled.h1`
  ${theme.font.h0}
  color: ${theme.color.brand}
`;

const H1 = styled.h2`
  ${theme.font.h1}
`;

const H2 = styled.h3`
  ${theme.font.h2}
`;

const Body0 = styled.span`
  ${theme.font.body0}
`;
