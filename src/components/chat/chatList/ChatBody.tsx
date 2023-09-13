import { list } from '@/components/chat/ChatList';
import ChatBox from '@/components/chat/chatList/ChatBox';
import * as S from '../Chat.styles';

type ChatBodyProps = {
  chatList: list[];
};

const ChatBody = ({ chatList }: ChatBodyProps) => {
  console.log('chatList1', chatList);
  return (
    <S.ChatBody>
      {chatList?.map((item, idx) => {
        return <ChatBox key={idx} lastChat={item.lastChat.content} sender={item.lastChat.sender} />;
      })}
    </S.ChatBody>
  );
};

export default ChatBody;
