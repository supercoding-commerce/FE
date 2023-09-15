import * as S from '../ListItemComponent/AllProductList.styles';

interface ListItemProps {
  imageUrl: string;
  name: string;
  price: number;
  shopName: string;
}

const ListItem: React.FC<ListItemProps> = ({ imageUrl, name, price, shopName }) => {
  return (
    <S.ListWrapper>
      <S.ListItem>
        <S.ProductImg src={imageUrl} alt="" />
      </S.ListItem>
      <S.Description>
        <S.Price>{price}원</S.Price>
        <S.Name>{name}</S.Name>
        <S.DetailDescription>{shopName}</S.DetailDescription>
      </S.Description>
    </S.ListWrapper>
  );
};

export default ListItem;
