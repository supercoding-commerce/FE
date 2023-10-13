import { useEffect, useState } from 'react';
import { Client } from '@stomp/stompjs';

import { prevChat } from '@/apis/chat';
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

  console.log('GYU MSG', message);

  const loadPrevChat: () => Promise<void> = async () => {
    prevChat(customRoomId)
      .then((res) => {
        console.log('res', res);
        const data = res.data.chats;
        const prevMessage: Message[] = Object.values(data);
        setPrevMessage([...prevMessage]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    loadPrevChat();
  }, []);

  /** sendMessage() : 유저가 상대방에게 메세지 보낼때 */
  const sendMessage = (text: string) => {
    const messageContent = text;
    if (messageContent && stompClient) {
      const chatMessage = {
        customRoomId: customRoomId,
        sender: role === 'user' ? user.userName : seller.shopName,
        content: messageContent,
        type: 'CHAT',
      };
      stompClient.publish({
        destination: `/app/chat.sendMessage/${seller.sellerId}/${product.productId}/${user.userId}`,
        body: JSON.stringify(chatMessage),
      });
    }
  };

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
      <ChatSend sendMessage={sendMessage} />
    </>
  );
};

export default ChatDetail;
