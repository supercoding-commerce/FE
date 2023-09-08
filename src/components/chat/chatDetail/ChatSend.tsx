import { useState } from 'react';

import Icon from '@/components/common/Icon';
import { Input } from '@/components/common/Input/Input';
import * as S from '../Chat.styles';

type sendMessageProps = {
  sendMessage: (e: string) => void;
};

const ChatSend = ({ sendMessage }: sendMessageProps) => {
  const [text, setText] = useState<string>('');

  const inputHandle = (e: string) => {
    setText(e);
  };

  console.log(text);

  return (
    <S.ChatInput>
      <Input
        type="text"
        size="sm"
        placeholder="메시지를 입력해주세요."
        style={{ width: '350px', height: '40px' }}
        rightSlot={<Icon name="IconAirplane" onClick={() => sendMessage(text)} />}
        onChange={(e) => inputHandle(e.target.value)}
      />
    </S.ChatInput>
  );
};

export default ChatSend;
