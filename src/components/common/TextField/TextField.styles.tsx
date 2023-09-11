import styled from '@emotion/styled';

import { theme } from '@/styles/theme';

export const TextField = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const TextFieldLabel = styled.div`
  width: 100%;
  display: flex;
`;

export const LabelWrapper = styled.div``;

export const Label = styled.label`
  font: ${theme.font.body1};
  display: flex;
  flex-direction: column;
  gap: 12px;

  &.medium {
    gap: 16px;
    color: #000;
    font-family: SUITE;
    font-size: 28px;
    font-weight: 500;
  }
`;

export const Help = styled.div`
  font: ${theme.font.body2};
  color: #d8d8d8;
`;

export const Required = styled.div`
  color: ${theme.color.pink};
  margin-left: 3px;
  padding-top: 5px;
`;
export const ChildrenWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex: 1;
`;

export const RightSlot = styled.div`
  margin-left: 10px;
`;
