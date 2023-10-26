import { client } from '@/apis/index.ts';

export type ChargePaymoney = {
  payMoney: number;
  paymentAmount: number;
};

export async function postPaymoney(payload: ChargePaymoney) {
  const response = await client.post('/v1/api/charge/pay-moneys', payload);
  return response;
}
