import * as S from '../Chat.styles';

type MsgProps = {
  content?: string;
};

const ChatLeaveBox = ({ content }: MsgProps) => {
  console.log('ChatLeaveBox', content);

  return (
    <S.ChatLeaveBox>
      <div className="reavebox_wrapper">
        <span>{content}</span>
      </div>
    </S.ChatLeaveBox>
  );
};

export default ChatLeaveBox;
