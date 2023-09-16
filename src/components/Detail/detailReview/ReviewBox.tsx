import { Rating } from '@/components/common/Rating/Rating';
import * as S from '../Detail.styles';

const ReviewBox = () => {
  return (
    <S.DetailReviewBox>
      <div className="review_box_container">
        <div className="review_box_top">
          <div className="name_wrapper">
            <span>내가 바로 왕 님</span>
          </div>
          <div className="rating_wrapper">
            <Rating size={20} readOnly />
          </div>
        </div>
        <div className="review_box_middle">
          <img src="" alt="리뷰 이미지" />
        </div>
        <div className="review_box_bottom">
          <div className="option_wrapper">
            <span>선택 옵션</span>
            <span>아이보리 / Free</span>
          </div>
          <div className="review_content">
            <span>색상이 마음에 들고 사이즈도 마음에 들고 모든게 마음에 드는 옷</span>
          </div>
        </div>
      </div>
    </S.DetailReviewBox>
  );
};

export default ReviewBox;
