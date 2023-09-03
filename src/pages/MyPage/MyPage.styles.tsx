import styled from '@emotion/styled';

import { theme } from '@/styles/theme.ts';

export const MyPageWrapper = styled.div`
  width: 100%;
  background-color: white;
  height: calc(100vh - 60px);
`;

export const Line = styled.hr`
  background-color: ${theme.color.backgroundColor};
  border: 7px solid ${theme.color.backgroundColor};
  margin: 0;
`;

export const UserInfoSection = styled.section`
  width: 100%;
  height: 245px;
  padding: 2rem;
`;

export const UserInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 21px;
  border: 1px solid ${theme.color.black};
  height: 100%;
`;

export const Nickname = styled.span`
  ${theme.font.h2}
`;

export const MyPageItemList = styled.ul``;

export const MyPageItemWrapper = styled.li`
  &::after {
    content: '';
    display: block;
    border: 1px solid ${theme.color.backgroundColor};
    width: 100%;
  }
`;
export const MyPageItem = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  height: 56px;
  cursor: pointer;
  ${theme.font.body0}
`;

export const ItemContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;
