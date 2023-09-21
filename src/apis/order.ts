import { client } from '@/apis/index.ts';

const ORDER_URL = '/v1/api/order';

export const getOrders = async (): Promise<Order[]> => {
  const response = await client.get<Order[]>(`${ORDER_URL}`);
  return response.data.map((order) => ({ ...order, options: JSON.parse(order.options ?? []) }));
};

export const getCartOrder = async (orderTag: string): Promise<Order[]> => {
  const response = await client.get<Order[]>(`${ORDER_URL}/cart/${orderTag}`);
  return response.data.map((order) => ({ ...order, options: JSON.parse(order.options ?? []) }));
};

export const getProductOrder = async (productId: string): Promise<Order[]> => {
  const response = await client.get<Order[]>(`${ORDER_URL}/product/${productId}`);
  return response.data.map((order) => ({ ...order, options: JSON.parse(order.options ?? []) }));
};
