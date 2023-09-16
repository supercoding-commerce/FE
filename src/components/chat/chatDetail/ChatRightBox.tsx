import * as S from '../Chat.styles';

type MsgProps = {
  content: string;
};

const ChatRightBox = ({ content }: MsgProps) => {
  return (
    <S.ChatRightBox>
      <div className="rightbox_wrapper">
        <span>{content}</span>
      </div>
    </S.ChatRightBox>
  );
};

export default ChatRightBox;
