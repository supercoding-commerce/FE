import { Key, useState } from 'react';
import { cx } from '@emotion/css';

import Icon, { IconNameType } from '@/components/common/Icon';
// import { cx } from '@emotion/css';
import * as S from './Category.styles';

export type CategoryBoxProps = {
  icon: IconNameType | string;
  title: string;
  optionTitle?: subOption[] | undefined;
  /** { onclick?: () => void }[] : options 배열의 각 요소가 onclick 함수를 가질 수 있지만, onclick이 없는 경우도 허용 */
  options?: { onclick?: () => void }[] | undefined;
};

export type subOption = {
  icon: IconNameType;
  title: string;
  subOptions?: { onclick?: () => void }[] | undefined;
};

const Category = ({ icon, title, optionTitle, options }: CategoryBoxProps) => {
  const [isClicked, setIsClicked] = useState(false);

  const _click = `click_${isClicked}`;

  const clickHandle = () => {
    return isClicked === false ? setIsClicked(true) : setIsClicked(false);
  };

  return (
    <>
      <S.Category
        className={cx(_click)}
        onClick={() => {
          clickHandle();
        }}
      >
        <div className="left">
          <div className="category_icon">
            {isClicked ? <Icon name={icon} color="green" /> : <Icon name={icon} color="black" />}
          </div>
          <div className={cx(_click, 'category_title')}>{title}</div>
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
        ? optionTitle?.map(
            (
              item: {
                icon: string;
                title: string | undefined;
                subOptions?: { onclick?: () => void }[] | undefined;
              },
              idx: Key | null | undefined,
            ) => {
              return (
                <S.CategoryOption
                  onClick={() => {
                    if (
                      item.subOptions &&
                      item.subOptions.length > 0 &&
                      item.subOptions[0].onclick
                    ) {
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
            },
          )
        : null}
    </>
  );
};

export default Category;
