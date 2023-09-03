import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

import { theme } from '@/styles/theme';

export const LinkBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  > p {
    color: white;
    ${theme.font.body2}
  }
`;

export const LinkText = styled(Link)`
  color: ${theme.color.brand};
  ${theme.font.body1}
`;
