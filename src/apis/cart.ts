import { client } from '@/apis/index.ts';
import { OrderCart } from '@/pages/CartPage/CartPage';
import { CartPromise } from '@/queries/cart/query';

const CART_URL = '/v1/api/cart';

export async function getCart(): Promise<CartPromise[]> {
  const response = await client.get(CART_URL);
  console.log(response.data);

  return response.data;
}

export async function putCart(payload: OrderCart[]): Promise<OrderCart> {
  const response = await client.put(CART_URL, payload);
  return response.data;
}

export async function deleteCartItem(cartId: number) {
  const response = await client.delete(`${CART_URL}/${cartId}`);
  return response;
}

export async function deleteAll() {
  const response = await client.delete(CART_URL);
  return response;
}

export type PaymentItem = {
  cartIdList: number[];
};
export async function postPayment(payload: PaymentItem): Promise<string> {
  const response = await client.post('/v1/api/order/cart', payload);
  return response.data;
}
