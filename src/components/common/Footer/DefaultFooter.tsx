import * as S from '@/components/common/Footer/DefaultFooter.styles';
import Icon from '@/components/common/Icon';

const DefaultFooter = () => {
  const InstagramSize = '22px';
  const FacebookSize = '30px';
  const YoutubeSize = '34px';
  return (
    <S.FooterContainer>
      <S.Logo>CLIP</S.Logo>
      <S.SnsIconsBox>
        <Icon name="IconInstagram" style={{ width: InstagramSize, height: InstagramSize }} />
        <Icon name="IconFacebook" style={{ width: FacebookSize, height: FacebookSize }} />
        <Icon name="IconYoutube" style={{ width: YoutubeSize, height: YoutubeSize }} />
      </S.SnsIconsBox>

      <S.CopyRight> &#169; 2023 CLIP Corp. All rights reserved.</S.CopyRight>
    </S.FooterContainer>
  );
};

export default DefaultFooter;
