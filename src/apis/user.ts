import { client } from '@/apis';
import { SignUpItem } from '@/components/signup/SignUpForm/SignUpForm';
import { userInfoProps } from '@/pages/SignInPage/SignInPage';

const USER_URL = '/v1/api/user';

export const signIn = async (payload: userInfoProps) => {
  const response = await client.post(`${USER_URL}/login`, payload);
  return response;
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
  const response = await client.get(`${USER_URL}/checkshopName`, {
    params: {
      shopName: payload,
    },
  });
  return response;
};
