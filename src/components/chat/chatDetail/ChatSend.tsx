import Icon from '@/components/common/Icon';
import { Input } from '@/components/common/Input/Input';
import * as S from '../Chat.styles';

const ChatSend = () => {
  return (
    <S.ChatInput>
      <Input
        type="text"
        size="sm"
        placeholder="메시지를 입력해주세요."
        style={{ width: '350px', height: '40px' }}
        rightSlot={<Icon name="IconAirplane" />}
      />
    </S.ChatInput>
  );
};

export default ChatSend;
