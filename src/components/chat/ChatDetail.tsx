import { useEffect, useState } from 'react';
import { Client } from '@stomp/stompjs';

import { loadPrevChat } from '@/apis/chat';
import { ProductInfo, SellerInfo, UserInfo } from '@/components/chat/Chat';
import ChatDetailBody from '@/components/chat/chatDetail/ChatDetailBody';
import ChatDetailHeader from '@/components/chat/chatDetail/ChatDetailHeader';
import ChatSend from '@/components/chat/chatDetail/ChatSend';
import { useChat } from '@/hooks/useChat';
import { Message } from '@/models/chat';

export type ChatUserProps = {
  customRoomId: string | null;
  role: string;
  seller: SellerInfo;
  user: UserInfo;
  product: ProductInfo;
  shopImageUrl: string;
  clickPrevButton: () => void;
  handleOpen: () => void;
};

const ChatDetail = ({
  customRoomId,
  role,
  seller,
  user,
  product,
  shopImageUrl,
  clickPrevButton,
  handleOpen,
}: ChatUserProps) => {
  const [stompClient] = useState(
    new Client({
      brokerURL: `${import.meta.env.VITE_API_CHAT_URL}/chat`,
    }),
  );

  // 이전의 메세지 기록 담기
  const [prevMessage, setPrevMessage] = useState<Message[]>([]);

  const message = useChat({
    customRoomId,
    seller,
    user,
    role,
    product,
    stompClient,
  });

  useEffect(() => {
    if (!customRoomId) return;
    loadPrevChat(customRoomId)
      .then((resData) => {
        const data = resData;
        const prevMessage: Message[] = Object.values(data);
        setPrevMessage([...prevMessage]);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <>
      <ChatDetailHeader
        shopName={seller.shopName}
        clickPrevButton={clickPrevButton}
        handleOpen={handleOpen}
      />
      <ChatDetailBody
        prevMessage={prevMessage}
        message={message}
        role={role}
        nickName={role === 'user' ? user.userName : seller.shopName}
        shopName={seller.shopName}
        shopImageUrl={shopImageUrl}
      />
      <ChatSend
        role={role}
        stompClient={stompClient}
        customRoomId={customRoomId}
        user={user}
        seller={seller}
        product={product}
      />
    </>
  );
};

export default ChatDetail;
