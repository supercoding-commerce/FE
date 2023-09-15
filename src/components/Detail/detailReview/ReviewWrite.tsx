import Button from '@/components/common/Button/Button';
import Icon from '@/components/common/Icon';
import { Rating } from '@/components/common/Rating/Rating';
import { Textarea } from '@/components/common/Textarea';
import { theme } from '@/styles/theme';
import * as S from '../Detail.styles';

const ReviewWrite = () => {
  return (
    <S.DetailReviewWrite>
      <div className="Review_write_container">
        <div className="review_top">
          <Rating size={20} />
          <Icon name="IconX" />
        </div>
        <div className="review_middle">
          <div className="textarea_wrapper">
            <Textarea
              placeholder="리뷰를 작성해주세요"
              style={{ resize: 'none', backgroundColor: theme.color.white }}
            />
          </div>
          <div className="reviewImg_wrapper">
            <span>이미지 첨부</span>
            <div className="review_filebox">
              <label htmlFor="file">파일 찾기</label>
              <input className="upload-name" value="첨부파일" placeholder="첨부파일" />
              <input type="file" id="file" />
            </div>
          </div>
        </div>
        <div className="review_bottom">
          <Button
            variant="contained"
            size="medium"
            backgroundColor={theme.color.black}
            color={theme.color.green}
          >
            작성 완료
          </Button>
        </div>
      </div>
    </S.DetailReviewWrite>
  );
};

export default ReviewWrite;
