import axios from 'axios';
import { useEffect, useState } from 'react';

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
};

const ChatList = ({ clickListBox }: chatProps) => {
  /** TODO: 디테일 페이지에서 props로 받아올 것 */
  const seller = { sellerId: 2, shopName: '테스트판매자2' };
  const [list, setList] = useState<list[]>([]);

  const [shopImg, setShopImg] = useState<string>('');

  const ACCESS_TOKEN =
    'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZXN0M0B0ZXN0LmNvbSIsImF1dGgiOiJVU0VSIiwiZXhwIjoxNjk0NzkxODY5LCJpYXQiOjE2OTQ3ODgyNjl9.Brl5Ah1y2Vvb7hxDhOsdU_HlWKcGytwhqXRd6sbUBYY';

  const loadChatList: () => Promise<void> = async () => {
    const sellerId = seller.sellerId;
    const url = import.meta.env.VITE_API_BASE_URL;
    console.log(sellerId);
    await axios
      .get(`${url}/v1/api/chat/user/${sellerId}`, {
        // 셀러 아이디 받아와야함
        headers: { ACCESS_TOKEN: `Bearer ${ACCESS_TOKEN}` },
      })
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
