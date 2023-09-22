import styled from '@emotion/styled';

import { theme } from '@/styles/theme.ts';

export const Category = styled.div`
  width: 100%;
  height: 56px;
  border: 1px solid black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  background-color: white;
  box-sizing: border-box;

  &.active {
    background-color: ${theme.color.black};
  }

  .left {
    display: flex;
    justify-content: left;
    align-items: center;
    flex-direction: row;
    width: 90%;

    .category_icon {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      padding-right: 10px;
      padding-left: 20px;
    }

    .category_title {
      font-size: ${theme.font.mainTitle};
      color: ${theme.color.black};
      &.active {
        color: ${theme.color.green};
      }
    }
  }

  .right {
    display: flex;
    justify-content: right;
    align-items: center;
    width: 10%;

    .category_arrow {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      padding-right: 10px;
    }
  }
`;

export const CategoryOption = styled.div`
  width: 100%;
  height: 56px;
  border: 1px solid black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  background-color: white;

  &.active {
    background-color: ${theme.color.black};
  }

  .left {
    display: flex;
    justify-content: left;
    align-items: center;
    flex-direction: row;
    width: 90%;

    .category_icon {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      padding-right: 10px;
      padding-left: 20px;
    }

    .category_title {
      font-size: ${theme.font.mainTitle};
      color: ${theme.color.black};
      &.active {
        color: ${theme.color.green};
      }
    }
  }

  .right {
    display: flex;
    justify-content: right;
    align-items: center;
    width: 10%;

    .category_arrow {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      padding-right: 10px;
    }
  }
`;
