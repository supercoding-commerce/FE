import { ChangeEvent, Dispatch, SetStateAction } from 'react';

import Icon from '@/components/common/Icon.tsx';
import * as S from './ImageUploader.styles.tsx';
import { ThumbnailTitle } from './ImageUploader.styles.tsx';

type ImageUploaderProps = {
  images: File[];
  setImages: Dispatch<SetStateAction<File[]>>;
  /** 등록할 수 있는 최대 이미지 수 */
  max?: number;
};
export function ImageUploader({ images, setImages, max = 1 }: ImageUploaderProps) {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;
    const enrolledImageCount = images.length || 0;
    const addedImageCount = files?.length || 0;

    if (enrolledImageCount + addedImageCount > max) {
      alert(`이미지는 최대 ${max}개만 가능합니다.`);
      return;
    }

    if (files) {
      setImages((prev) => prev.concat(Array.from(files)));
    }
  };

  const handleDeleteImage = (selectedIndex: number) => {
    setImages(() => images.filter((_, index) => index !== selectedIndex));
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
        <p>
          {images?.length || 0} / {max}
        </p>
      </S.ImageLabel>

      <S.ImagePreviewWrapper>
        {images.map((image, index) => (
          <S.ImageWrapper key={index}>
            <S.Image src={URL.createObjectURL(image)} alt="image" />
            <S.DeleteIcon onClick={() => handleDeleteImage(index)} />
            {index === 0 && <ThumbnailTitle>대표이미지</ThumbnailTitle>}
          </S.ImageWrapper>
        ))}
      </S.ImagePreviewWrapper>
    </S.ImageUploadWrapper>
  );
}
