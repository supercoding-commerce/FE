import { client } from '@/apis/index.ts';

const ORDER_URL = '/v1/api/order';

export const getOrders = async (): Promise<Order[]> => {
  const response = await client.get<Order[]>(`${ORDER_URL}`);
  return response.data.map((order) => ({ ...order, options: JSON.parse(order.options ?? []) }));
};

export type OrderProduct = {
  content: string;
  leftAmount: number;
  name: string;
  price: number;
  productId: number;
  shopName: string;
  thumbnailUrl: string;
};
export const getSellingProduct = async (): Promise<OrderProduct[]> => {
  const response = await client.get(`${ORDER_URL}/seller/selling-product`);
  return response.data;
};
