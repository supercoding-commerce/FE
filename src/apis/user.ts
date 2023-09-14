import { client } from '@/apis';
import { userInfoProps } from '@/pages/SignInPage/SignInPage';

const USER_URL = '/v1/api/user';

export const signIn = async (payload: userInfoProps) => {
  const response = await client.post(`${USER_URL}/login`, payload);
  return response;
};
