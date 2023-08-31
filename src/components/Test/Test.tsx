import styled from '@emotion/styled';

import { theme } from '@/styles/theme.ts';

function Test() {
  return (
    <div>
      하이
      <H0>Title</H0>
      <H1>Title</H1>
      <Body0>Title</Body0>
    </div>
  );
}

export default Test;

const H0 = styled.h1`
  ${theme.font.h0}
  color: ${theme.color.brand}
`;

const H1 = styled.h2`
  ${theme.font.h1}
`;

const Body0 = styled.span`
  ${theme.font.body0}
`;
