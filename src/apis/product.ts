import { AxiosResponse } from 'axios';

import { client } from '@/apis/index.ts';
import { DetailReview } from '@/components/Detail/detailReview/Review';

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

export async function postCart(
  payload: OrderNCartItemAPI[],
): Promise<AxiosResponse<OrderNCartItemAPI>> {
  const response = await client.post('/v1/api/cart', payload);
  return response;
}

export async function postPayment(payload: OrderNCartItemAPI[]): Promise<OrderNCartItemAPI> {
  const response = await client.post('/v1/api/order', payload);
  return response.data;
}

export async function deleteProduct(productId: number) {
  return client.delete(`/v1/api/product/${productId}`);
}

export const getScrollProducts = async (pageParam: number) => {
  const response = await client.get(
    `https://pet-commerce.shop/v1/api/product?pageNumber=${pageParam}&size=${
      pageParam === 1 ? 2 : 15
    }&sortBy=createdAt`,
  );
  return response.data;
};

export const getSearchProducts = async (currentSearchTerm: string) => {
  const response = await client.get(
    `${BASE_URL}/search?searchWord=${encodeURIComponent(currentSearchTerm)}`,
  );
  return response.data;
};

export async function getReview(productId: number): Promise<DetailReview[]> {
  const response = await client.get(`${BASE_URL}/review/${productId}`);
  return response.data;
}
