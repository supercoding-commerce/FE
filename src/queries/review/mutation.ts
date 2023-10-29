import { useMutation, useQueryClient } from '@tanstack/react-query';

import { deleteReview, postReview } from '@/apis/review';
import { queryKeys } from '@/queries/queryKeys.ts';

export const useCreateReview = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation((payload: FormData) => postReview(payload), {
    onSuccess: async () => {
      await queryClient.invalidateQueries([queryKeys.review]);
    },
  });

  return { ...mutation, createReviewMutate: mutation.mutate };
};

export const useDeleteReview = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation((reviewId: number) => deleteReview(reviewId), {
    onSuccess: async () => {
      await queryClient.invalidateQueries([queryKeys.review]);
    },
  });

  return { ...mutation, deleteReviewMutate: mutation.mutate };
};
