import axios, { AxiosResponse, InternalAxiosRequestConfig } from 'axios';

import { localStorageKey } from '@/constants';
import { getItem, setItem } from '@/utils/localstorage';

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

client.interceptors.response.use((response: AxiosResponse): AxiosResponse => {
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
});
