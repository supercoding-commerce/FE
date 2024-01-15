import { client } from '@/apis/index.ts';
import { Wish } from '@/components/Mypage-Wish/WishPage';

const WISH_URL = 'v1/api/wishlist';

export async function getWish(): Promise<Wish[]> {
  const response = await client.get(WISH_URL);
  return response.data.data;
}

export async function postWish(productId: number) {
  const response = await client.post(`${WISH_URL}/add/${productId}`);
  return response;
}

export function deleteWish(productId: number) {
  return client.delete(`${WISH_URL}/delete/${productId}`);
}
