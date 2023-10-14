import { useEffect, useState } from 'react';

import { sellerChatList, userChatList } from '@/apis/chat';
import ChatBody from '@/components/chat/chatList/ChatBody';
import ChatHeader from '@/components/chat/chatList/ChatHeader';
import { Message } from '@/models/chat';

export type Chats = {
  [timestamp: string]: Message;
};

export type list = {
  chatId: string;
  customRoomId: string;
  sellerId: number;
  productId: number;
  userId: number;
  shopName: string;
  userName: string;
  productName: string;
  imageUrl: string;
  chats: Chats;
  lastChat: Message;
};

type chatProps = {
  clickListBox: (customRoomId: string, userId: number, userName: string) => void;
  handleOpen: () => void;
  seller: {
    sellerId: number;
    shopName: string;
  };
  product: {
    productId: number;
    productName: string;
  };
  isSeller: boolean;
};

const ChatList = ({ handleOpen, clickListBox, seller, isSeller, product }: chatProps) => {
  const [list, setList] = useState<list[]>([]);

  const [shopImg, setShopImg] = useState<string>('');

  const loadUserChatList: () => Promise<void> = async () => {
    const sellerId = seller.sellerId;
    userChatList(sellerId)
      .then((resData) => {
        const data = resData.chatList;
        const img = resData.shopImage;
        setList([...data]);
        setShopImg(img);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const loadSellerChatList: () => Promise<void> = async () => {
    const sellerId = seller.sellerId;
    const productId = product.productId;
    sellerChatList(sellerId, productId)
      .then((resData) => {
        const data = resData.chatList;
        const img = resData.shopImage;
        setList([...data]);
        setShopImg(img);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (!isSeller) loadUserChatList();
    else loadSellerChatList();
  }, [isSeller]);

  return (
    <div>
      <ChatHeader shopName={seller.shopName} shopImg={shopImg} handleOpen={handleOpen} />
      <ChatBody chatList={list} clickListBox={clickListBox} />
    </div>
  );
};

export default ChatList;
