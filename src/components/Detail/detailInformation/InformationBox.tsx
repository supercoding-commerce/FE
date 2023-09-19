import { useState } from 'react';
import { cx } from '@emotion/css';

import Icon from '@/components/common/Icon';
import * as S from '../Detail.styles';

type InformationProps = {
  productImage: string[];
};

const InformationBox = ({ productImage }: InformationProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const containerClassName = cx('information_container', {
    expanded: isExpanded,
  });

  const handleMoreImageView = () => {
    setIsExpanded((prev) => !prev);
  };
  return (
    <S.DetailInformation>
      <div className={containerClassName}>
        {productImage?.map((item, idx) => {
          return (
            <div className="information_box" key={idx}>
              <img src={item} alt="상품정보" />
            </div>
          );
        })}
      </div>
      <div className="more_information_wrapper">
        <button onClick={handleMoreImageView}>
          {!isExpanded ? (
            <>
              <span>상품 정보 펼쳐보기</span>
              <Icon name={'IconArrowDown'} color={'black'} />
            </>
          ) : (
            <>
              <span>상품 정보 접기</span>
              <Icon name={'IconArrowUp'} color={'black'} />
            </>
          )}
        </button>
      </div>
    </S.DetailInformation>
  );
};

export default InformationBox;
