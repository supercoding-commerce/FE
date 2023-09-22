import styled from '@emotion/styled';

import { theme } from '@/styles/theme.ts';

export const Textarea = styled.textarea`
  padding: 10px;
  border-radius: 0.5rem;
  width: 100%;
  background-color: transparent;
  outline: none;
  border: 2px solid ${theme.color.borderColor};
  height: 150px;

  &:focus-within {
    border: 2px solid black;
  }

  &::placeholder {
    color: #999;
    text-overflow: ellipsis;
  }
`;
