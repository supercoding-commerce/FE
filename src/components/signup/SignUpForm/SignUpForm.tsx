import Button from '@/components/common/Button/Button';
import * as S from '@/components/signup/SignUpForm/SignUpForm.styles';
import { theme } from '@/styles/theme';

interface SignUpFormProps {
  pathname: string;
}

const SignUpForm = ({ pathname }: SignUpFormProps) => {
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <S.SignUpFormContainer onSubmit={submitHandler}>
      <S.TextFieldWrapper>
        <S.InputWrapper>
          <label htmlFor="email">ID</label>
          <input type="text" id="email" name="email" placeholder="아이디를 입력해주세요" />
        </S.InputWrapper>
        <Button size="small" height={'25px'} variant="main">
          중복검사
        </Button>
      </S.TextFieldWrapper>
      <S.InputWrapper>
        <label htmlFor="password">PW</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="패스워드를 입력해주세요"
        />
      </S.InputWrapper>
      <S.InputWrapper>
        <label htmlFor="passwordConfirm">PW 확인</label>
        <input
          type="password"
          id="passwordConfirm"
          name="passwordConfirm"
          placeholder="패스워드를 한번 더 입력해주세요"
        />
      </S.InputWrapper>
      <S.InputWrapper>
        <label htmlFor="username">이름</label>
        <input type="text" id="username" name="username" placeholder="이름을 입력해주세요" />
      </S.InputWrapper>
      <S.InputWrapper>
        <label htmlFor="phoneNumber">전화번호</label>
        <input
          type="text"
          id="phoneNumber"
          name="phoneNumber"
          placeholder="전화번호를 입력해주세요"
        />
      </S.InputWrapper>
      {pathname === '/signup/buyer' ? (
        <>
          <S.TextFieldWrapper>
            <S.InputWrapper>
              <label htmlFor="nickName">닉네임</label>
              <input
                type="text"
                id="nickName"
                name="nickName"
                placeholder="닉네임을 입력해주세요"
              />
            </S.InputWrapper>
            <Button size="small" height={'25px'} variant="main">
              중복검사
            </Button>
          </S.TextFieldWrapper>
          <S.InputWrapper>
            <label htmlFor="address">배송지</label>
            <input type="text" id="address" name="address" placeholder="배송지를 추가해주세요" />
          </S.InputWrapper>
          <S.InputWrapper>
            <label htmlFor="age">나이</label>
            <input type="number" id="age" name="age" placeholder="숫자만 입력해주세요" />
          </S.InputWrapper>
          <S.InputWrapper>
            <label>성별</label>
            <S.RadioBox>
              <input type="radio" id="female" name="gender" checked />
              <label htmlFor="female">여자</label>
              <input type="radio" id="male" name="gender" />
              <label htmlFor="male">남자</label>
            </S.RadioBox>
          </S.InputWrapper>
        </>
      ) : (
        <>
          <S.TextFieldWrapper>
            <S.InputWrapper>
              <label htmlFor="shopName">쇼핑몰 이름</label>
              <input
                type="text"
                id="shopName"
                name="shopName"
                placeholder="쇼핑몰 이름을 입력해주세요"
              />
            </S.InputWrapper>
            <Button size="small" height={'25px'} variant="main">
              중복검사
            </Button>
          </S.TextFieldWrapper>
          <S.InputWrapper>
            <label htmlFor="shopAddress">
              배송지
              <Button variant="outlined" size="xsmall" color={theme.color.blue} height={'25px'}>
                주소추가
              </Button>
            </label>
            <input
              type="text"
              id="shopAddress"
              name="shopAddress"
              placeholder="쇼핑몰 주소를 추가해주세요"
            />
          </S.InputWrapper>
        </>
      )}
      <Button size="large" variant="contained" backgroundColor={theme.color.brand} height={'64px'}>
        회원가입
      </Button>
    </S.SignUpFormContainer>
  );
};

export default SignUpForm;
