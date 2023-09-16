import { useEffect, useState } from 'react';

import ChatButton from '@/components/chat/ChatButton';
import ChatDetail from '@/components/chat/ChatDetail';
import ChatList from '@/components/chat/ChatList';
import * as S from './Chat.styles';

const Chat = () => {
  const seller = { sellerId: 3, shopName: '상점3' };
  /** TODO: 로그인할때 유저정보에서 받아올 것. 리코일 쓰나? */
  const user = { userId: 12, userName: 'kristengreen' };
  /** TODO: 디테일 페이지에서 props로 받아올 것 */
  const product = { productId: 5, productName: 'what' };
  const isSeller = false;
  const role = isSeller ? 'seller' : 'user';
  const roomId = createCustomRoomId(seller.sellerId, product.productId, user.userId);

  const [customRoomId, setCustomRoomId] = useState<string>(roomId);
  const [isCustomRoomId, setIsCustomRoomId] = useState<boolean>(true);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  /** createCustomRoomId() : 소켓 방 열때 필요한 roomId 조합생성 */
  function createCustomRoomId(sellerId: number, productId: number, userId: number) {
    const userIdStr = String(userId).padStart(6, '0');
    const sellerIdStr = String(sellerId).padStart(6, '0');
    const productIdStr = String(productId).padStart(6, '0');

    const customRoomId = sellerIdStr + productIdStr + userIdStr;

    return customRoomId;
  }

  /** clickPrevButton() : 채팅방에서 뒤로가기 버튼 누르면
   * 1. 분기처리를 위해 customRoomId값을 빈 스트링을 넣는다. */
  const clickPrevButton = () => {
    setCustomRoomId('');
  };

  /** clickListBox() : 채팅list에서 해당 채팅방으로 들어가기 위해
   * 1. isCustomRoomId를 false,
   * 2. ChatBody.tsx에서 custumroomId를 받아와서 ChatList.tsx로 넘겨줌.
   */
  const clickListBox = (customRoomId: string) => {
    setIsCustomRoomId((prev) => !prev);
    setCustomRoomId(customRoomId);
  };

  const handleOpen = () => {
    setIsModalOpen((prev) => !prev);
  };

  useEffect(() => {
    if (customRoomId.length === 0) {
      setIsCustomRoomId((prev) => !prev);
    }
  }, [customRoomId]);

  return (
    <>
      <ChatButton handleOpen={handleOpen} />
      {isModalOpen && (
        <S.Chat>
          {!isCustomRoomId ? (
            <ChatList clickListBox={clickListBox} seller={seller} />
          ) : (
            <ChatDetail
              customRoomId={customRoomId}
              role={role}
              seller={seller}
              user={user}
              product={product}
              clickPrevButton={clickPrevButton}
              handleOpen={handleOpen}
            />
          )}
        </S.Chat>
      )}
    </>
  );
};

export default Chat;
