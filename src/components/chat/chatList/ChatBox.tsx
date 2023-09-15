import { useEffect, useState } from 'react';

import Icon from '@/components/common/Icon';
import * as S from '../Chat.styles';

type ChatBoxProps = {
  lastChat: string;
  sender: string;
  productName: string;
  image: string;
};

const ChatBox = ({ lastChat, sender, productName, image }: ChatBoxProps) => {
  const [textCut, setTextCut] = useState<string>('');

  /** textLengthCut20() : 마지막 채팅 미리보기 20글자까지만 보이게 */
  const textLengthCut20 = (text: string) => {
    const test = text.slice(0, 20);
    if (test.length >= 15) setTextCut(test + ' ...');
    else setTextCut(test);
  };

  useEffect(() => {
    textLengthCut20(lastChat);
  }, [lastChat]);

  return (
    <S.ChatBox>
      <div className="box_img_wrapper">
        <img src={image} alt="상품 이미지" />
      </div>
      <div className="box_title_container">
        <div className="container">
          <div className="box_title_wrapper">
            <span>{productName} 상품 문의</span>
          </div>
          <div className="box_subtitle_wrapper">
            <Icon name={'IconRate'} fill={'green'} width="10px" height="10px" />
            <span>12분 전</span>
            <span className="gray_line">|</span>
            <span>{sender}</span>
          </div>
        </div>
        <div className="box_text_wrapper">
          <span>{textCut}</span>
        </div>
      </div>
    </S.ChatBox>
  );
};

export default ChatBox;
