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
  clickListBox: (customRoomId: string) => void;
  seller: {
    sellerId: number;
    shopName: string;
  };
};

const ChatList = ({ clickListBox, seller }: chatProps) => {
  /** TODO: 디테일 페이지에서 props로 받아올 것 */
  const [list, setList] = useState<list[]>([]);

  const [shopImg, setShopImg] = useState<string>('');

  const loadChatList: () => Promise<void> = async () => {
    const sellerId = seller.sellerId;
    await client
      .get(`/v1/api/chat/user/${sellerId}`)
      .then((res) => {
        console.log(res.data);
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
    loadChatList();
  }, []);

  console.log('chatList', list);
  console.log('shopImg', shopImg);

  return (
    <div>
      <ChatHeader shopName={seller.shopName} shopImg={shopImg} />
      <ChatBody chatList={list} clickListBox={clickListBox} />
    </div>
  );
};

export default ChatList;
