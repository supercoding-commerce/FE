import styled from '@emotion/styled';

import { theme } from '@/styles/theme';

export const SignInContainer = styled.main`
  width: 100%;
  height: calc(100vh - 150px);
  padding: 120px 30px 0 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SignInLogo = styled.h1`
  margin-bottom: 50px;
  ${theme.font.h0}
`;

export const SignInForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 80px;
  > div {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;

export const FontBox = styled.p`
  ${theme.font.body0}
`;

export const KakaoFontBox = styled(FontBox)`
  width: 130px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const OrBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 35px;
`;

export const LineDiv = styled.div`
  width: 147px;
  height: 1px;
  background: #9ba5b7;
`;
