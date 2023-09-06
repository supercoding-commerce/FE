import Icon from '@/components/common/Icon';
import * as S from '../Chat.styles';

const ChatDetailHeader = () => {
  return (
    <S.ChatDetailHeader>
      <div className="arrow_btn_wrapper">
        <Icon name="IconArrowLeft" color="green" cursor={'pointer'} width="30px" height="30px" />
      </div>
      <div className="detail_title_wrapper">
        <span>어쩌구 쇼핑</span>
      </div>
    </S.ChatDetailHeader>
  );
};

export default ChatDetailHeader;
