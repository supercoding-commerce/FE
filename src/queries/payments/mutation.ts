import { useMutation, useQueryClient } from '@tanstack/react-query';

import { purchase, PurchasePayload } from '@/apis/payment.ts';
import { queryKeys } from '@/queries/queryKeys.ts';

export const usePurchase = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation((payload: PurchasePayload) => purchase(payload), {
    onSuccess: async () => {
      await queryClient.invalidateQueries([queryKeys.order]);
    },
  });

  return { ...mutation, purchaseMutate: mutation.mutate };
};
