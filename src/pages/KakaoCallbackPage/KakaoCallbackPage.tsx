import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { getKakaoLoginCode } from '@/apis/user';

const KakaoCallbackPage = () => {
  const [searchParams] = useSearchParams();
  const code = searchParams.get('code');

  useEffect(() => {
    if (!code) return;
    getKakaoLoginCode(code).then((result) => console.log(result));
  });

  return <div></div>;
};

export default KakaoCallbackPage;
