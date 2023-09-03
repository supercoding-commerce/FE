import { ImageUploader } from '@/components/ImageUploader/ImageUploader.tsx';
import * as S from './AddProduct.styles';

export function AddProduct() {
  return (
    <S.AddProductWrapper>
      <label htmlFor="">
        <input type="text" />
        <span>상품명</span>
      </label>

      <ImageUploader />
    </S.AddProductWrapper>
  );
}
