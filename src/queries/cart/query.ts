import { useQuery } from '@tanstack/react-query';

import { getCart } from '@/apis/cart';
import { Cart } from '@/pages/CartPage/CartPage';

export function useGetCart() {
  return useQuery<Cart[]>(['cartItems'], () => getCart());
}
