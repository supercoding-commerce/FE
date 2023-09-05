import ChatDetailIntro from '@/components/chat/chatDetail/ChatDetailIntro';
import ChatLeftBox from '@/components/chat/chatDetail/ChatLeftBox';
import ChatRightBox from '@/components/chat/chatDetail/ChatRightBox';
import * as S from '../Chat.styles';

const ChatDetailBody = () => {
  return (
    <S.ChatDetailBody>
      <ChatDetailIntro />
      <ChatLeftBox />
      <ChatRightBox />
      <ChatLeftBox />
      <ChatRightBox />
      <ChatLeftBox />
      <ChatRightBox />
      <ChatLeftBox />
      <ChatRightBox />
      <ChatLeftBox />
      <ChatRightBox />
    </S.ChatDetailBody>
  );
};

export default ChatDetailBody;
