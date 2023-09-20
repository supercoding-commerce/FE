import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { getSoldHistory } from '@/apis/mypage';
import * as S from './SoldPage.styles';

export type SoldHistory = {
  [date: string]: {
    productId: number;
    orderState: string;
    imageUrl: string;
    productName: string;
    price: number;
    options: string[];
    quantity: number;
  }[];
};

export function SoldPage() {
  const [sold, setSold] = useState<SoldHistory>({});
  const navigate = useNavigate();

  useEffect(() => {
    getSoldHistory().then((result) => {
      const resultData = result.data[0];
      setSold(resultData);
    });
  }, []);

  return (
    <S.SoldHistoryContainer>
      {Object.keys(sold).map((date: string, idx: number) => (
        <>
          <S.SoldDay key={idx}>{date}</S.SoldDay>
          {sold[date].map((item, idx: number) => {
            const option = JSON.parse(item.options as unknown as string);
            return (
              <S.SoldInfo key={idx}>
                <S.Delivery>{item.orderState}</S.Delivery>
                <S.ProductInfoContainer>
                  <S.ProductImage
                    src={item.imageUrl}
                    onClick={() => {
                      navigate(`/product/${item.productId}`);
                    }}
                  />
                  <S.ProductInfo>
                    <S.ProductName>{item.productName}</S.ProductName>
                    <S.Options>
                      <S.Price>{item.price.toLocaleString()}원</S.Price>
                      <S.Option>{option}</S.Option>
                      <S.Quantity>{item.quantity}개</S.Quantity>
                    </S.Options>
                  </S.ProductInfo>
                </S.ProductInfoContainer>
              </S.SoldInfo>
            );
          })}
        </>
      ))}
    </S.SoldHistoryContainer>
  );
}
