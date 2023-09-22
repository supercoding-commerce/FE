import styled from '@emotion/styled';

import { theme } from '@/styles/theme.ts';

export const SearchListWrapper = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  top: 60px;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;
  position: absolute;
`;

export const SearchList = styled.li`
  ${theme.font.body1}
  padding: 10px 30px;
  border-top: 1px solid #eaeaea;
  list-style: none;
`;

export const SearchTextCon = styled.div`
  display: flex;
  align-items: center;
`;

export const SearchText = styled.span`
  margin-left: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 280px;
`;
