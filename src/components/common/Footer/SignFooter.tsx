import { useLocation } from 'react-router-dom';

import { FooterContainer } from '@/components/common/Footer/DefaultFooter.styles';
import { LinkBox, LinkText } from '@/components/common/Footer/SignFooter.styles';

const SignFooter = () => {
  const { pathname } = useLocation();

  const text = pathname === '/signin' ? '아직 회원이 아니신가요?' : '아이디가 있으신가요?';

  const link =
    pathname === '/signin' ? (
      <LinkText to="/signup">회원가입 하러 가기</LinkText>
    ) : (
      <LinkText to="/signin">로그인 하러 가기</LinkText>
    );
  return (
    <FooterContainer>
      <LinkBox>
        <p>{text}</p>
        {link}
      </LinkBox>
    </FooterContainer>
  );
};

export default SignFooter;
