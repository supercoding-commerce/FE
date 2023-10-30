import { Dispatch, SetStateAction } from 'react';

import Button from '@/components/common/Button/Button';
import { theme } from '@/styles/theme';
import * as S from '../Detail.styles';

type Filter = '별점' | '최신순';

type FilterProps = {
  filter: Filter;
  onChangeFilter: Dispatch<SetStateAction<'별점' | '최신순'>>;
};

const FILTER: Filter[] = ['별점', '최신순'];
const ReviewFilterButton = ({ filter, onChangeFilter }: FilterProps) => {
  return (
    <S.DetailRevieFilterButton>
      {FILTER.map((item, idx) => (
        <Button
          key={idx}
          size={'small'}
          onClick={() => onChangeFilter(() => item)}
          variant={filter === item ? 'contained' : 'outlined'}
          backgroundColor={filter === item ? theme.color.black : undefined}
          color={filter === item ? theme.color.green : theme.color.black}
        >
          {item}
        </Button>
      ))}
    </S.DetailRevieFilterButton>
  );
};

export default ReviewFilterButton;
