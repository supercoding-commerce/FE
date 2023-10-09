import Icon from '@/components/common/Icon';
import * as S from '../Chat.styles';

type headerProps = {
  clickPrevButton: () => void;
  handleOpen: () => void;
  shopName: string;
};

const ChatDetailHeader = ({ clickPrevButton, handleOpen, shopName }: headerProps) => {
  return (
    <S.ChatDetailHeader>
      <div className="arrow_btn_wrapper">
        <Icon
          name="IconArrowLeft"
          color="green"
          cursor={'pointer'}
          size={30}
          onClick={() => {
            clickPrevButton();
          }}
        />
      </div>
      <div className="detail_title_wrapper">
        <span>{shopName}</span>
      </div>
      <div className="close_btn_wrapper">
        <Icon
          name="IconX"
          color="borderColor"
          cursor={'pointer'}
          size={25}
          onClick={() => {
            handleOpen();
          }}
        />
      </div>
    </S.ChatDetailHeader>
  );
};

export default ChatDetailHeader;
