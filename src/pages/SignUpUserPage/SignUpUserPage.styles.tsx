import styled from '@emotion/styled';

import { theme } from '@/styles/theme';

export const SignUpContainerBox = styled.div`
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    height: 30%;
    background: #535353;
    border-radius: 30px;
  }

  &::-webkit-scrollbar-track {
    background: #cecece;
  }
`;

export const SingUpUserContainer = styled.main`
  width: 100%;
  height: auto;
  padding: 85px 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  position: relative;
`;

export const SignUpTitle = styled.h2`
  ${theme.font.h2}
  margin-bottom: 45px;
`;
