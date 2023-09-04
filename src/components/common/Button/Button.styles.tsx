import styled from '@emotion/styled';

import { theme } from '@/styles/theme.ts';

export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  padding: 0.5rem;
  border: 1px solid black;
  cursor: pointer;

  &.variant {
    &_contained {
      background-color: var(--background-color);
      color: var(--color);

      &:disabled,
      &:disabled:hover {
        opacity: 0.4;
        background-color: var(--background-color);
      }
    }

    &_outlined {
      background-color: transparent;
      border-color: var(--color);
      color: var(--color);

      &:disabled,
      &:disabled:hover {
        opacity: 0.4;
        color: var(--color);
        border-color: var(--color);
      }
    }

    &_main {
      background-color: black;
      color: ${theme.color.brand};
      border-radius: 8px;

      &:disabled,
      &:hover:disabled {
        opacity: 0.4;
        color: gray;
      }
    }
  }

  &.size {
    &_large {
      width: var(--width);
      height: 64px;
      ${theme.font.body0};
      padding: 10px 12px;
    }
    &_medium {
      height: 40px;
      border-radius: 8px;
      ${theme.font.body1};
      padding: 8px 12px;
      width: var(--width);
    }
    &_small {
      height: 26px;
      border-radius: 20px;
      ${theme.font.body3};
      padding: 7px 12px;
      width: var(--width);
    }
    &_xsmall {
      height: 20px;
      border-radius: 3px;
      padding: 2px;
      ${theme.font.body3};
    }
  }

  &.circle {
    border-radius: 100%;
    width: var(--width);
    height: var(--height);
    padding: 0px 0px;
  }

  &.full-width {
    width: 100% !important;
  }

  height: var(--height) !important;
  width: var(--width) !important;
`;
