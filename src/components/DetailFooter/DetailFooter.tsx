import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '@/components/common/Button/Button';
import Icon, { IconNameType } from '@/components/common/Icon';
import * as S from './DetailFooter.styles';

const DetailFooter = () => {
  const [heart, setHeart] = useState<IconNameType>('IconEmptyHeart');
  const isBuyer = true;

  const changeHeartHandler = () => {
    setHeart(heart === 'IconEmptyHeart' ? 'IconFullHeart' : 'IconEmptyHeart');
  };

  const navigate = useNavigate();
  const goToPay = () => [navigate('/pay')];

  return (
    <>
      {isBuyer && (
        <S.BuyerDetailFooter>
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
          <Button
            variant="main"
            size="medium"
            width="150px"
            isCircle={false}
            isFullWidth={false}
            onClick={goToPay}
          >
            구매하기
          </Button>
        </S.BuyerDetailFooter>
      )}
      {!isBuyer && (
        <S.SellerDetailFooter>
          <Button
            variant="outlined"
            size="medium"
            width="150px"
            color="black"
            isCircle={false}
            isFullWidth={false}
          >
            수정
          </Button>
          <Button variant="main" size="medium" width="150px" isCircle={false} isFullWidth={false}>
            삭제
          </Button>
        </S.SellerDetailFooter>
      )}
    </>
  );
};
export default DetailFooter;
