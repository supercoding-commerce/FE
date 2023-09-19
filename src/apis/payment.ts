import { client } from '@/apis/index.ts';

const PAYMENT_URL = '/v1/api/payments';

export type PurchasePayload = {
  couponId: number;
  isUsePoint: boolean;
  orderIdList: number[];
  paymentMethod: 1;
  totalPrice: number;
};
export const purchase = async (payload: PurchasePayload) => {
  return client.post(`${PAYMENT_URL}/purchase`, payload);
};
