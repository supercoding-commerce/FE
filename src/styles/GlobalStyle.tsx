import emotionReset from 'emotion-reset';
import { css, Global } from '@emotion/react';

import { theme } from '@/styles/theme.ts';

function GlobalStyle() {
  return <Global styles={styles} />;
}

export default GlobalStyle;

const styles = css`
  ${emotionReset}
  a {
    color: ${theme.color.black};
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }

  @font-face {
    font-family: 'SUIT';
    src:
      url('/fonts/SUIT-Bold.woff2') format('woff2'),
      url('/fonts/SUIT-Bold.woff') format('woff'),
      url('/fonts/SUIT-Bold.ttf') format('truetype');
    font-display: optional;
  }

  body {
    font-family: 'SUIT', sans-serif;
    background-color: #eaeaea;
  }
`;
