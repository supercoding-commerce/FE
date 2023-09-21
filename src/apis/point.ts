import { client } from '@/apis/index.ts';

const POINT_URL = '/v1/api/points';

type PointHistory = any;
export async function getPointHistory(): Promise<PointHistory[]> {
  const response = await client.get(`${POINT_URL}/history`);
  return response.data.data;
}
