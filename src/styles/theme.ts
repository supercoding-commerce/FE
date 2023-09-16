import { css } from '@emotion/react';

export const theme = {
  color: {
    black: '#000000',
    white: '#ffffff',
    pink: '#FE4977',
    blue: '#6A8DFF',
    orange: '#F49325',
    yellow: '#FBF86A',
    green: '#55FE3A',
    brand: '#55FE3A',
    brandHover: '#8BFE6B',
    brandActive: '#34DA2A',
    backgroundColor: '#F5F5F5',
    error: '#fe4977',
    borderColor: '#9ba5b7',
    // svg 를 위한 처리
    current: 'current',
  },
  font: {
    mainTitle: css``,
    h0: css`
      font-family: SUITE;
      font-size: 48px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
    `,
    h1: css`
      font-family: SUITE;
      font-size: 32px;
      font-style: normal;
      font-weight: 600;
      line-height: 42px;
    `,
    h2: css`
      font-family: SUITE;
      font-size: 24px;
      font-style: normal;
      font-weight: 600;
      line-height: 32px;
    `,
    body0: css`
      font-family: SUITE;
      font-size: 18px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
    `,
    body0ExtraBold: css`
      font-family: SUITE;
      font-size: 18px;
      font-weight: 800;
      line-height: normal;
    `,
    body1: css`
      font-family: SUITE;
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: 24px;
    `,
    body2: css`
      font-family: SUITE;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    `,
    body2Bold: css`
      font-family: SUITE;
      font-size: 14px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
    `,
    body3: css`
      font-family: SUITE;
      font-size: 12px;
      font-style: normal;
      font-weight: 500;
      line-height: 16px;
      letter-spacing: 0.72px;
    `,
  },
} as const;

export type ThemeColor = keyof typeof theme.color;
