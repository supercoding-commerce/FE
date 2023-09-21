import { useEffect, useRef } from 'react';

import { Msg } from '@/components/chat/ChatDetail';
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
  shopImageUrl: string;
  role: string;
};

const ChatDetailBody = ({
  prevMsg,
  msg,
  nickName,
  leaveUser,
  shopName,
  shopImageUrl,
  role,
}: MsgProps) => {
  console.log('msgArray', msg);
  console.log('nickName', nickName);
  console.log('leaveUser', leaveUser.length);

  const RefViewControll = useRef<HTMLDivElement>(null);
  console.log('RefViewControll', RefViewControll.current?.scrollTop);

  //가장 최근 채팅 보여주기
  useEffect(() => {
    if (RefViewControll.current && prevMsg.length > 0) {
      RefViewControll.current.scrollTop = RefViewControll.current.scrollHeight;
    }
  }, [msg, prevMsg]);

  return (
    <S.ChatDetailBody ref={RefViewControll}>
      <ChatDetailIntro shopName={shopName} shopImageUrl={shopImageUrl} />
      {prevMsg.map((item, idx) => {
        return nickName === item.sender ? (
          <ChatRightBox key={idx} content={item.content} />
        ) : (
          <ChatLeftBox key={idx} content={item.content} role={role} shopImageUrl={shopImageUrl} />
        );
      })}
      {msg.map((item, idx) => {
        return nickName === item.sender ? (
          <ChatRightBox key={idx} content={item.content} />
        ) : (
          <ChatLeftBox key={idx} content={item.content} role={role} shopImageUrl={shopImageUrl} />
        );
      })}
      {leaveUser.length > 0 ? <ChatLeaveBox content={leaveUser} /> : null}
    </S.ChatDetailBody>
  );
};

export default ChatDetailBody;
