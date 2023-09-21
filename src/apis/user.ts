import { client } from '@/apis';
import { SignUpItem } from '@/components/signup/SignUpForm/SignUpForm.tsx';
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

export const signUpBuyer = async (payload: Partial<SignUpItem>) => {
  const response = await client.post(`${USER_URL}/register`, payload);
  return response;
};

export const signUpSeller = async (payload: FormData) => {
  const response = await client.post(`${USER_URL}/register-seller`, payload, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response;
};

export const checkEmail = async (payload: string) => {
  const response = await client.get(`${USER_URL}/checkEmail`, {
    params: {
      email: payload,
    },
  });
  return response;
};

export const checkNickName = async (payload: string) => {
  const response = await client.get(`${USER_URL}/checkNickName`, {
    params: {
      nickName: payload,
    },
  });
  return response;
};

export const checkShopName = async (payload: string) => {
  const response = await client.get(`${USER_URL}/checkShopName`, {
    params: {
      shopName: payload,
    },
  });
  return response;
};

export const getKakaoLoginCode = async (payload: string) => {
  const response = await client.get(`${USER_URL}/kakao/callback`, {
    params: {
      code: payload,
    },
  });
  return response;
};
