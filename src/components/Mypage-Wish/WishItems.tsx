import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Icon, { IconNameType } from '@/components/common/Icon';
import { Wish } from '@/components/Mypage-Wish/WishPage';
import { useDeleteWish, usePostWish } from '@/queries/mypage-wishList/mutation';
import * as S from './WishItems.styles';

type WishItemProps = {
  item: Wish;
};

export function WishItems({ item }: WishItemProps) {
  const [heart, setHeart] = useState<IconNameType>('IconFullHeart');
  const navigate = useNavigate();

  const { postWishMutate } = usePostWish();
  const { deleteWishMutate } = useDeleteWish();

  const changeHeartHandler = (productId: number) => {
    setHeart(heart === 'IconEmptyHeart' ? 'IconFullHeart' : 'IconEmptyHeart');
    if (heart === 'IconEmptyHeart') {
      postWishMutate(productId);
    } else {
      deleteWishMutate(productId);
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
