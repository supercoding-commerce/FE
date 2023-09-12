import Icon from '@/components/common/Icon';
import * as S from '../Chat.styles';

type headerProps = {
  handleLeave: () => void;
  shopName: string;
};

const ChatDetailHeader = ({ handleLeave, shopName }: headerProps) => {
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
