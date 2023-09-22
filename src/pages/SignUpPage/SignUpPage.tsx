import { useNavigate } from 'react-router-dom';

import Button from '@/components/common/Button/Button';
import Footer from '@/components/common/Footer/Footer';
import * as S from '@/pages/SignUpPage/SignUpPage.styles';
import { theme } from '@/styles/theme';

const SignUpPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <S.SignUpContainer>
        <S.SingUpLogo>Clip</S.SingUpLogo>
        <S.BtnBox>
          <Button
            variant="contained"
            size="large"
            backgroundColor={theme.color.brand}
            isFullWidth
            height={'64px'}
            onClick={() => navigate('/signup/seller')}
          >
            <S.FontStyle>판매자로 가입</S.FontStyle>
          </Button>
          <Button
            variant="contained"
            size="large"
            backgroundColor={'#FEE608'}
            isFullWidth
            height={'64px'}
            onClick={() => navigate('/signup/buyer')}
          >
            <S.FontStyle>구매자로 가입</S.FontStyle>
          </Button>
        </S.BtnBox>
      </S.SignUpContainer>
      <Footer />
    </>
  );
};

export default SignUpPage;
