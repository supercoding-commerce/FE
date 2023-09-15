import Icon from '@/components/common/Icon';
import * as S from '../Chat.styles';

type headerProps = {
  handleLeave: () => void;
  clickPrevButton: () => void;
  shopName: string;
};

const ChatDetailHeader = ({ handleLeave, clickPrevButton, shopName }: headerProps) => {
  return (
    <S.ChatDetailHeader>
      <div className="arrow_btn_wrapper">
        <Icon
          name="IconArrowLeft"
          color="green"
          cursor={'pointer'}
          width="30px"
          height="30px"
          onClick={() => {
            handleLeave();
            clickPrevButton();
          }}
        />
      </div>
      <div className="detail_title_wrapper">
        <span>{shopName}</span>
      </div>
    </S.ChatDetailHeader>
  );
};

export default ChatDetailHeader;
