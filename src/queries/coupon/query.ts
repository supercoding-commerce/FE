import { useQuery, UseQueryOptions } from 'react-query';

import { getCoupon } from '@/apis/coupon.ts';
import { queryKeys } from '@/queries/queryKeys.ts';

export const useGetCoupon = (options?: Omit<UseQueryOptions<Coupon[]>, 'queryKey' | 'queryFn'>) => {
  return useQuery<Coupon[]>([queryKeys.coupon], () => getCoupon(), { ...options });
};
