import { useQuery, UseQueryOptions } from '@tanstack/react-query';

import { getReview } from '@/apis/product';
import { DetailReview } from '@/components/Detail/detailReview/Review';
import { queryKeys } from '@/queries/queryKeys.ts';

export const useGetReview = (
  productId: number,
  options?: Omit<UseQueryOptions<DetailReview[]>, 'queryKey' | 'queryFn'>,
) => {
  return useQuery<DetailReview[]>([queryKeys.review, productId], () => getReview(productId), {
    ...options,
  });
};
