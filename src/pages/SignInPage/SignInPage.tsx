import Button from '@/components/common/Button/Button';
import Icon from '@/components/common/Icon';
import * as S from '@/pages/SignInPage/SignInPage.styles';
import { theme } from '@/styles/theme';

const SignInPage = () => {
  return (
    <S.SignInContainer>
      <S.SignInLogo>로고</S.SignInLogo>
      <S.SignInForm
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();
        }}
      >
        <div>
          <label htmlFor="email">ID</label>
          <input type="email" id="email" name="email" placeholder="아이디를 입력해주세요." />
        </div>
        <div>
          <label htmlFor="password">PW</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="패스워드를 입력해주세요."
          />
        </div>
        <Button variant="contained" isFullWidth backgroundColor={theme.color.brand}>
          로그인
        </Button>
      </S.SignInForm>

      <Button variant="contained" isFullWidth>
        <p
          style={{
            width: '128px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Icon name="IconSearch" size={14} />
          카카오 로그인
        </p>
      </Button>
    </S.SignInContainer>
  );
};

export default SignInPage;
