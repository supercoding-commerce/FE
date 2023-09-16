import { client } from '@/apis/index.ts';

const BASE_URL = '/v1/api/product';
export const createProduct = async (payload: FormData) => {
  return client.post(BASE_URL, payload, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};
