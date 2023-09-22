import styled from '@emotion/styled';

import { theme } from '@/styles/theme';

export const SelectContainer = styled.article`
  width: var(--width);
  height: var(--height);
  ${theme.font.body1}
  background-color: white;
`;

export const SelectedBox = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid ${theme.color.black};
  border-radius: 5px;
  padding: 0 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: transparent;
  cursor: pointer;
  &.open {
    border-radius: 5px 5px 0 0;
    background-color: #ececec;
  }
`;

export const OptionBox = styled.div`
  position: relative;
  width: 100%;
  max-height: 150px;
  overflow-y: scroll;
  overflow-x: hidden;
  border: 1px solid ${theme.color.black};
  border-top: none;
  &::-webkit-scrollbar {
    width: 5px;
    border-radius: 10px;
    &-thumb {
      height: 30%;
      background-color: #cacaca;
      opacity: 0.5;
      border-radius: 10px;
    }
    &-track {
      background-color: #ebebeb;
      opacity: 0.1;
    }
  }
`;

export const OptionUl = styled.ul`
  position: relative;
  width: 100%;
  height: auto;
  transition: all ease-in-out 1s;
  > li {
    width: 100%;
    height: var(--height);
    border-bottom: 1px solid #bbbbbb;
    display: flex;
    align-items: center;
    padding: 0 15px;
    text-overflow: ellipsis;
    background-color: white;
    cursor: pointer;
    &:hover {
      background-color: ${theme.color.black};
      color: ${theme.color.brand};
    }
    &:last-child {
      border-bottom: none;
    }
  }
`;
