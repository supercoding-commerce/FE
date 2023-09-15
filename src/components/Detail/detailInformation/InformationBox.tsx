import Icon from '@/components/common/Icon';
import * as S from '../Detail.styles';

const InformationBox = () => {
  return (
    <S.DetailInformation>
      <div className="information_container">
        <div className="information_box">
          <img src="" alt="상품정보" />
        </div>
      </div>
      <div className="more_information_wrapper">
        <button>
          <span>상품 정보 펼쳐보기</span>
          <Icon name={'IconArrowDown'} color={'black'} />
        </button>
      </div>
    </S.DetailInformation>
  );
};

export default InformationBox;
