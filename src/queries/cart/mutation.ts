import { useMutation, useQueryClient } from '@tanstack/react-query';

import { deleteAll, deleteCartItem, PaymentItem, postCartToPayment, putCart } from '@/apis/cart';
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

export function useDeleteCart() {
  const queryClient = useQueryClient();

  const mutation = useMutation((cartId: number) => deleteCartItem(cartId), {
    onSuccess: () => {
      queryClient.invalidateQueries(['cartItems']);
    },
  });
  return { ...mutation, deleteCartMutate: mutation.mutateAsync };
}

export function useDeleteAllCart() {
  const queryClient = useQueryClient();

  const mutation = useMutation(() => deleteAll(), {
    onSuccess: () => {
      queryClient.invalidateQueries(['cartItems']);
    },
  });
  return { ...mutation, deleteAllCartMutate: mutation.mutateAsync };
}
