import { client } from '@/apis/index.ts';
import { DetailReview } from '@/components/Detail/detailReview/Review';

const BASE_URL = '/v1/api/product/review';
const BASE_URL1 = '/v1/api/review';

export async function getReview(productId: number) {
  const response = await client.get(`${BASE_URL}/${productId}`);
  if (response.status !== 200) {
    console.log(`리뷰 불러오기 에러! ${response.status}`);
    return;
  }
  if (response.status === 200) {
    return response.data;
  }
}

export async function postReview(reviewData: FormData): Promise<DetailReview> {
  const response = await client.post(`${BASE_URL1}`, reviewData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  const data = response.data;
  return data;
}

export async function deleteReview(reviewId: number) {
  const response = await client.delete(`${BASE_URL1}/${reviewId}`);
  if (response.status !== 200) {
    console.log(`리뷰 삭제 에러! ${response.status}`);
    return;
  }
  if (response.status === 200) {
    alert('해당 리뷰가 삭제되었습니다.');
    return reviewId;
  }
}
