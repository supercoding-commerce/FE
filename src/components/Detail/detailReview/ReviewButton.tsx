import Button from '@/components/common/Button/Button';
import { theme } from '@/styles/theme';
import * as S from '../Detail.styles';

const ReviewButton = () => {
  return (
    <S.DetailReviewButton>
      <Button
        variant="contained"
        size="small"
        backgroundColor={theme.color.black}
        color={theme.color.green}
      >
        작성하기
      </Button>
    </S.DetailReviewButton>
  );
};

export default ReviewButton;
