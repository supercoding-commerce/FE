import { useState } from 'react';

import Button from '@/components/common/Button/Button.tsx';
import { Input } from '@/components/common/Input/Input.tsx';
import { Radio } from '@/components/common/Radio/Radio.tsx';
import { RadioGroup } from '@/components/common/Radio/RadioGroup.tsx';
import SelectBox from '@/components/common/SelectBox/SelectBox.tsx';
import { Textarea } from '@/components/common/Textarea.tsx';
import TextField from '@/components/common/TextField/TextField.tsx';
import { ImageUploader } from '@/components/ImageUploader/ImageUploader.tsx';
import { OptionAdder } from '@/components/OptionAdder/OptionAdder.tsx';
import { AGE_CATEGORY, CATEGORY_PRODUCT } from '@/const';
import useInputs from '@/hooks/useInputs.ts';
import { ProductFormType } from '@/models/product.ts';
import * as S from './ProductForm.styles.tsx';

// GYU-TODO: 입력마다 리렌더링되는 부분 성능 개선!

type ProductFormProps = {
  productForm: ProductFormType;
};
export function ProductForm({ productForm }: ProductFormProps) {
  const [images, setImages] = useState<File[]>(productForm.imageFiles || []);
  const [options, setOptions] = useState<string[]>(productForm.options || []);

  const { form, onChange, onChangeForm } = useInputs<ProductFormType>(productForm);

  const handleClickAddProduct = () => {
    // GYU-TODO: 상품 등록 기능 추가하기
    const addForm = {
      ...form,
      price: Number(form.price),
      leftAmount: Number(form.leftAmount),
      images,
      options,
    };

    alert('상품 추가하기');
    console.log('addForm 형태', addForm);
  };

  return (
    <S.AddProductWrapper>
      <S.AddProductContainer>
        <TextField labelId={'name'} label={'상품명'} size={'medium'}>
          <Input
            type="text"
            id={'name'}
            name={'name'}
            value={form.name}
            onChange={onChange}
            autoFocus
            isFullWidth
          />
        </TextField>
        <TextField labelId={'content'} label={'상품정보'} size={'medium'}>
          <Textarea id={'content'} name={'content'} value={form.content} onChange={onChange} />
        </TextField>
        <TextField labelId={'price'} label={'가격'} size={'medium'}>
          <Input
            type="number"
            id={'price'}
            name={'price'}
            value={form.price}
            onChange={onChange}
            min={1}
            isFullWidth
          />
        </TextField>
        <TextField labelId={'stock'} label={'재고 수량'} size={'medium'}>
          <Input
            type="number"
            id={'stock'}
            name={'leftAmount'}
            value={form.leftAmount}
            onChange={onChange}
            min={1}
            isFullWidth
          />
        </TextField>
        <TextField labelId={'gender'} label={'성별'} size={'medium'}>
          <RadioGroup>
            <Radio
              isCircle
              labelId={'common'}
              label={'공용'}
              name="genderCategory"
              value={'COMMON'}
              checked={form.genderCategory === 'COMMON'}
              onChange={onChange}
            />
            <Radio
              isCircle
              label={'여자'}
              labelId={'female'}
              name="genderCategory"
              value={'FEMALE'}
              checked={form.genderCategory === 'FEMALE'}
              onChange={onChange}
            />
            <Radio
              isCircle
              label={'남자'}
              labelId={'male'}
              name="genderCategory"
              value={'MALE'}
              checked={form.genderCategory === 'MALE'}
              onChange={onChange}
            />
          </RadioGroup>
        </TextField>
        <TextField labelId={'age'} label={'나이'} size={'medium'}>
          <SelectBox
            height={'45px'}
            optionList={AGE_CATEGORY}
            onChange={(option) => onChangeForm('ageCategory', option)}
            value={form.ageCategory}
          />
        </TextField>
        <TextField labelId={'category'} label={'카테고리'} size={'medium'}>
          <SelectBox
            height={'45px'}
            optionList={CATEGORY_PRODUCT}
            onChange={(option) => {
              onChangeForm('productCategory', option);
            }}
            value={form.productCategory}
          />
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
          disabled={!isValid(form, images, options)}
          onClick={handleClickAddProduct}
        >
          등록하기
        </Button>
      </S.AddProductContainer>
    </S.AddProductWrapper>
  );
}

function isValid(form: ProductFormType, images: File[], options: string[]) {
  const isFormValid = Object.values(form).every((value) => !!value);
  if (form.price == 0 || form.leftAmount == 0) {
    return false;
  }
  return isFormValid && images.length > 0 && options.length > 0;
}
