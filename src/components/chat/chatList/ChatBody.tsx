import { List } from '@/components/chat/ChatList';
import ChatBox from '@/components/chat/chatList/ChatBox';
import * as S from '../Chat.styles';

type ChatBodyProps = {
  chatList: List[];
  clickListBox: (customRoomId: string, userId: number, userName: string) => void;
};

const ChatBody = ({ chatList, clickListBox }: ChatBodyProps) => {
  return (
    <S.ChatBody>
      {chatList?.map((item, idx) => {
        return (
          <div
            onClick={() => clickListBox(item.customRoomId, item.userId, item.userName)}
            key={idx}
          >
            <ChatBox
              lastChat={item.lastChat.content}
              sender={item?.lastChat.sender}
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
