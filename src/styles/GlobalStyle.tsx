import emotionReset from 'emotion-reset';
import { css, Global } from '@emotion/react';

function GlobalStyle() {
  return <Global styles={styles} />;
}

export default GlobalStyle;

const styles = css`
  ${emotionReset}
  * {
    box-sizing: border-box;
  }

  @font-face {
    font-family: 'SUIT';
    src: url('/fonts/SUIT-Bold.ttf');
  }

  body {
    font-family: 'SUIT', sans-serif;
  }
`;
