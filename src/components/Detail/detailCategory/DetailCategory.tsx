import * as S from '../Detail.styles';

const DetailCategory = () => {
  return (
    <S.DetailCategory>
      <div className="category_container">
        <div className="category_wrapper">
          <span>상품정보</span>
        </div>
        <div className="category_wrapper">
          <span>리뷰</span>
        </div>
      </div>
    </S.DetailCategory>
  );
};

export default DetailCategory;
