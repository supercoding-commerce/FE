import styled from '@emotion/styled';

import Icon from '@/components/common/Icon.tsx';
import { theme } from '@/styles/theme.ts';

function Test() {
  return (
    <div>
      하이
      <H0>Title</H0>
      <H1>Title</H1>
      <Body0>Title</Body0>
      <div>
        <H0>Icons</H0>
        <div>
          <H2>SIZE 기본</H2>
          <Icon name="IconSearch" />
          <Icon name="IconUser" />
          <Icon name="IconBag" />
        </div>
        <div>
          <H2>SIZE Custom & Color Custom</H2>
          <Icon name="IconSearch" size={30} />
          <Icon name="IconUser" width={'50px'} height={'40px'} color="brand" />
          <Icon name="IconBag" size={100} />
        </div>
      </div>
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

const H2 = styled.h3`
  ${theme.font.h2}
`;

const Body0 = styled.span`
  ${theme.font.body0}
`;
