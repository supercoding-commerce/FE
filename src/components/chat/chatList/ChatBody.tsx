import { list } from '@/components/chat/ChatList';
import ChatBox from '@/components/chat/chatList/ChatBox';
import * as S from '../Chat.styles';

type ChatBodyProps = {
  chatList: list[];
  clickListBox: (customRoomId: string) => void;
};

const ChatBody = ({ chatList, clickListBox }: ChatBodyProps) => {
  console.log('chatList1', chatList);

  return (
    <S.ChatBody>
      {chatList?.map((item, idx) => {
        return (
          <div onClick={() => clickListBox(item.customRoomId)}>
            <ChatBox
              key={idx}
              lastChat={item.lastChat.content}
              sender={item.lastChat.sender}
              productName={item.productName}
              image={item.imageUrl}
            />
          </div>
        );
      })}
    </S.ChatBody>
  );
};

export default ChatBody;
