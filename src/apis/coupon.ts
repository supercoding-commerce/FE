import { client } from '@/apis/index.ts';

const COUPON_URL = '/v1/api/coupon/user';
export const getCoupon = async (): Promise<Coupon[]> => {
  const response = await client.get(`${COUPON_URL}`);
  return response.data;
};
