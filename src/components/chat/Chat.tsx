import { useEffect, useState } from 'react';

import ChatButton from '@/components/chat/ChatButton';
import ChatDetail from '@/components/chat/ChatDetail';
import ChatList from '@/components/chat/ChatList';
import * as S from './Chat.styles';

type ChatProps = {
  sellerId: number;
  sellerName: string;
  userId: number;
  userName: string;
  productId: number;
  productName: string;
  isUser: boolean;
  shopImageUrl: string;
};

export type UserInfo = {
  userId: number;
  userName: string;
};

export type ProductInfo = {
  productId: number;
  productName: string;
};

export type SellerInfo = {
  sellerId: number;
  shopName: string;
};

const Chat = ({
  sellerId,
  sellerName,
  userId,
  userName,
  productId,
  productName,
  isUser,
  shopImageUrl,
}: ChatProps) => {
  const seller: SellerInfo = { sellerId: sellerId, shopName: sellerName };
  const product: ProductInfo = { productId: productId, productName: productName };
  const [user, setUser] = useState<UserInfo>({ userId: userId, userName: userName });
  const [isCustomRoomId, setIsCustomRoomId] = useState<boolean>(true);

  const isSeller = isUser;
  const role = isSeller ? 'seller' : 'user';

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const roomId = createCustomRoomId(seller.sellerId, product.productId, user.userId);
  const [customRoomId, setCustomRoomId] = useState<string>(roomId);

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
   * 3. seller일때 현재 디테일에서 넘어오는 userId, userName값은 판매자의 정보여서 ChatList.tsx에서
        문의한 구매자의 userId값, userName값을 가져옴.
   */
  const clickListBox = (customRoomId: string, userId: number, userName: string) => {
    setIsCustomRoomId((prev) => !prev);
    setCustomRoomId(customRoomId);
    setUser({ ...user, userId, userName });
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
      {isModalOpen && isSeller && (
        <S.Chat>
          {isCustomRoomId ? (
            <ChatList
              handleOpen={handleOpen}
              clickListBox={clickListBox}
              seller={seller}
              isSeller={isSeller}
              product={product}
            />
          ) : (
            <ChatDetail
              customRoomId={customRoomId}
              role={role}
              seller={seller}
              user={user}
              product={product}
              shopImageUrl={shopImageUrl}
              clickPrevButton={clickPrevButton}
              handleOpen={handleOpen}
            />
          )}
        </S.Chat>
      )}
      {isModalOpen && !isSeller && (
        <S.Chat>
          {!isCustomRoomId ? (
            <ChatList
              handleOpen={handleOpen}
              clickListBox={clickListBox}
              seller={seller}
              isSeller={isSeller}
              product={product}
            />
          ) : (
            <ChatDetail
              customRoomId={customRoomId}
              role={role}
              seller={seller}
              user={user}
              product={product}
              shopImageUrl={shopImageUrl}
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
