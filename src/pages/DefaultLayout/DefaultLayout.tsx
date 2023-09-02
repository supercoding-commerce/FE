import { Outlet, useLocation } from 'react-router-dom';

import { Header } from '@/components/common/Header/Header.tsx';
import { RoutePath } from '@/pages/routes.tsx';
import * as S from './DefaultLayout.styles.tsx';

const ONLY_DESKTOP_URL: RoutePath[] = ['/new/product', '/update/product'];

export function DefaultLayout() {
  const location = useLocation();
  const onlyDesktop = ONLY_DESKTOP_URL.includes(location.pathname);

  if (onlyDesktop) {
    // TODO: PC 용 alert 띄우고 화면 이동
  }

  return (
    <S.DefaultLayoutWrapper onlyDesktop={onlyDesktop}>
      <Header />
      <Outlet />
    </S.DefaultLayoutWrapper>
  );
}
