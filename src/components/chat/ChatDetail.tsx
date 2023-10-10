import { useEffect, useState } from 'react';

import { client } from '@/apis';
import { ProductInfo, SellerInfo, UserInfo } from '@/components/chat/Chat';
import ChatDetailBody from '@/components/chat/chatDetail/ChatDetailBody';
import ChatDetailHeader from '@/components/chat/chatDetail/ChatDetailHeader';
import ChatSend from '@/components/chat/chatDetail/ChatSend';
import { useChat } from '@/hooks/useChat';
import { useStompClient } from '@/hooks/useStompClient';
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
  const stompClient = useStompClient();

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

  const loadPrevChat: () => Promise<void> = async () => {
    await client
      .get(`/v1/api/chat/detail/${customRoomId}`)
      .then((res) => {
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
