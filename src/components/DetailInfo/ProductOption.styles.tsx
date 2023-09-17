import styled from '@emotion/styled';

import { theme } from '@/styles/theme';

export const OptionContainer = styled.div`
  height: auto;
`;

export const Option = styled.div``;

export const Options = styled.div`
  height: 80px;
  font: ${theme.font.body0};
  padding: 0 30px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  display: flex;
  p {
    width: 100%;
    justify-content: flex-start;
    margin-bottom: 10px;
  }
`;

export const SelectedOptionContainer = styled.span`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 30px;
  border-top: 2px solid #d8d8d8;
  border-bottom: 2px solid #d8d8d8;
`;

export const SelectedOption = styled.p`
  margin-right: 50px;
  font: ${theme.font.body2};
`;

export const OptionPrice = styled.p`
  font: ${theme.font.body2};
  margin-right: 3px;
  margin-left: 30px;
`;

export const OptionPriceContainer = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
