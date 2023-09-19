import { useEffect } from 'react';
import { isMobile } from 'react-device-detect';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

import Footer from '@/components/common/Footer/Footer.tsx';
import { Header } from '@/components/common/Header/Header.tsx';
import { RoutePath } from '@/pages/routes.tsx';
import * as S from './DefaultLayout.styles.tsx';
const ONLY_DESKTOP_URL: RoutePath[] = ['/new/product', '/update/product'];

export function DefaultLayout() {
  const location = useLocation();
  const navigate = useNavigate();

  const onlyDesktop = ONLY_DESKTOP_URL.includes(location.pathname);

  useEffect(() => {
    // 상품 등록 및 수정은 PC 환경에서만 가능
    if (onlyDesktop && isMobile) {
      alert('데스크탑 환경에서 이용 가능합니다.');
      navigate('/');
    }
  }, [onlyDesktop, isMobile]);

  return (
    <S.DefaultLayoutWrapper onlyDesktop={onlyDesktop}>
      <Header />
      <Outlet />
      <Footer />
      <div id={'dialog-root'} />
    </S.DefaultLayoutWrapper>
  );
}
