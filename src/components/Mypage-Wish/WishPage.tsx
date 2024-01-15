import { useNavigate } from 'react-router-dom';

import Button from '@/components/common/Button/Button';
import { WishItems } from '@/components/Mypage-Wish/WishItems';
import { useGetWish } from '@/queries/mypage-wishList/query';
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
  const navigate = useNavigate();

  const { data: wishItem } = useGetWish();

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
