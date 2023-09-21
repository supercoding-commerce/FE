import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';

import { getKakaoLoginCode } from '@/apis/user';
import { localStorageKey } from '@/constants';
import { userState } from '@/recoil/userState';
import { getItem } from '@/utils/localstorage';
import { parseJwt } from '@/utils/parseJwt';

const KakaoCallbackPage = () => {
  const setUser = useSetRecoilState(userState);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const code = searchParams.get('code');

  useEffect(() => {
    if (!code) return;
    getKakaoLoginCode(code).then((result) => {
      if (result.status === 200) {
        const accessToken = getItem<string>(localStorageKey.accessToken);
        if (accessToken) {
          const userData = parseJwt(accessToken);
          setUser({
            email: userData.sub,
            role: userData.auth,
          });
        }
        navigate('/');
      }
    });
  }, []);

  return <div></div>;
};

export default KakaoCallbackPage;
