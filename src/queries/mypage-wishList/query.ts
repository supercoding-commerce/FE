import { useQuery } from '@tanstack/react-query';

import { getWish } from '@/apis/wish';

export function useGetWish() {
  return useQuery(['wishList'], () => getWish());
}
