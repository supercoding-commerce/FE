import { client } from '@/apis';
import { userInfoProps } from '@/pages/SignInPage/SignInPage';

const USER_URL = '/v1/api/user';

export const signIn = async (payload: userInfoProps) => {
  const response = await client.post(`${USER_URL}/login`, payload);
  return response;
};

export type UserInfo = {
  address: string;
  grade: string;
  nickname: string;
  payMoney: number;
  role: string;
};
export const getInfo = async (): Promise<UserInfo> => {
  const response = await client.get(`${USER_URL}/getInfo`);
  return response.data;
};
