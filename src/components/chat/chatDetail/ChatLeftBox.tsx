import ChatLeaveBox from '@/components/chat/chatDetail/ChatLeaveBox';
import Icon from '@/components/common/Icon';
import * as S from '../Chat.styles';

type MsgProps = {
  content: string;
  role: string;
  shopImageUrl: string;
  sender: string;
};

const ChatLeftBox = ({ content, role, shopImageUrl, sender }: MsgProps) => {
  return (
    <>
      {sender === 'server' ? (
        <ChatLeaveBox content={content} />
      ) : (
        <S.ChatLeftBox>
          {role === 'seller' ? (
            <div className="leftbox_icon_wrapper">
              <Icon name="IconSmile" width="30px" color="white" />
            </div>
          ) : (
            <div className="leftbox_img_wrapper">
              <img src={shopImageUrl} alt="로고" />
            </div>
          )}

          <div className="leftbox_wrapper">
            <span>{content}</span>
          </div>
        </S.ChatLeftBox>
      )}
    </>
  );
};

export default ChatLeftBox;
