import { useEffect, useState } from 'react';

import { client } from '@/apis';
import ChatBody from '@/components/chat/chatList/ChatBody';
import ChatHeader from '@/components/chat/chatList/ChatHeader';

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
  chats: null | string;
  lastChat: {
    sender: string;
    content: string;
  };
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
    await client
      .get(`/v1/api/chat/user/${sellerId}`)
      .then((res) => {
        const data = res.data.chatList;
        const img = res.data.shopImage;
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
    await client
      .get(`/v1/api/chat/seller/${sellerId}/${productId}`)
      .then((res) => {
        const data = res.data.chatList;
        const img = res.data.shopImage;
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
