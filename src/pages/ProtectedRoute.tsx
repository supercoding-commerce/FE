import { PropsWithChildren } from 'react';
import { Navigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { userState } from '@/recoil/userState.ts';

/**
 * @desc 기본적으로 로그인에 필요한 Route 인지 검사, 옵션으로 isUser, isSeller 를 통해 해당 유저만 접근할 수 있도록 처리
 */

type ProtectedRouteProps = {
  onlySeller?: boolean;
};
export function ProtectedRoute({
  children,
  onlySeller = false,
}: PropsWithChildren<ProtectedRouteProps>) {
  const user = useRecoilValue(userState);
  const isLogin = !!(user.email && user.role);

  if (!isLogin) {
    // alert('로그인 유저만 접근 가능합니다.');
    return <Navigate to={'/signin'} replace />;
  }

  if (onlySeller && user.role !== 'SELLER') {
    // alert('Oops!! 판매자만 접근이 가능합니다');
    return <Navigate to={'/signin'} replace />;
  }

  return children;
}
