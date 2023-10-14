import { client } from '@/apis';
import { Chats, list } from '@/components/chat/ChatList';

const CHAT_URL = '/v1/api/chat';

type ChatList = {
  shopImage: string;
  chatList: list[];
};

export const prevChat = async (customRoomId: string): Promise<Chats> => {
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
