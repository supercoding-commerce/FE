import { useState } from 'react';
import styled from '@emotion/styled';

import Button from '@/components/common/Button/Button.tsx';
import { Input } from '@/components/common/Input/Input.tsx';
import TextField from '@/components/common/TextField/TextField.tsx';
import { ImageUploader } from '@/components/ImageUploader/ImageUploader.tsx';
import { OptionAdder } from '@/components/OptionAdder/OptionAdder.tsx';
import * as S from './AddProduct.styles';

export function AddProduct() {
  const [images, setImages] = useState<File[]>([]);
  const [options, setOptions] = useState<string[]>([]);

  // GYU-TODO: 모바일 환경 또는 모바일 사이즈면 alert 및 redirect

  return (
    <S.AddProductWrapper>
      <AddProductContainer>
        <TextField labelId={'name'} label={'상품명'} size={'medium'}>
          <Input type="text" id={'name'} isFullWidth autoFocus />
        </TextField>

        <TextField labelId={'info'} label={'상품정보'} size={'medium'}>
          <Input type="text" id={'info'} isFullWidth />
        </TextField>

        <TextField labelId={'price'} label={'가격'} size={'medium'}>
          <Input type="number" id={'price'} isFullWidth />
        </TextField>

        <TextField labelId={'stock'} label={'재고 수량'} size={'medium'}>
          <Input type="number" id={'stock'} min={1} isFullWidth />
        </TextField>

        <TextField labelId={'images'} label={'이미지'} size={'medium'}>
          <ImageUploader images={images} setImages={setImages} max={5} />
        </TextField>

        {/* 컬러 사이즈 등록 */}
        <TextField labelId={'option'} label={'컬러 / 사이즈 등록'} size={'medium'}>
          <OptionAdder options={options} setOptions={setOptions} />
        </TextField>

        <Button
          variant="main"
          size="large"
          width={'248px'}
          height={'60px'}
          style={{ fontSize: '24px', margin: '0 auto' }}
        >
          등록하기
        </Button>
      </AddProductContainer>
    </S.AddProductWrapper>
  );
}

const AddProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  gap: 20px;
`;
