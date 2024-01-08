import { useMutation } from '@tanstack/react-query';

import { deleteWish, postWish } from '@/apis/wish';

export function usePostWish() {
  const mutation = useMutation((productId: number) => postWish(productId));

  return { ...mutation, postWishMutate: mutation.mutateAsync };
}

export function useDeleteWish() {
  const mutation = useMutation((productId: number) => deleteWish(productId));

  return { ...mutation, deleteWishMutate: mutation.mutateAsync };
}
