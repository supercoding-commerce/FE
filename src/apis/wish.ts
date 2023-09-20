import { client } from '@/apis/index.ts';

const HEART_URL = 'v1/api/wishlist';

export async function getHeart() {
  const response = await client.get(HEART_URL);
  return response.data;
}

export async function postHeart(productId: number) {
  const response = await client.post(`${HEART_URL}/add?productId=${productId}`);
  return response;
}

export function deleteHeart() {
  return client.delete(`${HEART_URL}/delete`);
}
