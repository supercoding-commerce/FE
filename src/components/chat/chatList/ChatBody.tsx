import { List } from '@/components/chat/ChatList';
import ChatBox from '@/components/chat/chatList/ChatBox';
import { ChatAlarm } from '@/hooks/useSSE';
import * as S from '../Chat.styles';

type ChatBodyProps = {
  chatList: List[];
  clickListBox: (customRoomId: string, userId: number, userName: string) => void;
  newMessage?: ChatAlarm;
};

const ChatBody = ({ chatList, clickListBox, newMessage }: ChatBodyProps) => {
  return (
    <S.ChatBody>
      {chatList?.map((item, idx) => {
        return (
          <div
            onClick={() => clickListBox(item.customRoomId, item.userId, item.userName)}
            key={idx}
          >
            <ChatBox
              lastChat={
                newMessage?.customRoomId === item.customRoomId
                  ? newMessage?.content
                  : item.lastChat.content
              }
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
