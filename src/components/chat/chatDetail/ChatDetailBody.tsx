import { Msg } from '@/components/chat/Chat';
import ChatDetailIntro from '@/components/chat/chatDetail/ChatDetailIntro';
import ChatLeftBox from '@/components/chat/chatDetail/ChatLeftBox';
import ChatRightBox from '@/components/chat/chatDetail/ChatRightBox';
import * as S from '../Chat.styles';

type MsgProps = {
  msg: Msg[];
  prevMsg: Msg[];
  nickName: string;
};

const ChatDetailBody = ({ prevMsg, msg, nickName }: MsgProps) => {
  console.log('msgArray', msg);
  console.log('nickName', nickName);

  return (
    <S.ChatDetailBody>
      <ChatDetailIntro />
      {prevMsg.map((item, idx) => {
        return nickName === item.sender ? (
          <ChatRightBox key={idx} content={item.content} />
        ) : (
          <ChatLeftBox key={idx} content={item.content} />
        );
      })}
      {msg.map((item, idx) => {
        return nickName === item.sender ? (
          <ChatRightBox key={idx} content={item.content} />
        ) : (
          <ChatLeftBox key={idx} content={item.content} />
        );
      })}
    </S.ChatDetailBody>
  );
};

export default ChatDetailBody;
