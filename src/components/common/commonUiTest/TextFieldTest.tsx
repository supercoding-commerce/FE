import styled from '@emotion/styled';

import Button from '@/components/common/Button/Button';
import { Input } from '@/components/common/Input/Input';
import TextField from '@/components/common/TextField/TextField';

const TextFieldTest = () => {
  return (
    <Div>
      <TextField
        labelId="default"
        label="default"
        help="help me!!!"
        error={false}
        required={false}
        rightSlot={
          <Button variant="main" size="medium">
            성공!
          </Button>
        }
      >
        <Input
          id={'default'}
          isFullWidth
          variant="underline"
          placeholder="Default"
          style={{ flex: '1' }}
        />
      </TextField>
      <TextField labelId="error" label="error" error>
        <Input id={'error'} isFullWidth variant="underline" placeholder="Error" />
      </TextField>
      <TextField labelId="required" label="required" required>
        <Input id="required" required isFullWidth variant="underline" placeholder="Required" />
      </TextField>
    </Div>
  );
};
export default TextFieldTest;

const Div = styled.div`
  padding: 0 30px;
`;
