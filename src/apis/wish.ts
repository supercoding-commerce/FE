import { client } from '@/apis/index.ts';
// import { OnlyProductId } from '@/components/DetailFooter/DetailFooter';

const WISH_URL = 'v1/api/wishlist';

export async function getWish() {
  const response = await client.get(WISH_URL);
  return response.data;
}

export async function postWish(productId: number) {
  const response = await client.post(`${WISH_URL}/add/${productId}`);
  return response;
}

export function deleteWish(productId: number) {
  return client.delete(`${WISH_URL}/delete/${productId}`);
}
