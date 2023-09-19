import * as S from './Purchase.styles';

export function Purchase() {
  return (
    <>
      <S.PurchaseContainer>
        <S.PurchaseDay>23.09.20</S.PurchaseDay>
        <S.PurchaseInfo>
          <S.Delivery>구매확정</S.Delivery>
          <S.JustContainer>
            <S.PurchaseImage
              src={
                'https://guerrilla-s3-1.s3.ap-northeast-2.amazonaws.com/08197772-2e18-4649-badc-212c971334fe.jpg'
              }
            />
            <S.ProductInfo>
              <S.BrandName>어텀</S.BrandName>
              <S.ProductName>와이드 팬츠</S.ProductName>
              <S.Options>
                <S.Price>36,000원</S.Price>
                <S.Option>black/M</S.Option>
                <S.Quantity>1개</S.Quantity>
              </S.Options>
            </S.ProductInfo>
          </S.JustContainer>
        </S.PurchaseInfo>
      </S.PurchaseContainer>
    </>
  );
}
