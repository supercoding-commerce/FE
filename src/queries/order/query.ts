import { useQuery, UseQueryOptions } from '@tanstack/react-query';

import { getOrders, getSellingProduct, OrderProduct } from '@/apis/order.ts';
import { queryKeys } from '@/queries/queryKeys.ts';

export const useGetOrders = (options?: Omit<UseQueryOptions<Order[]>, 'queryKey' | 'queryFn'>) => {
  return useQuery<Order[]>([queryKeys.order], () => getOrders(), { ...options });
};

export const useGetSellingProduct = (
  options?: Omit<UseQueryOptions<OrderProduct[]>, 'queryKey' | 'queryFn'>,
) => {
  return useQuery<OrderProduct[]>([queryKeys.order], () => getSellingProduct(), { ...options });
};
