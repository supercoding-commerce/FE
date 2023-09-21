import styled from '@emotion/styled';

import { theme } from '@/styles/theme';

export const FooterContainer = styled.footer`
  width: 100%;
  height: 170px;
  background-color: ${theme.color.black};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 25px 0;
  position: absolute;
  bottom: 0;
`;

export const SnsIconsBox = styled.div`
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  background-color: #4bffff;
  /* TODO-yukddong : sns아이콘 찾으면 추가하고 배경색 지우기 */
`;

export const Logo = styled.h1`
  color: ${theme.color.brand};
  ${theme.font.h1}
`;

export const CopyRight = styled.p`
  color: ${theme.color.backgroundColor};
  ${theme.font.body3}
`;
