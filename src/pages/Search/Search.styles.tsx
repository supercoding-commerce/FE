import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

import { theme } from '@/styles/theme.ts';

export const SearchHeader = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`;

export const SearchContainer = styled.div`
  padding: 20px 30px;
`;

export const InputDiv = styled.div`
  height: 33px;
  border: 1px solid ${theme.color.black};
  border-radius: 20px;
  display: flex;
  align-items: center;
  overflow: hidden;
  padding: 0 10px;
  width: 70%;
  margin-left: 20px;
`;

export const IconBox = styled.div`
  position: absolute;
  left: 30px;
  width: 28px;
  height: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.input`
  width: 100%;
  outline: none;
  border: none;
  background-color: transparent;
`;

export const TagWrap = styled.div`
  width: 100%;
  outline: none;
  border: none;
  background-color: transparent;
`;

export const TagContainer = styled.div`
  margin-top: 20px;
  margin-right: 5px;
  font-size: 14px;
  line-height: 21px;
  background-color: white;
  border-radius: 20px;
  display: inline-flex;
  align-items: center;
  padding: 8px 11px;
  cursor: pointer;
  ${theme.font.body3}
`;
export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const RecentSearch = styled.h1`
  ${theme.font.body1}
`;
export const DeleteAll = styled.h1`
  ${theme.font.body1}
  cursor: pointer;
`;

export const TagRecentSearch = styled(Link)`
  padding-right: 5px;
`;
