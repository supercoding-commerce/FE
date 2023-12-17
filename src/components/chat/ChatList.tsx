import { useEffect, useState } from 'react';

import { sellerChatList, userChatList } from '@/apis/chat';
import ChatBody from '@/components/chat/chatList/ChatBody';
import ChatHeader from '@/components/chat/chatList/ChatHeader';
import { useSSE } from '@/hooks/useSSE';
import { Message, UserInfo } from '@/models/chat';

export type Chat = {
  [timestamp: string]: Message;
};

export type List = {
  chatId: string;
  customRoomId: string;
  sellerId: number;
  productId: number;
  userId: number;
  shopName: string;
  userName: string;
  productName: string;
  imageUrl: string;
  chats: Chat;
  lastChat: Message;
};

type ChatProps = {
  clickListBox: (customRoomId: string, userId: number, userName: string) => void;
  handleOpen: () => void;
  seller: {
    sellerId: number;
    shopName: string;
  };
  user: UserInfo;
  product: {
    productId: number;
    productName: string;
  };
  isSeller: boolean;
  role: string;
};

const ChatList = ({
  handleOpen,
  clickListBox,
  seller,
  user,
  isSeller,
  product,
  role,
}: ChatProps) => {
  const [list, setList] = useState<List[]>([]);
  const [shopImg, setShopImg] = useState<string>('');

  const message = useSSE(role, seller.sellerId, user.userId);

  //TODO: 리액트쿼리로 변경하기
  const loadUserChatList: () => Promise<void> = async () => {
    userChatList(seller.sellerId)
      .then((resData) => {
        const data = resData.chatList;
        console.log('list', data);
        const img = resData.shopImage;
        setList([...data]);
        setShopImg(img);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const loadSellerChatList: () => Promise<void> = async () => {
    const sellerId = seller.sellerId;
    const productId = product.productId;
    sellerChatList(sellerId, productId)
      .then((resData) => {
        const data = resData.chatList;
        console.log('list', data);
        const img = resData.shopImage;
        setList([...data]);
        setShopImg(img);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    if (!isSeller) loadUserChatList();
    else loadSellerChatList();
  }, [isSeller]);

  return (
    <>
      <ChatHeader shopName={seller.shopName} shopImg={shopImg} handleOpen={handleOpen} />
      <ChatBody chatList={list} clickListBox={clickListBox} newMessage={message} />
    </>
  );
};

export default ChatList;
