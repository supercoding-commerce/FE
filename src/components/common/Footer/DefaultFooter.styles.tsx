import styled from '@emotion/styled';

import { theme } from '@/styles/theme';

export const FooterContainer = styled.footer`
  width: 100%;
  height: 150px;
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
  /* TODO-yukddong : sns아이콘 찾으면 추가하고 배경색 지우기 */
`;

export const Logo = styled.h1`
  color: ${theme.color.brand};
  ${theme.font.h1Bold}
`;

export const CopyRight = styled.p`
  color: #eaeaea;
  ${theme.font.body4}
`;
