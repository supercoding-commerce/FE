import { client } from '@/apis';

export type CartItemAPI = {
  productId: number;
  quantity: number;
  options: string[];
};
// type 사용할 객체 필요 payload로 cartItem타입의 객체(쓰일 곳에서 선언)

export async function getProduct(productId: number) {
  const response = await client.get(`/v1/api/product/detail/${productId}`);
  return response;
}

export async function postCart(payload: CartItemAPI): Promise<CartItemAPI> {
  const response = await client.post('/v1/api/cart', payload);
  return response.data;
}

export async function postPayment(payload: CartItemAPI[]): Promise<CartItemAPI> {
  const response = await client.post('/v1/api/order', payload);
  return response.data;
}

export async function deleteProduct(productId: number) {
  return client.delete(`/v1/api/product/${productId}`);
}
