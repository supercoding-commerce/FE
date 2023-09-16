import * as S from '../Chat.styles';

type MsgProps = {
  content: string;
};

const ChatLeftBox = ({ content }: MsgProps) => {
  return (
    <S.ChatLeftBox>
      <div className="leftbox_img_wrapper">
        <img src="" alt="로고" />
      </div>
      <div className="leftbox_wrapper">
        <span>{content}</span>
      </div>
    </S.ChatLeftBox>
  );
};

export default ChatLeftBox;
