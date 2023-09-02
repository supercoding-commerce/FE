import { Outlet, useLocation } from 'react-router-dom';

import * as S from './DefaultLayout.styles.tsx';

const NO_HEADER_URL = ['/signup', '/signup/seller', '/signup/buyer', '/signin'];
const SEARCH_HEADER_URL = ['/', '/products', '/category'];

export function DefaultLayout() {
  const location = useLocation();

  const Header = getHeader(location.pathname);
  return (
    <S.DefaultLayoutWrapper>
      {Header}
      <Outlet />
    </S.DefaultLayoutWrapper>
  );
}

function getHeader(pathname: string) {
  if (NO_HEADER_URL.includes(pathname)) {
    return <header>NO Header</header>;
  }
  if (SEARCH_HEADER_URL.includes(pathname)) {
    return <header>SearchHeader</header>;
  }
  return <header>DEFAULT HEADER</header>;
}
