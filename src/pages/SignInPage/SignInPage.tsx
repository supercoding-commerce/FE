import { useNavigate } from 'react-router-dom';

import Button from '@/components/common/Button/Button';
import Icon from '@/components/common/Icon';
import { Input } from '@/components/common/Input/Input';
import useInputs from '@/hooks/useInputs';
import useValid from '@/hooks/useValid';
import * as S from '@/pages/SignInPage/SignInPage.styles';
import { theme } from '@/styles/theme';

const SignInPage = () => {
  const navigate = useNavigate();

  // 임시 로그인을 위한 유저 데이터 - 삭제 예정
  const seller = {
    email: 'seller@naver.com',
    password: 'qwer1234',
  };
  const buyer = {
    email: 'buyer@naver.com',
    password: 'qwer1234',
  };

  const {
    form: { email, password },
    onChange: inputChangeHandler,
  } = useInputs({
    email: '',
    password: '',
  });

  const { isValid } = useValid({ email, password });

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // 임시 로그인 성공 테스트 - 삭제 예정
    if (seller.email === email && seller.password === password) {
      alert('판매자 로그인 성공');
      navigate('/');
      return;
    }

    if (buyer.email === email && buyer.password === password) {
      alert('구매자 로그인 성공');
      navigate('/');
      return;
    }
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
            value={email}
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
            value={password}
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
          disabled={!isValid.isEmail || !isValid.isPassword}
          backgroundColor={theme.color.brand}
        >
          <S.FontBox>로그인</S.FontBox>
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
