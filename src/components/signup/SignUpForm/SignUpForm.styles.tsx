import styled from '@emotion/styled';

import { theme } from '@/styles/theme';

export const SignUpFormContainer = styled.form`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 28px;
  align-items: center;
  /* background-color: tomato; */
`;

export const TextFieldWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: end;
  gap: 10px;
`;

export const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const RadioBox = styled.div`
  width: 100%;
`;

export const ImageInputWrapper = styled(InputWrapper)`
  > input {
    display: none;
  }
`;

export const ImageBox = styled.div`
  margin-top: 10px;
  width: 100px;
  height: 100px;
  border-radius: 10px;
  background-color: ${theme.color.pink};
  align-self: center;
`;
