import { useEffect, useRef } from 'react';

import { Msg } from '@/components/chat/ChatDetail';
import ChatDetailIntro from '@/components/chat/chatDetail/ChatDetailIntro';
// import ChatLeaveBox from '@/components/chat/chatDetail/ChatLeaveBox';
import ChatLeftBox from '@/components/chat/chatDetail/ChatLeftBox';
import ChatRightBox from '@/components/chat/chatDetail/ChatRightBox';
import * as S from '../Chat.styles';

type MsgProps = {
  msg: Msg[];
  prevMsg: Msg[];
  nickName: string;
  // leaveUser: string;
  shopName: string;
  shopImageUrl: string;
  role: string;
};

const ChatDetailBody = ({ prevMsg, msg, nickName, shopName, shopImageUrl, role }: MsgProps) => {
  const RefViewControll = useRef<HTMLDivElement>(null);

  //가장 최근 채팅 보여주기
  useEffect(() => {
    if (RefViewControll.current && prevMsg.length > 0) {
      RefViewControll.current.scrollTop = RefViewControll.current.scrollHeight;
    }
  }, [msg, prevMsg]);

  // console.log(nickName, msg);

  return (
    <S.ChatDetailBody ref={RefViewControll}>
      <ChatDetailIntro shopName={shopName} shopImageUrl={shopImageUrl} />
      {prevMsg.map((item, idx) => {
        return nickName === item.sender ? (
          <ChatRightBox key={idx} content={item.content} />
        ) : (
          <ChatLeftBox
            key={idx}
            content={item.content}
            role={role}
            shopImageUrl={shopImageUrl}
            sender={item.sender}
          />
        );
      })}
      {msg.map((item, idx) => {
        return nickName === item.sender ? (
          <ChatRightBox key={idx} content={item.content} />
        ) : (
          <ChatLeftBox
            key={idx}
            content={item.content}
            role={role}
            shopImageUrl={shopImageUrl}
            sender={item.sender}
          />
        );
      })}
    </S.ChatDetailBody>
  );
};

export default ChatDetailBody;
