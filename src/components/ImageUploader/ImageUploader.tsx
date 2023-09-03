import { ChangeEvent, Dispatch, SetStateAction } from 'react';

import Icon from '@/components/common/Icon.tsx';
import * as S from './ImageUploader.styles.tsx';

type ImageUploaderProps = {
  images: File[];
  setImages: Dispatch<SetStateAction<File[]>>;
};
export function ImageUploader({ images, setImages }: ImageUploaderProps) {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;
    const enrolledImageCount = images.length || 0;
    const addedImageCount = files?.length || 0;

    if (enrolledImageCount + addedImageCount > 5) {
      alert('이미지는 최대 5개만 가능합니다.');
      return;
    }

    if (files) {
      setImages((prev) => prev.concat(Array.from(files)));
    }
  };

  return (
    <S.ImageUploadWrapper>
      <S.ImageInput
        type="file"
        accept="image/*"
        id="inpuit-upload"
        multiple
        onChange={handleChange}
      />
      <S.ImageLabel htmlFor="inpuit-upload">
        <Icon name="IconCamera" size={50} />
        <p>{images?.length || 0}/5</p>
      </S.ImageLabel>

      <S.ImagePreviewWrapper>
        {images.map((image, index) => (
          <S.ImageWrapper key={index}>
            <S.Image src={URL.createObjectURL(image)} alt="image" />
          </S.ImageWrapper>
        ))}
      </S.ImagePreviewWrapper>
    </S.ImageUploadWrapper>
  );
}
