import styled from '@emotion/styled';

import { theme } from '@/styles/theme.ts';

export const DefaultLayoutWrapper = styled.main`
  max-width: 420px;
  margin: 0 auto;
  border: 1px solid red;
  background-color: ${theme.color.backgroundColor};

  // 구현하다가 막히면 이 부분 수정해도됨
  height: 100vh;
`;
