import { useEffect, useState } from 'react';

import { getWish } from '@/apis/wish';
import { WishItems } from '@/components/Mypage-Wish/WishItems';
import * as S from './WishPage.styles';

export type Wish = {
  productId: number;
  price: number;
  name: string;
  brandName: string; //요청
  options: string[]; // 불필요
  thumbnailUrl: string;
};

export function WishPage() {
  const [wishItem, setWishItem] = useState<Wish[]>([]);
  useEffect(() => {
    getWish()
      .then((result) => {
        setWishItem(result.data);
        console.log(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <S.WishPage>
      <WishItems wishItem={wishItem} />
    </S.WishPage>
  );
}
