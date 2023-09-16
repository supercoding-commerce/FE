import axios, { AxiosResponse, InternalAxiosRequestConfig } from 'axios';

import { localStorageKey } from '@/constants';
import { getItem, setItem } from '@/utils/localstorage';

const BASE_URL: string = import.meta.env.VITE_API_BASE_URL;

export const client = axios.create({
  baseURL: BASE_URL,
});

client.interceptors.request.use(
  (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    const accessToken = getItem<string>(localStorageKey.auth);

    if (accessToken) {
      config.headers = config.headers || {};
      config.headers.ACCESS_TOKEN = `Bearer ${accessToken}`;
    }

    return config;
  },
);

client.interceptors.response.use((response: AxiosResponse): AxiosResponse => {
  const accessToken: string | null = response.data.accessToken;

  if (accessToken) {
    const editAccessToken = accessToken.replace('Bearer', '').trim();
    setItem(localStorageKey.auth, editAccessToken);
  }

  return response;
});
