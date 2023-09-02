import { PropsWithChildren } from 'react';

import * as S from './DesktopLayout.styles.tsx';

export function DesktopLayout({ children }: PropsWithChildren) {
  const Header = <header>DEFAULT HEADER</header>;
  return (
    <S.DesktopLayoutWrapper>
      {Header}
      {children}
    </S.DesktopLayoutWrapper>
  );
}
