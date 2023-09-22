import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { getWish } from '@/apis/wish';
import Button from '@/components/common/Button/Button';
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
  const navigate = useNavigate();

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
    <>
      {wishItem && wishItem.length > 0 ? (
        <S.WishPage>
          {wishItem.map((item, idx) => (
            <WishItems key={idx} item={item} />
          ))}
        </S.WishPage>
      ) : (
        <S.NoneWish>
          <p>찜한 상품이 없습니다</p>
          <Button
            variant="main"
            size="medium"
            width="120px"
            color="black"
            isCircle={false}
            isFullWidth={false}
            onClick={() => {
              navigate('/');
            }}
          >
            상품 보러 가기
          </Button>
        </S.NoneWish>
      )}
    </>
  );
}
