import Icon from '@/components/common/Icon';
import * as S from '../Chat.styles';

type ChatHeaderProps = {
  shopName: string;
};

const ChatHeader = ({ shopName }: ChatHeaderProps) => {
  return (
    <S.ChatHeader>
      <div className="header_img_wrapper">
        <img src="" alt="고객센터 이미지" />
      </div>
      <div className="header_title_container">
        <div className="title_wrapper">
          <span>{shopName}</span>
        </div>
        <div className="subtitle_wrapper">
          <Icon name={'IconRate'} fill={'green'} width="16px" height="16px" />
          <span>24시간 운영해요</span>
        </div>
      </div>
      <div className="header_startBtn_wrapper">
        <Icon
          className="startBtn_icon"
          name={'IconAdd'}
          width="35px"
          height="35px"
          cursor={'pointer'}
        />
      </div>
    </S.ChatHeader>
  );
};

export default ChatHeader;
