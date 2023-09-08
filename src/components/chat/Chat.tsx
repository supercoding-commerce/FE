// import ChatDetailBody from '@/components/chat/chatDetail/ChatDetailBody';
// import ChatDetailHeader from '@/components/chat/chatDetail/ChatDetailHeader';
// import ChatSend from '@/components/chat/chatDetail/ChatSend';
import ChatBody from '@/components/chat/chatList/ChatBody';
import ChatHeader from '@/components/chat/chatList/ChatHeader';
import * as S from './Chat.styles';

const Chat = () => {
  return (
    <S.Chat>
      <ChatHeader />
      <ChatBody />
      {/* <ChatDetailHeader />
      <ChatDetailBody />
      <ChatSend /> */}
    </S.Chat>
  );
};

export default Chat;
