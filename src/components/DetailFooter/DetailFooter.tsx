import { useState } from 'react';

import Button from '@/components/common/Button/Button';
import Icon, { IconNameType } from '@/components/common/Icon';
import * as S from './DetailFooter.styles';

const DetailFooter = () => {
  const [heart, setHeart] = useState<IconNameType>('IconEmptyHeart');

  const changeHeartHandler = () => {
    setHeart(heart === 'IconEmptyHeart' ? 'IconFullHeart' : 'IconEmptyHeart');
  };

  return (
    <S.DetailFooter>
      <Icon onClick={changeHeartHandler} name={heart} size={25} style={{ cursor: 'pointer' }} />
      <Button
        variant="outlined"
        size="medium"
        width="150px"
        color="black"
        isCircle={false}
        isFullWidth={false}
      >
        장바구니
      </Button>
      <Button variant="main" size="medium" width="150px" isCircle={false} isFullWidth={false}>
        구매하기
      </Button>
    </S.DetailFooter>
  );
};
export default DetailFooter;
