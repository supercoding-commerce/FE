import styled from '@emotion/styled';

export const SignInContainer = styled.main`
  width: 100%;
  height: calc(100vh - 170px);
  padding: 180px 30px 0 30px;
`;

export const SignInLogo = styled.h1``;

export const SignInForm = styled.form`
  width: 100%;
  height: 240px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  > div {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;
