import styled from '@emotion/styled';

import { theme } from '@/styles/theme';

export const SignUpContainer = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 200px 30px 0 30px;
  height: calc(100vh - 150px);
`;

export const SingUpLogo = styled.h1`
  margin-bottom: 100px;
  ${theme.font.h0}
`;

export const BtnBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const FontStyle = styled.p`
  ${theme.font.body0}
  color: #000;
`;
