import Icon from '@/components/common/Icon';
import * as S from '../Chat.styles';

type ChatHeaderProps = {
  shopName: string;
  shopImg: string;
  handleOpen: () => void;
};

const ChatHeader = ({ shopName, shopImg, handleOpen }: ChatHeaderProps) => {
  return (
    <S.ChatHeader>
      <div className="header_img_wrapper">
        <img src={shopImg} alt="고객센터 이미지" />
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
      <div className="header_startBtn_wrapper" onClick={handleOpen}>
        <Icon
          className="startBtn_icon"
          name={'IconX'}
          width="25px"
          height="25px"
          cursor={'pointer'}
        />
      </div>
    </S.ChatHeader>
  );
};

export default ChatHeader;
