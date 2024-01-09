import { useMutation, useQueryClient } from '@tanstack/react-query';

import { putCart } from '@/apis/cart';
import { OrderCart } from '@/pages/CartPage/CartPage';

export function usePutCart() {
  const queryClient = useQueryClient();

  const mutation = useMutation((payload: OrderCart[]) => putCart(payload), {
    onSuccess: () => {
      queryClient.invalidateQueries(['cartItems']);
    },
  });
  return { ...mutation, putCartMutate: mutation.mutateAsync };
}
