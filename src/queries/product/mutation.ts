import { useMutation, useQueryClient } from '@tanstack/react-query';

import { createProduct } from '@/apis/product.ts';
import { queryKeys } from '@/queries/queryKeys.ts';

export const useCreateProduct = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation((payload: FormData) => createProduct(payload), {
    onSuccess: async () => {
      await queryClient.invalidateQueries([queryKeys.product]);
    },
  });

  return { ...mutation, createProductMutate: mutation.mutate };
};
