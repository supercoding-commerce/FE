import { useEffect, useState } from 'react';
import { Client } from '@stomp/stompjs';

import { ChatUserProps } from '@/components/chat/ChatDetail';
import { Message, ReceivedMessage } from '@/models/chat';

type useChatProps = Pick<ChatUserProps, 'customRoomId' | 'seller' | 'user' | 'role' | 'product'> & {
  stompClient: Client | null;
};

type JoinMessage = {
  customRoomId: string | null;
  shopName: string;
  userName: string;
  role: string;
  type: string;
};

export function useChat({ customRoomId, seller, user, role, product, stompClient }: useChatProps) {
  const [isConnected, setIsConnected] = useState(false);
  const [receivedMessage, setReceivedMessage] = useState<ReceivedMessage | null>(null);
  const [message, setMessage] = useState<Message[]>([]);

  /** handleDisConnect() : 채팅 소켓 연결 끊기 */
  const handleDisConnect = () => {
    if (stompClient?.connected) {
      // 전역에 만들어진 클라이언트 소켓 객체를 연결 종료하고 삭제.
      stompClient.deactivate();
    }
  };

  /** userJoin() : 유저가 채팅방 처음 들어왔을때 */
  const userJoin = (joinMessage: JoinMessage) => {
    stompClient?.publish({
      destination: `/app/chat.addUser/${seller.sellerId}/${product.productId}/${user.userId}`,
      body: JSON.stringify(joinMessage),
    });
  };

  /** userSubscribe() : 유저의 채팅 구독 상태 및 상대 전달 */
  const userSubscribe = () => {
    stompClient?.subscribe(
      `/topic/${seller.sellerId}/${product.productId}/${user.userId}`,
      (body) => {
        const message = JSON.parse(body.body);
        setReceivedMessage(message);
      },
    );
  };

  /** messageTypeJoin() : receivedMessage type이 JOIN일때 */
  const messageTypeJoin = (receivedMessage: ReceivedMessage) => {
    const join =
      receivedMessage.role === 'user' ? receivedMessage.userName : receivedMessage.shopName;
    const messageContent = `${join}님이 채팅을 시작하셨습니다.`;
    const messageSender = 'server';
    const message = { content: messageContent, sender: messageSender };
    setMessage((prev) => [...prev, message]);
  };

  /** messageTypeLeave() : receivedMessage type이 Leave일때 */
  const messageTypeLeave = (receivedMessage: ReceivedMessage) => {
    const leaver = receivedMessage.userName || receivedMessage.shopName;
    const messageContent = `${leaver}님이 채팅을 종료하셨습니다.`;
    const messageSender = 'server';
    const message = { content: messageContent, sender: messageSender };
    setMessage((prev) => [...prev, message]);
  };

  /** messageTypeChat() : receivedMessage type이 CHAT일때 */
  const messageTypeChat = (receivedMessage: ReceivedMessage) => {
    const messageContent = receivedMessage.content;
    const messageSender = receivedMessage.sender;
    if (messageContent && messageSender) {
      const message = { content: messageContent, sender: messageSender };
      setMessage((prev) => [...prev, message]);
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

    if (!stompClient) return;
    stompClient.onConnect = () => {
      if (isConnected) return;

      userJoin(joinMessage);

      userSubscribe();

      // 연결 상태를 true로 설정
      setIsConnected(true);
    };

    stompClient.onStompError = (frame) => {
      console.log('연결 실패', frame);
      // 연결이 실패하면 연결 상태를 false로 설정
      setIsConnected(false);
    };

    stompClient?.activate();

    return () => {
      handleDisConnect();
      // 컴포넌트가 언마운트 될 때 연결 상태를 false로 설정
      setIsConnected(false);
    };
  }, []);

  // 소켓에서 이벤트 수신에 따른 로직 처리
  useEffect(() => {
    // Early return
    if (!receivedMessage) return;

    switch (receivedMessage.type) {
      case 'JOIN':
        messageTypeJoin(receivedMessage);
        break;

      case 'LEAVE':
        messageTypeLeave(receivedMessage);
        break;

      case 'TERMINATE':
        handleDisConnect();
        break;

      case 'CHAT':
        messageTypeChat(receivedMessage);
        break;

      default:
      // TODO: sentry - 에러 로깅
    }
  }, [receivedMessage]);

  return message;
}
