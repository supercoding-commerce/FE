import { useState } from 'react';
import { cx } from '@emotion/css';

import Icon, { IconNameType } from '@/components/common/Icon';
import * as S from './Category.styles';

export type CategoryBoxProps = {
  icon: IconNameType;
  title: string;
  onClick?: () => void;
  optionTitle?: subOption[];

  /** { onclick?: () => void }[] : options 배열의 각 요소가 onclick 함수를 가질 수 있지만, onclick이 없는 경우도 허용 */
  // options?: { onclick?: () => void }[] | undefined;
};

export type subOption = {
  icon: IconNameType;
  title: string;
  subOptions?: { onclick?: () => void }[] | undefined;
};

/** 상위 카테고리에서 하위 카테고리 여는 로직 이외의 기능이 필요하다면 말씀해주세요*/
const Category = ({ icon, title, optionTitle, options, onClick }: CategoryBoxProps) => {
  const [isClicked, setIsClicked] = useState(false);

  const clickHandle = () => {
    setIsClicked((prevIsClicked) => !prevIsClicked);
    onClick && onClick();
    // if (options && options.length > 0 && options[0].onclick) {
    //   options[0].onclick();
    // }
  };

  return (
    <>
      <S.Category
        className={cx({
          ['active']: isClicked,
        })}
        onClick={() => clickHandle()}
      >
        <div className="left">
          <div className="category_icon">
            {isClicked ? <Icon name={icon} color="green" /> : <Icon name={icon} color="black" />}
          </div>
          <div
            className={cx('category_title', {
              ['active']: isClicked,
            })}
          >
            {title}
          </div>
        </div>
        <div className="right">
          <div className="category_arrow">
            {isClicked ? (
              <Icon name="IconArrowDown" color="green" />
            ) : (
              <Icon name="IconArrowDown" color="black" />
            )}
          </div>
        </div>
      </S.Category>
      {isClicked && optionTitle !== undefined
        ? optionTitle?.map((item, idx) => {
            return (
              <S.CategoryOption
                onClick={() => {
                  if (item.subOptions && item.subOptions.length > 0 && item.subOptions[0].onclick) {
                    item.subOptions[0].onclick();
                  }
                }}
                key={idx}
              >
                <div className="left">
                  <div className="category_icon">
                    <Icon name={item.icon} color="black" />
                  </div>
                  <div className="category_title">{item.title}</div>
                </div>
                <div className="right">
                  <div className="category_arrow">
                    <Icon name="IconArrowRight" color="black" />
                  </div>
                </div>
              </S.CategoryOption>
            );
          })
        : null}
    </>
  );
};

export default Category;
