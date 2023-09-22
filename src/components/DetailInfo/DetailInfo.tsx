import { Rating } from '@/components/common/Rating/Rating';
import { DetailProduct } from '@/pages/DetailPage/DetailPage';
import * as S from './DetailInfo.styles';

type DetailProps = {
  product: DetailProduct;
};

const DetailInfo = ({ product }: DetailProps) => {
  return (
    <S.DetailInfoContainer>
      <S.DetailInfo>
        <S.Image src={product.thumbnailUrl} />
        <S.ProductInfo1>
          <S.Brand>{product.shopName}</S.Brand>
          <S.ProductName>{product.name}</S.ProductName>
        </S.ProductInfo1>
        <S.ProductInfo2>
          <S.Rating>
            <Rating readOnly count={product.averageStarPoint} />
          </S.Rating>
          <S.Price>{product.price.toLocaleString()}원</S.Price>
        </S.ProductInfo2>
      </S.DetailInfo>
    </S.DetailInfoContainer>
  );
};

export default DetailInfo;

//detailpage에서 불러올 ㅅ 있느 함수 만들기
//detailHeader로 해당 함수를 props 넘겨주기
//detailHeader에서 해당 함수를 사용해서 값 업데이트
//detailpage에서 업데이트된 값을 detailfooter로 넘겨주기
