import { useEffect, useRef } from 'react';

import ChatDetailIntro from '@/components/chat/chatDetail/ChatDetailIntro';
import ChatLeftBox from '@/components/chat/chatDetail/ChatLeftBox';
import ChatRightBox from '@/components/chat/chatDetail/ChatRightBox';
import { Message } from '@/models/chat';
import * as S from '../Chat.styles';

type MsgProps = {
  message: Message[];
  prevMessage: Message[];
  nickName: string;
  shopName: string;
  shopImageUrl: string;
  role: string;
};

const ChatDetailBody = ({
  prevMessage,
  message,
  nickName,
  shopName,
  shopImageUrl,
  role,
}: MsgProps) => {
  const RefViewControll = useRef<HTMLDivElement>(null);

  //가장 최근 채팅 보여주기
  useEffect(() => {
    if (RefViewControll.current && prevMessage.length > 0) {
      RefViewControll.current.scrollTop = RefViewControll.current.scrollHeight;
    }
  }, [message, prevMessage]);

  return (
    <S.ChatDetailBody ref={RefViewControll}>
      <ChatDetailIntro shopName={shopName} shopImageUrl={shopImageUrl} />
      {prevMessage.map((item, idx) => {
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
      {message.map((item, idx) => {
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
