import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';

import { signIn } from '@/apis/user';
import Button from '@/components/common/Button/Button';
import Icon from '@/components/common/Icon';
import { Input } from '@/components/common/Input/Input';
import { localStorageKey } from '@/constants';
import useInputs from '@/hooks/useInputs';
import * as S from '@/pages/SignInPage/SignInPage.styles';
import { userState } from '@/recoil/userState';
import { theme } from '@/styles/theme';
import { getItem } from '@/utils/localstorage';
import { parseJwt } from '@/utils/parseJwt';
// TODO-YD: 버튼 활성화유지를 위해 잠시 주석처리
// import { validateEmail, validatePassword } from '@/utils/validate';

export interface userInfoProps {
  email: string;
  password: string;
}

const SignInPage = () => {
  const navigate = useNavigate();
  const setUser = useSetRecoilState(userState);

  const { form, onChange: inputChangeHandler } = useInputs<userInfoProps>({
    email: '',
    password: '',
  });

  // TODO-YD: 버튼 활성화유지를 위해 잠시 주석처리
  // const isValid = validateEmail(form.email) && validatePassword(form.password);

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signIn(form).then((result) => {
      if (result.status === 200) {
        const accessToken = getItem<string>(localStorageKey.auth);
        if (accessToken) {
          const userData = parseJwt(accessToken);
          setUser({
            email: userData.sub,
            role: userData.auth,
          });
          navigate('/');
        }
      }
    });
  };

  const kakaoLogin = () => {
    console.log('카카오 로그인 링크');
  };

  return (
    <S.SignInContainer>
      <S.SignInLogo>로고</S.SignInLogo>
      <S.SignInForm onSubmit={submitHandler}>
        <div>
          <label htmlFor="email">ID</label>
          <Input
            onChange={inputChangeHandler}
            value={form.email}
            name="email"
            id="email"
            type="email"
            variant="underline"
            isFullWidth
            placeholder="아이디를 입력해주세요."
          />
        </div>
        <div>
          <label htmlFor="password">PW</label>
          <Input
            onChange={inputChangeHandler}
            value={form.password}
            name="password"
            id="password"
            type="password"
            variant="underline"
            isFullWidth
            placeholder="패스워드를 입력해주세요."
          />
        </div>
        <Button
          variant="contained"
          isFullWidth
          size="large"
          height={'64px'}
          // TODO-YD : 현재 테스트용 계정의 비밀번호가 유효성검사를 통과하지 않아서 임시로 disabled를 풀어놨습니다.
          // disabled={!isValid}
          backgroundColor={theme.color.brand}
        >
          로그인
        </Button>
      </S.SignInForm>
      <S.OrBox>
        <S.LineDiv />
        <span>OR</span>
        <S.LineDiv />
      </S.OrBox>
      <Button
        variant="contained"
        size="large"
        height={'64px'}
        backgroundColor="#FEE608"
        isFullWidth
        onClick={kakaoLogin}
      >
        <S.KakaoFontBox>
          <Icon name="IconKakao" size={19} />
          <span>카카오 로그인</span>
        </S.KakaoFontBox>
      </Button>
    </S.SignInContainer>
  );
};

export default SignInPage;
