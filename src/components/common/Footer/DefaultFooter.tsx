import * as S from '@/components/common/Footer/DefaultFooter.styles';

const DefaultFooter = () => {
  return (
    <S.FooterContainer>
      <S.SnsIconsBox>
        <p>인스타</p>
        <p>페북</p>
        <p>유튜브</p>
      </S.SnsIconsBox>
      <S.Logo>로고</S.Logo>
      <S.CopyRight> &#169; 2023 로오고 Corp. All rights reserved.</S.CopyRight>
    </S.FooterContainer>
  );
};

export default DefaultFooter;
