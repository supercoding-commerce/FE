import { client } from '@/apis/index.ts';

const BASE_URL = '/v1/api/product/review';
const BASE_URL1 = '/v1/api/review';

export async function getReview(productId: number) {
  const response = await client.get(`${BASE_URL}/${productId}`);
  return response;
}

export async function postReview(reviewData: FormData) {
  const response = await client.post(`${BASE_URL1}`, reviewData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response;
}

export async function deleteReview(reviewId: number) {
  const response = await client.delete(`${BASE_URL1}/${reviewId}`);
  return response;
}
