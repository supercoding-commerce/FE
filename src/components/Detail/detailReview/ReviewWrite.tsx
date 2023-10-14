import { ChangeEvent, useCallback, useEffect, useState } from 'react';

import { postReview } from '@/apis/review';
import Button from '@/components/common/Button/Button';
import Icon from '@/components/common/Icon';
import { Rating } from '@/components/common/Rating/Rating';
import SelectBox from '@/components/common/SelectBox/SelectBox';
import { Textarea } from '@/components/common/Textarea';
import { DetailReview } from '@/components/Detail/detailReview/Review';
import { theme } from '@/styles/theme';
import * as S from '../Detail.styles';

type writeProps = {
  orderId: string[] | null;
  stringOrderList: string[];
  productId: number;
  handleWriteButton: () => void;
  handleNewReview: (newReview: DetailReview) => void;
};

export type FormData = {
  productId: number;
  orderId: string;
  title: string;
  content: string;
  starPoint: number;
};

const ReviewWrite = ({
  stringOrderList,
  productId,
  handleWriteButton,
  handleNewReview,
}: writeProps) => {
  const [option, setOption] = useState<string>('');

  // 파일 이름을 저장할 상태를 만듭니다.
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [formData, setFormData] = useState<FormData>({
    productId: productId,
    orderId: '',
    title: '',
    content: '',
    starPoint: 0,
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // 파일을 선택할 때 호출되는 함수
  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    let selectedFile;
    if (e.target.files !== null) {
      selectedFile = e.target.files[0]; // 선택된 파일 가져오기
      if (selectedFile) {
        setSelectedFile(selectedFile); // 파일 이름을 상태에 저장
      }
    }
  };

  const handleChangeRating = (count: number) => {
    setFormData({
      ...formData,
      starPoint: count,
    });
  };

  const handleChangeOrderId = useCallback((option: string) => {
    setOption(option);
  }, []);

  useEffect(() => {
    if (option !== null) {
      const parts = option.split('-');

      setFormData({
        ...formData,
        orderId: parts[0],
      });
    }
  }, [option]);

  const handleClickAddReview = async () => {
    const reviewData = new FormData();
    reviewData.append('request', JSON.stringify({ ...formData }));
    if (selectedFile) {
      reviewData.append('multipartFile', selectedFile);
    }

    try {
      const responseData = await postReview(reviewData);
      handleNewReview(responseData);
    } catch (error) {
      console.error('Error creating review:', error);
    }
  };

  return (
    <S.DetailReviewWrite>
      <div className="Review_write_container">
        <div className="review_top">
          <Rating size={20} onChange={handleChangeRating} />
          <Icon name="IconX" cursor="pointer" onClick={handleWriteButton} />
        </div>
        <div className="review_top1">
          <SelectBox optionList={stringOrderList} onChange={handleChangeOrderId} value={option} />
        </div>
        <div className="review_middle">
          <div className="textarea_wrapper">
            <Textarea
              placeholder="리뷰를 작성해주세요"
              style={{ resize: 'none', backgroundColor: theme.color.white }}
              onChange={handleInputChange}
              name="content"
            />
          </div>
          <div className="reviewImg_wrapper">
            <span>이미지 첨부</span>
            <div className="review_filebox">
              <label htmlFor="file">파일 찾기</label>
              <input
                className="upload-name"
                value={selectedFile?.name}
                placeholder="첨부파일"
                readOnly
              />
              <input type="file" id="file" onChange={handleImageChange} multiple />
            </div>
          </div>
        </div>
        <div className="review_bottom">
          <Button
            variant="contained"
            size="medium"
            backgroundColor={theme.color.black}
            color={theme.color.green}
            onClick={() => handleClickAddReview()}
          >
            작성 완료
          </Button>
        </div>
      </div>
    </S.DetailReviewWrite>
  );
};

export default ReviewWrite;
