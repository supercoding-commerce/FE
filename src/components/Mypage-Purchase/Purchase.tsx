import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { getPurchaseHistory } from '@/apis/mypage';
import * as S from './Purchase.styles';

export type PurchaseHistory = {
  [date: string]: {
    productId: number;
    orderState: string;
    imageUrl: string;
    brandName: string;
    productName: string;
    price: number;
    options: string[];
    quantity: number;
  }[];
};

export function Purchase() {
  const [purchase, setPurchase] = useState<PurchaseHistory>({});
  const navigate = useNavigate();

  useEffect(() => {
    getPurchaseHistory().then((result) => {
      const resultData = result.data[0];
      setPurchase(resultData);
    });
  }, []);

  return (
    <S.PurchaseHistoryContainer>
      <S.PurchaseContainer>
        {Object.keys(purchase).map((date: string, idx: number) => (
          <>
            <S.PurchaseDay key={idx}>{date}</S.PurchaseDay>
            {purchase[date].map((item, idx: number) => {
              const option = JSON.parse(item.options as unknown as string);
              return (
                <S.PurchaseInfo key={idx}>
                  <S.Delivery>{item.orderState}</S.Delivery>
                  <S.ProductInfoContainer>
                    <S.ProductImage
                      src={item.imageUrl}
                      onClick={() => {
                        navigate(`/product/${item.productId}`);
                      }}
                    />
                    <S.ProductInfo>
                      <S.BrandName>{item.brandName}</S.BrandName>
                      <S.ProductName>{item.productName}</S.ProductName>
                      <S.Options>
                        <S.Price>{item.price.toLocaleString()}원</S.Price>
                        <S.Option>{option}</S.Option>
                        <S.Quantity>{item.quantity}개</S.Quantity>
                      </S.Options>
                    </S.ProductInfo>
                  </S.ProductInfoContainer>
                </S.PurchaseInfo>
              );
            })}
          </>
        ))}
      </S.PurchaseContainer>
    </S.PurchaseHistoryContainer>
  );
}
