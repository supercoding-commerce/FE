import Icon from '@/components/common/Icon';
import * as S from '../Chat.styles';

const ChatBox = () => {
  return (
    <S.ChatBox>
      <div className="box_img_wrapper">
        <img src="" alt="고객센터 이미지" />
      </div>
      <div className="box_title_container">
        <div className="container">
          <div className="box_title_wrapper">
            <span>어쩌구 쇼핑</span>
          </div>
          <div className="box_subtitle_wrapper">
            <Icon name={'IconRate'} fill={'green'} width="10px" height="10px" />
            <span>12분 전</span>
          </div>
        </div>
        <div className="box_text_wrapper">
          <span>어떤 문의이실까요?</span>
        </div>
      </div>
    </S.ChatBox>
  );
};

export default ChatBox;
