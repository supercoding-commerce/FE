import { ComponentProps, CSSProperties } from 'react';
import styled from '@emotion/styled';

interface FlexProps extends ComponentProps<'div'> {
  display?: 'inline-flex' | 'flex';
  align?: CSSProperties['alignItems'];
  justify?: CSSProperties['justifyContent'];
  direction?: CSSProperties['flexDirection'];
  gap?: CSSProperties['gap'];
}

export const Flex = styled.div<FlexProps>(
  ({ display = 'flex', align, justify, direction, gap }) => ({
    display: display,
    alignItems: align,
    justifyContent: justify,
    flexDirection: direction,
    gap,
  }),
);
