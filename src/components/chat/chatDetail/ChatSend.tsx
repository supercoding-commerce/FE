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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // 폼 제출 시 페이지 새로고침 방지
    sendMessage(text);
    setText('');
  };

  return (
    <S.ChatInput>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          size="sm"
          placeholder="메시지를 입력해주세요."
          style={{ width: '350px', height: '45px', borderRadius: '999px' }}
          rightSlot={
            <Icon
              name="IconAirplane"
              onClick={(e) => {
                e.preventDefault(); // 아이콘 클릭 이벤트의 기본 동작을 막음
                handleSubmit(e as unknown as React.FormEvent<HTMLFormElement>);
              }}
              type="submit"
            />
          }
          onChange={(e) => inputHandle(e.target.value)}
          value={text}
        />
      </form>
    </S.ChatInput>
  );
};

export default ChatSend;
