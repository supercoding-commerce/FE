import styled from '@emotion/styled';

import { theme } from '@/styles/theme.ts';

export const OptionItemWrapper = styled.div`
  border-radius: 50px;
  background-color: white;
  padding: 8px;
  height: 39px;

  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${theme.color.black};
  cursor: pointer;

  width: var(--width);
  ${theme.font.body0};
  white-space: nowrap;
`;
