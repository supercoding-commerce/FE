import axios, { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios';

import { localStorageKey } from '@/constants';
import { getItem, setItem } from '@/utils/localstorage';
import { removeItem } from '@/utils/localstorage.ts';

const BASE_URL: string = import.meta.env.VITE_API_BASE_URL;

export const client = axios.create({
  baseURL: BASE_URL,
});

client.interceptors.request.use(
  (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    const accessToken = getItem<string>(localStorageKey.accessToken);
    const refreshToken = getItem<string>(localStorageKey.refreshToken);

    if (accessToken) {
      config.headers = config.headers || {};
      config.headers.ACCESS_TOKEN = `Bearer ${accessToken}`;
    }

    if (refreshToken) {
      config.headers = config.headers || {};
      config.headers.REFRESH_TOKEN = `Bearer ${refreshToken}`;
    }

    return config;
  },
);

client.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse => {
    const accessToken: string | null = response.data.accessToken;
    const refreshToken: string | null = response.data.refreshToken;
    const editToken = (token: string) => {
      const editedToken = token.replace('Bearer', '').trim();
      return editedToken;
    };

    if (accessToken) {
      setItem(localStorageKey.accessToken, editToken(accessToken));
    }

    if (refreshToken) {
      setItem(localStorageKey.refreshToken, editToken(refreshToken));
    }

    return response;
  },
  (error: AxiosError<ErrorResponse>) => {
    const handelSignOut = () => {
      removeItem(localStorageKey.accessToken);
      removeItem(localStorageKey.refreshToken);
      removeItem(localStorageKey.user);
    };
    // GYU-TODO: 400 code 로 오는데 401, 또는 403 으로 변경 가능한지 요청하기!
    // ACCESS_TOKEN 만료, REFRESH_TOKEN 만료 정확히 어떻게 오는지 백엔드랑 논의 후 업데이트
    if (
      error.response?.data.errorMessage === 'RefreshToken Expired' ||
      error.response?.status === 403
    ) {
      // TODO-GYU: ACCESS_TOKEN 만료시, 토큰갱신(refresh 토큰을 이용하여) 로직 개선
      // TODO-GYU: 리프레쉬토큰 만료시 로그아웃 하기!
      // - 현재는 인증에러 나면 바로 로그아웃 조치
      handelSignOut();
    }
  },
);

export interface ErrorResponse {
  code: string;
  errorMessage: string;
}
