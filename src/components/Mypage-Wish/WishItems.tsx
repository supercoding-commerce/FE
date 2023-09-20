import Icon from '@/components/common/Icon';
import { Wish } from '@/components/Mypage-Wish/WishPage';
import * as S from './WishItems.styles';

type WishItemProps = {
  wishItem: Wish[];
};

export function WishItems({ wishItem }: WishItemProps) {
  return (
    <S.Grid>
      {wishItem.map((item, idx) => (
        <S.WishItemsContainer key={idx}>
          <S.WishImage src={item.thumbnailUrl} />
          <S.BrandNameContainer>
            {/* {item.brandName} */}
            <S.BrandName>heejin</S.BrandName>
            <Icon name="IconFullHeart" size={22} />
          </S.BrandNameContainer>
          <S.ProductName>{item.name}</S.ProductName>
          <S.Price>{item.price.toLocaleString()}원</S.Price>
        </S.WishItemsContainer>
      ))}
    </S.Grid>
  );
}
