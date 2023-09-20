import { AxiosResponse } from 'axios';

import { client } from '@/apis/index.ts';
import { PurchaseHistory } from '@/components/Mypage-Purchase/Purchase';

const HISTORY_URL = '/v1/api/order';

export async function getPurchaseHistory(): Promise<AxiosResponse<PurchaseHistory[]>> {
  const response = await client.get(`${HISTORY_URL}/user`);
  return response;
}
