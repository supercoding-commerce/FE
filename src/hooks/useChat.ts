import { useEffect, useState } from 'react';
import { Client } from '@stomp/stompjs';

import { ChatUserProps } from '@/components/chat/ChatDetail';
import { Message } from '@/models/chat';

type useChatProps = Pick<
  ChatUserProps, //
  'customRoomId' | 'seller' | 'user' | 'role' | 'product'
> & { stompClient: Client };

export function useChat({ customRoomId, seller, user, role, product, stompClient }: useChatProps) {
  const [isConnected, setIsConnected] = useState(false);
  const [receivedMessage, setReceivedMessage] = useState<ReceivedMessage | null>(null);

  const [message, setMessage] = useState<Message[]>([]);

  const handleDisConnect = () => {
    if (stompClient.connected) {
      // 전역에 만들어진 클라이언트 소켓 객체를 연결 종료하고 삭제.
      stompClient.deactivate();
      console.log('연결이 끊겼습니다.');
    }
  };

  // 처음 들어왔을때 socket 이벤트 정의 및 JOIN 호출
  useEffect(() => {
    const joinMessage = {
      customRoomId: customRoomId,
      shopName: seller.shopName,
      userName: user.userName,
      role: role,
      type: 'JOIN',
    };

    // function userJoin() {
    //   stompClient.publish({
    //     destination: `/app/chat.addUser/${seller.sellerId}/${product.productId}/${user.userId}`,
    //     body: JSON.stringify(joinMessage),
    //   });
    // }

    stompClient.onConnect = () => {
      if (isConnected) return;

      // clean code early return -> 일반적이지 않은 경우를 먼저 반환?
      // 예외조건 먼저 처리
      // if(!A)  return;
      // if(!B) return;
      // if(C) return;

      // 정상적인 로직 수행
      // ...

      // 이미 연결되어 있지 않을 경우에만 JOIN 메시지 전송
      // if (!isConnected) {
      stompClient.subscribe(
        `/topic/${seller.sellerId}/${product.productId}/${user.userId}`,
        (body) => {
          const message = JSON.parse(body.body);
          setReceivedMessage(message);
          console.log(message);
        },
      );

      // userJoin();
      stompClient.publish({
        destination: `/app/chat.addUser/${seller.sellerId}/${product.productId}/${user.userId}`,
        body: JSON.stringify(joinMessage),
      });

      // 연결 상태를 true로 설정
      setIsConnected(true);
      // }
    };

    stompClient.onStompError = (frame) => {
      console.log('연결 실패', frame);
      // 연결이 실패하면 연결 상태를 false로 설정
      setIsConnected(false);
    };

    stompClient.activate();

    return () => {
      handleDisConnect();
      // 컴포넌트가 언마운트 될 때 연결 상태를 false로 설정
      setIsConnected(false);
    };
  }, []);

  // 소켓에서 이벤트 수신에 따른 로직 처리
  useEffect(() => {
    console.log('GYU MESSAGE receivedMessage', receivedMessage);
    // Early return
    if (!receivedMessage) return;

    let join;
    let messageContent;
    let messageSender;
    let message: Message;
    let leaver;

    switch (receivedMessage.type) {
      case 'JOIN':
        join =
          receivedMessage.role === 'user' ? receivedMessage.userName : receivedMessage.shopName;
        messageContent = `${join}님이 채팅을 시작하셨습니다.`;
        messageSender = 'server';
        message = { content: messageContent, sender: messageSender };
        setMessage((prev) => [...prev, message]);
        break;

      case 'LEAVE':
        leaver = receivedMessage.userName || receivedMessage.shopName;
        messageContent = `${leaver}님이 채팅을 종료하셨습니다.`;
        messageSender = 'server';
        message = { content: messageContent, sender: messageSender };
        setMessage((prev) => [...prev, message]);
        break;

      case 'TERMINATE':
        handleDisConnect();
        break;

      case 'CHAT':
        messageContent = receivedMessage.content;
        messageSender = receivedMessage.sender;
        if (messageContent && messageSender) {
          const message = { content: messageContent, sender: messageSender };
          setMessage((prev) => [...prev, message]);
        }
        break;

      default:
        // sentry - 에러 로깅!
        console.error('존재하지 않는 이벤트 입니다.');
    }
  }, [receivedMessage]);

  return message;
}

type ReceivedMessage = {
  type: string;
  shopName: string;
  userName: string;
  role: string;
  customRoomId: string;
  content?: string;
  sender?: string;
};
