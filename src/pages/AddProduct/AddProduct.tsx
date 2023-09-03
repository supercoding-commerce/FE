import { useState } from 'react';

import { ImageUploader } from '@/components/ImageUploader/ImageUploader.tsx';
import { OptionAdder } from '@/components/OptionAdder/OptionAdder.tsx';
import * as S from './AddProduct.styles';

export function AddProduct() {
  const [images, setImages] = useState<File[]>([]);
  const [options, setOptions] = useState<string[]>([]);

  // GYU-TODO: 모바일 환경 또는 모바일 사이즈면 alert 및 redirect
  return (
    <S.AddProductWrapper>
      <label htmlFor="">
        <input type="text" />
        <span>상품명</span>
      </label>
      <ImageUploader images={images} setImages={setImages} />

      {/* 컬러 사이즈 등록 */}
      <OptionAdder options={options} setOptions={setOptions} />
    </S.AddProductWrapper>
  );
}
