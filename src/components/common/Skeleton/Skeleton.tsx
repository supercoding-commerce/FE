import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

import { theme } from '@/styles/theme';

export const Skeleton = styled.div<{
  width: string | number;
  height: string | number;
}>(({ width, height }) => ({
  width,
  height,
  backgroundColor: theme.color.gray,
  animation: `${opacity} 2s ease-in-out 0.5s infinite`,
}));

const opacity = keyframes`
    0% {
        opacity: 1;
    }

    50% {
        opacity: 0.4;
    }

    100% {
        opacity: 1;
    }
`;

export default Skeleton;
