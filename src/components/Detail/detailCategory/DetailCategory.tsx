import * as S from '../Detail.styles';

type CategoryProps = {
  handleCategory: (category: string) => void;
};

const DetailCategory = ({ handleCategory }: CategoryProps) => {
  const category = ['상품정보', '리뷰'];

  return (
    <S.DetailCategory>
      <div className="category_container">
        {category.map((item, idx) => {
          return (
            <div
              key={idx}
              className="category_wrapper"
              onClick={() => {
                handleCategory(item);
              }}
            >
              <span>{item}</span>
            </div>
          );
        })}
      </div>
    </S.DetailCategory>
  );
};

export default DetailCategory;
