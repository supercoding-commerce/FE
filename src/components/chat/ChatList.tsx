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
  chats: null | string;
  lastChat: {
    sender: string;
    content: string;
  };
};

const ChatList = () => {
  /** TODO: 디테일 페이지에서 props로 받아올 것 */
  const seller = { sellerId: 2, shopName: '테스트판매자2' };
  const [list, setList] = useState<list[]>([]);

  const ACCESS_TOKEN =
    'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZXN0M0B0ZXN0LmNvbSIsImF1dGgiOiJVU0VSIiwiZXhwIjoxNjk0NjMyMzUzLCJpYXQiOjE2OTQ2Mjg3NTN9.RmNY7yAFfGD7GLDaQpGnbc_HXXJgXzqZJnNzVmnuZ6o';

  const loadChatList: () => Promise<void> = async () => {
    const sellerId = seller.sellerId;
    console.log(sellerId);
    await axios
      .get(`https://pet-commerce.shop/v1/api/chat/${sellerId}`, {
        // 셀러 아이디 받아와야함
        headers: { ACCESS_TOKEN: `Bearer ${ACCESS_TOKEN}` },
      })
      .then((res) => {
        const data = res.data;
        setList([...data]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    loadChatList();
  }, []);

  console.log('chatList', list);

  return (
    <div>
      <ChatHeader shopName={seller.shopName} />
      <ChatBody chatList={list} />
    </div>
  );
};

export default ChatList;
