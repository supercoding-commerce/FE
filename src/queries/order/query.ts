import { useQuery, UseQueryOptions } from '@tanstack/react-query';

import { getOrders } from '@/apis/order.ts';
import { queryKeys } from '@/queries/queryKeys.ts';

export const useGetOrders = (options?: Omit<UseQueryOptions<Order[]>, 'queryKey' | 'queryFn'>) => {
  return useQuery<Order[]>([queryKeys.order], () => getOrders(), { ...options });
};
