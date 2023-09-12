import { Msg } from '@/components/chat/Chat';
import ChatDetailIntro from '@/components/chat/chatDetail/ChatDetailIntro';
import ChatLeaveBox from '@/components/chat/chatDetail/ChatLeaveBox';
import ChatLeftBox from '@/components/chat/chatDetail/ChatLeftBox';
import ChatRightBox from '@/components/chat/chatDetail/ChatRightBox';
import * as S from '../Chat.styles';

type MsgProps = {
  msg: Msg[];
  prevMsg: Msg[];
  nickName: string;
  leaveUser: string;
  shopName: string;
};

const ChatDetailBody = ({ prevMsg, msg, nickName, leaveUser, shopName }: MsgProps) => {
  console.log('msgArray', msg);
  console.log('nickName', nickName);
  console.log('leaveUser', leaveUser.length);

  return (
    <S.ChatDetailBody>
      <ChatDetailIntro shopName={shopName} />
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
      {leaveUser.length > 0 ? <ChatLeaveBox content={leaveUser} /> : null}
    </S.ChatDetailBody>
  );
};

export default ChatDetailBody;
