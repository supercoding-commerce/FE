import * as S from '../Chat.styles';

type MsgProps = {
  content?: string;
};

const ChatLeaveBox = ({ content }: MsgProps) => {
  console.log('ChatLeaveBox', content);

  return (
    <S.ChatLeaveBox>
      <div className="reavebox_wrapper">
        <span>{content}님이 채팅을 종료하셨습니다.</span>
      </div>
    </S.ChatLeaveBox>
  );
};

export default ChatLeaveBox;
