import { useEffect, useState } from 'react';

import { getWish } from '@/apis/wish';
// import { IconNameType } from '@/components/common/Icon';
import { WishItems } from '@/components/Mypage-Wish/WishItems';
import * as S from './WishPage.styles';

export type Wish = {
  productId: number;
  price: number;
  name: string;
  shopName: string;
  options: string[];
  thumbnailUrl: string;
};

export function WishPage() {
  const [wishItem, setWishItem] = useState<Wish[]>([]);

  console.log(wishItem);
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
      {wishItem.map((item, idx) => (
        <WishItems key={idx} item={item} />
      ))}
    </S.WishPage>
  );
}
