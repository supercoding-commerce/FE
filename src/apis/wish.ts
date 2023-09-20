import { client } from '@/apis/index.ts';

const WISH_URL = 'v1/api/wishlist';

export async function getWish() {
  const response = await client.get(WISH_URL);
  return response.data;
}

export async function postWish(productId: number) {
  const response = await client.post(`${WISH_URL}/add?productId=${productId}`);
  return response;
}

export function deleteWish() {
  return client.delete(`${WISH_URL}/delete`);
}
