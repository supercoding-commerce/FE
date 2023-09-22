import * as S from '../Chat.styles';

type introProps = {
  shopName: string;
  shopImageUrl: string;
};

const ChatDetailIntro = ({ shopName, shopImageUrl }: introProps) => {
  return (
    <S.ChatDetailIntro>
      <div className="intro_img_wrapper">
        <img src={shopImageUrl} alt="로고" />
      </div>
      <div className="intro_title_wrapper">
        <span>{shopName}에 문의하기</span>
      </div>
    </S.ChatDetailIntro>
  );
};

export default ChatDetailIntro;
