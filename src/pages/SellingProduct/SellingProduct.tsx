import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { useGetSellingProduct } from '@/queries/order/query.ts';
import * as S from './SellingProduct.styles';

export function SellingProduct() {
  const navigate = useNavigate();

  const { data: sellingProducts } = useGetSellingProduct();

  const handleNavigateProduct = useCallback((productId: number) => {
    navigate(`/product/${productId}`);
  }, []);

  if (!sellingProducts) return;
  return (
    <S.SellingProductWrapper>
      {sellingProducts.map((product, index) => (
        <S.ProductInfoContainer key={index}>
          <S.ProductImage
            src={product.thumbnailUrl}
            onClick={() => handleNavigateProduct(product.productId)}
          />
          <S.ProductInfo>
            <S.BrandName>{product.shopName}</S.BrandName>
            <S.ProductName onClick={() => handleNavigateProduct(product.productId)}>
              {product.name}
            </S.ProductName>
            <S.Options>
              <S.Price>{product.price.toLocaleString()}원</S.Price>
            </S.Options>
          </S.ProductInfo>
        </S.ProductInfoContainer>
      ))}
    </S.SellingProductWrapper>
  );
}
