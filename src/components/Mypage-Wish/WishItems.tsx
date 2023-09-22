import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { deleteWish, postWish } from '@/apis/wish';
import Icon, { IconNameType } from '@/components/common/Icon';
import { Wish } from '@/components/Mypage-Wish/WishPage';
import * as S from './WishItems.styles';

type WishItemProps = {
  item: Wish;
};

export function WishItems({ item }: WishItemProps) {
  const [heart, setHeart] = useState<IconNameType>('IconFullHeart');
  const navigate = useNavigate();

  const changeHeartHandler = (productId: number) => {
    setHeart(heart === 'IconEmptyHeart' ? 'IconFullHeart' : 'IconEmptyHeart');
    if (heart === 'IconEmptyHeart') {
      postWish(productId);
    } else {
      deleteWish(productId);
    }
  };

  return (
    <S.WishItemsContainer>
      <S.WishItems>
        <S.WishImage
          src={item.thumbnailUrl}
          onClick={() => {
            navigate(`/product/${item.productId}`);
          }}
        />
        <S.BrandNameContainer>
          <S.BrandName>{item.shopName}</S.BrandName>
          <Icon name={heart} size={22} onClick={() => changeHeartHandler(item.productId)} />
        </S.BrandNameContainer>
        <S.ProductName>{item.name}</S.ProductName>
        <S.Price>{item.price.toLocaleString()}</S.Price>
      </S.WishItems>
    </S.WishItemsContainer>
  );
}
