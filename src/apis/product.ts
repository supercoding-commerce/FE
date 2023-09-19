import { client } from '@/apis/index.ts';

const BASE_URL = '/v1/api/product';
export const createProduct = async (payload: FormData) => {
  return client.post(BASE_URL, payload, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

export type OrderNCartItemAPI = {
  productId: number;
  quantity: number;
  options: string[];
};

export async function getProduct(productId: number) {
  const response = await client.get(`/v1/api/product/detail/${productId}`);
  return response;
}

export async function postCart(payload: OrderNCartItemAPI[]): Promise<OrderNCartItemAPI> {
  const response = await client.post('/v1/api/cart', payload);
  return response.data;
}

export async function postPayment(payload: OrderNCartItemAPI[]): Promise<OrderNCartItemAPI> {
  const response = await client.post('/v1/api/order', payload);
  return response.data;
}

export async function deleteProduct(productId: number) {
  return client.delete(`/v1/api/product/${productId}`);
}
