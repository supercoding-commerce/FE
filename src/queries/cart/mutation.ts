import { useMutation, useQueryClient } from '@tanstack/react-query';

import { PaymentItem, postCartToPayment, putCart } from '@/apis/cart';
import { OrderNCartItemAPI, postCart } from '@/apis/product';
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

export function usePostCart() {
  const mutation = useMutation((payload: OrderNCartItemAPI[]) => postCart(payload));
  return { ...mutation, postCartMutate: mutation.mutateAsync };
}

export function usePostCartToPayment() {
  const mutation = useMutation((payload: PaymentItem) => postCartToPayment(payload));
  return { ...mutation, postCToPMutate: mutation.mutateAsync };
}
