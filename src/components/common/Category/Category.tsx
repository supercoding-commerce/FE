import { useState } from 'react';
import { cx } from '@emotion/css';

import Icon, { IconNameType } from '@/components/common/Icon';
import * as S from './Category.styles';

export type CategoryProps = {
  icon: IconNameType;
  title: string;
  onClick?: () => void;
  options?: Option[];
};

export type Option = {
  icon: IconNameType;
  title: string;
  onClick?: () => void;
};

const Category = ({ icon, title, options, onClick }: CategoryProps) => {
  const [isClicked, setIsClicked] = useState(false);

  const clickHandle = () => {
    setIsClicked((prevIsClicked) => !prevIsClicked);
    onClick && onClick();
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
      {isClicked &&
        options?.map((item, idx) => {
          return (
            <S.CategoryOption
              onClick={() => {
                item.onClick && item.onClick();
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
        })}
    </>
  );
};

export default Category;
