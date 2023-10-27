import { Client } from '@stomp/stompjs';

import { ChatUserProps } from '@/components/chat/ChatDetail';

export type UseSendMessage = Pick<
  ChatUserProps,
  'customRoomId' | 'seller' | 'user' | 'role' | 'product'
> & {
  stompClient: Client;
};

/** sendMessage() : 유저가 상대방에게 메세지 보낼때 */
export const useSendMessage = ({
  customRoomId,
  stompClient,
  role,
  user,
  product,
  seller,
}: UseSendMessage) => {
  const sendMessage = (text: string) => {
    if (text && stompClient) {
      const chatMessage = {
        customRoomId: customRoomId,
        sender: role === 'user' ? user.userName : seller.shopName,
        content: text,
        type: 'CHAT',
      };
      stompClient.publish({
        destination: `/app/chat.sendMessage/${seller.sellerId}/${product.productId}/${user.userId}`,
        body: JSON.stringify(chatMessage),
      });
    }
  };

  return sendMessage;
};
