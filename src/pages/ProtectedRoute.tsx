import { PropsWithChildren } from 'react';
import { Navigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { userState } from '@/recoil/userState.ts';

/**
 * @desc 기본적으로 로그인에 필요한 Route 인지 검사, 옵션으로 isUser, isSeller 를 통해 해당 유저만 접근할 수 있도록 처리
 */
type ProtectedRouteProps = {
  onlySeller?: boolean;
  onlyBuyer?: boolean;
};
export function ProtectedRoute({
  children,
  onlySeller = false,
  onlyBuyer = false,
}: PropsWithChildren<ProtectedRouteProps>) {
  const user = useRecoilValue(userState);
  const isLogin = !!(user.email && user.role);

  if (!isLogin) {
    return <Navigate to={'/signin'} replace />;
  }

  if (onlySeller && user.role !== 'SELLER') {
    return <Navigate to={'/signin'} replace />;
  }

  if (onlyBuyer && user.role !== 'USER') {
    return <Navigate to={'/signin'} replace />;
  }

  return children;
}
