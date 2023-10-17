import { client } from '@/apis';
import { Chat, List } from '@/components/chat/ChatList';

const CHAT_URL = '/v1/api/chat';

type ChatList = {
  shopImage: string;
  chatList: List[];
};

export const prevChat = async (customRoomId: string): Promise<Chat> => {
  const response = await client.get(`${CHAT_URL}/detail/${customRoomId}`);
  const chats = response.data.chats;
  return chats;
};

export const userChatList = async (sellerId: number): Promise<ChatList> => {
  const response = await client.get(`${CHAT_URL}/user/${sellerId}`);
  return response.data;
};

export const sellerChatList = async (sellerId: number, productId: number): Promise<ChatList> => {
  const response = await client.get(`${CHAT_URL}/seller/${sellerId}/${productId}`);
  return response.data;
};
