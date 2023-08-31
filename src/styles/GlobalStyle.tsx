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
`;
