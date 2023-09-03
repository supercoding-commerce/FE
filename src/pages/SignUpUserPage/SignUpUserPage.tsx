import { useLocation } from 'react-router-dom';

import SignUpForm from '@/components/signup/SignUpForm/SignUpForm';
import * as S from '@/pages/SignUpUserPage/SignUpUserPage.styles';

const SignUpUserPage = () => {
  const { pathname } = useLocation();
  return (
    <S.SingUpUserContainer>
      <S.SignUpTitle>{pathname === '/signup/buyer' ? '구매자' : '판매자'}</S.SignUpTitle>
      <SignUpForm pathname={pathname} />
    </S.SingUpUserContainer>
  );
};

export default SignUpUserPage;
