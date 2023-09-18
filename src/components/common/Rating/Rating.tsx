import { useEffect, useState } from 'react';

import Icon, { IconProps } from '@/components/common/Icon.tsx';
import * as S from './Rating.styles.tsx';

type RatingProps = {
  readOnly?: boolean;
  onChange?: (count: number) => void;
  count?: number;
  size?: IconProps['size'];
};

const RATING_ARRAY = [1, 2, 3, 4, 5];

/**
 * @desc 별점 컴포넌트
 * @example
 * <Rating count={ratingStar} onChange={handleChangeRating} /> <span>{ratingStar}</span>
 * <Rating readOnly count={2} />
 */
export function Rating({ readOnly, count, size = 24, onChange }: RatingProps) {
  const [hoverCount, setHoverCount] = useState<number>(0);
  const [filledCount, setFilledCount] = useState<number>(count || 0);

  const handleClickRate = (count: number) => {
    if (readOnly) return;

    const ratedCount = Number(count);
    onChange && onChange(ratedCount);
    setFilledCount(ratedCount);
  };

  useEffect(() => {
    if (count) {
      setFilledCount(count);
    }
  }, [count]);

  return (
    <S.StarContainer>
      {RATING_ARRAY.map((currentCount) => (
        <Icon
          name="IconRate"
          size={size}
          key={currentCount}
          fill={filledCount >= currentCount || hoverCount >= currentCount ? 'brand' : 'current'}
          onMouseEnter={() => !readOnly && setHoverCount(currentCount)}
          onMouseLeave={() => !readOnly && setHoverCount(0)}
          onClick={() => handleClickRate(currentCount)}
          style={{ cursor: 'pointer' }}
        />
      ))}
    </S.StarContainer>
  );
}
