import { useEffect } from 'react';

import { getPointHistory } from '@/apis/point.ts';
import * as S from './PointHistory.styles';

export function PointHistory() {
  useEffect(() => {
    getPointHistory().then((data) => console.log(data));
  }, []);

  return <S.PointHistoryWrapper>PointHistory</S.PointHistoryWrapper>;
}
