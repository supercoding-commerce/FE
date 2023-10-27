import { Message } from '@/models/chat';
import * as S from '../Chat.styles';

type MessageProps = Pick<Message, 'content'>;

const ChatLeaveBox = ({ content }: MessageProps) => {
  return (
    <S.ChatLeaveBox>
      <div className="reavebox_wrapper">
        <span>{content}</span>
      </div>
    </S.ChatLeaveBox>
  );
};

export default ChatLeaveBox;
