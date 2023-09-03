import { useState } from 'react';

import { ImageUploader } from '@/components/ImageUploader/ImageUploader.tsx';
import * as S from './AddProduct.styles';

export function AddProduct() {
  const [images, setImages] = useState<File[]>([]);

  return (
    <S.AddProductWrapper>
      <label htmlFor="">
        <input type="text" />
        <span>상품명</span>
      </label>
      <ImageUploader images={images} setImages={setImages} />
    </S.AddProductWrapper>
  );
}
