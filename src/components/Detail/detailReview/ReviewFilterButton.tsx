import { useState } from 'react';

import Button from '@/components/common/Button/Button';
import { theme } from '@/styles/theme';
import * as S from '../Detail.styles';

type FilterProps = {
  // handleArrangement: (index: number) => void;
  byRating: () => void;
};

const ReviewFilterButton = ({ byRating }: FilterProps) => {
  const [filter, setFilter] = useState([
    {
      title: '최신순',
      status: true,
    },
    {
      title: '별점순',
      status: false,
    },
  ]);

  const handleButtonClick = (index: number) => {
    const updatedFilter = filter.map((item, idx) => {
      if (idx === index) {
        return {
          ...item,
          status: true,
        };
      } else {
        return {
          ...item,
          status: false,
        };
      }
    });
    setFilter(updatedFilter);
    // handleArrangement(index);

    if (index === 1) byRating();
  };

  return (
    <S.DetailRevieFilterButton>
      {filter.map((item, idx) => (
        <Button
          key={idx}
          variant={item.status ? 'contained' : 'outlined'}
          size="small"
          backgroundColor={item.status ? theme.color.black : undefined}
          color={item.status ? theme.color.green : theme.color.black}
          onClick={() => handleButtonClick(idx)}
        >
          {item.title}
        </Button>
      ))}
    </S.DetailRevieFilterButton>
  );
};

export default ReviewFilterButton;
