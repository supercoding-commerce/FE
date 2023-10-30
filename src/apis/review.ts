import { client } from '@/apis/index.ts';
import { DetailReview } from '@/components/Detail/detailReview/Review';

const BASE_URL = '/v1/api/review';

export const postReview = async (payload: FormData): Promise<DetailReview> => {
  return await client.post(BASE_URL, payload, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

export const deleteReview = async (reviewId: number): Promise<number | void> => {
  return await client.delete(`${BASE_URL}/${reviewId}`);
};
