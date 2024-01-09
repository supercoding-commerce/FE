import { useQuery } from '@tanstack/react-query';

import { getCart } from '@/apis/cart';
import { Cart } from '@/pages/CartPage/CartPage';

export type CartPromise = {
  [date: string]: Cart[];
};

export function useGetCart() {
  const { data = [], ...rest } = useQuery<CartPromise[]>(['cartItems'], () => getCart());
  let cartItems = data?.map((item) => Object.values(item).flat()).flat() as unknown as Cart[];
  cartItems = cartItems.map((item) => ({
    ...item,
    option: JSON.parse(item.option as unknown as string),
    productOptionList: JSON.parse(item.productOptionList as unknown as string),
  }));
  return { cartItems, ...rest };
}
