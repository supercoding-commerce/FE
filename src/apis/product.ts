import { client } from '@/apis';
import { DetailProduct } from '@/components/DetailHeader/DetailHeader';

type CartItem = {
  productId: string;
  quantity: number;
  options: string[];
};

export async function getProduct(productId: number): Promise<DetailProduct[]> {
  const response = await client.get(`/v1/api/product/detail/${productId}`);
  return response.data;
}

export async function postCart(payload: CartItem): Promise<CartItem> {
  const response = await client.post('/v1/api/cart', payload);
  return response.data;
}

export async function deleteProduct(productId: number) {
  return client.delete(`/v1/api/product/${productId}`);
}
