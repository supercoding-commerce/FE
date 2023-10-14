import { client } from '@/apis/index.ts';
import { DetailReview } from '@/components/Detail/detailReview/Review';

const BASE_URL = '/v1/api/review';

export async function postReview(reviewData: FormData): Promise<DetailReview> {
  const response = await client.post(`${BASE_URL}`, reviewData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  const data = response.data;
  return data;
}

export async function deleteReview(reviewId: number): Promise<number | void> {
  const response = await client.delete(`${BASE_URL}/${reviewId}`);
  if (response.status !== 200) {
    return console.log(`리뷰 삭제 에러! ${response.status}`);
  }
  if (response.status === 200) {
    alert('해당 리뷰가 삭제되었습니다.');
    return reviewId;
  }
}
