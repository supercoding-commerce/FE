import { AxiosResponse } from 'axios';

import { client } from '@/apis/index.ts';
import { SoldHistory } from '@/components/Mypage-Sold/SoldPage';

const HISTORY_URL = '/v1/api/order';

export async function getSoldHistory(): Promise<AxiosResponse<SoldHistory[]>> {
  const response = await client.get(`${HISTORY_URL}/seller`);
  return response;
}
