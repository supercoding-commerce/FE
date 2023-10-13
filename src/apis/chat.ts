import { client } from '@/apis';

const CHAT_URL = '/v1/api/chat';

export const prevChat = async (customRoomId: string | null) => {
  const response = await client.get(`${CHAT_URL}/detail/${customRoomId}`);
  return response;
};

export const userChat = async (sellerId: number) => {
  const response = await client.get(`${CHAT_URL}/user/${sellerId}`);
  return response;
};

export const sellerChat = async (sellerId: number, productId: number) => {
  const response = await client.get(`${CHAT_URL}/user/${sellerId}/${productId}`);
  return response;
};
