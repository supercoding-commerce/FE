import { useQuery, UseQueryOptions } from 'react-query';

import { getInfo, UserInfo } from '@/apis/user.ts';
import { queryKeys } from '@/queries/queryKeys.ts';

export const useGetUserInfo = (
  options?: Omit<UseQueryOptions<UserInfo>, 'queryKey' | 'queryFn'>,
) => {
  return useQuery<UserInfo>([queryKeys.user], () => getInfo(), { ...options });
};
