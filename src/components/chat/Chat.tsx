import axios from 'axios';
import { useEffect, useState } from 'react';
import { Client } from '@stomp/stompjs';

import ChatDetailBody from '@/components/chat/chatDetail/ChatDetailBody';
import ChatDetailHeader from '@/components/chat/chatDetail/ChatDetailHeader';
import ChatSend from '@/components/chat/chatDetail/ChatSend';
// import ChatBody from '@/components/chat/chatList/ChatBody';
// import ChatHeader from '@/components/chat/chatList/ChatHeader';
import * as S from './Chat.styles';

export type Msg = {
  sender: string;
  content: string;
};
/** stompClient() : 서버랑 연결할 클라이언트 객체 생성 */
const stompClient = new Client({
  brokerURL: 'ws://52.79.195.235:8080/chat',
});

/** 임시, 원래는 상세페이지에서 props로 받아야함.
 * 상세페이지를 클릭했을때 본인이 user인지 seller인지 boolean값으로 들어옴*/
const isSeller = true;

const Chat = () => {
  /** 디테일 페이지에서 props로 받아올 것 */
  const seller = { sellerId: 2, shopName: '테스트판매자2' };
  /** 로그인할때 유저정보에서 받아올 것. 리코일 쓰나? */
  const user = { userId: 3, userName: '테스트유저3' };
  /** 디테일 페이지에서 props로 받아올 것 */
  const product = { productId: 4, productName: '테스트상품4' };
  const role = isSeller ? 'seller' : 'user';
  const [msg, setMsg] = useState<Msg[]>([]);
  const [prevMsg, setPrevMsg] = useState<Msg[]>([]);
  const ACCESS_TOKEN =
    'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZXN0MkB0ZXN0LmNvbSIsImF1dGgiOiJTRUxMRVIiLCJleHAiOjE2OTQ0NTc4MjAsImlhdCI6MTY5NDQ1NDIyMH0.JDi_UFPqustltIDJtm-7SpLaqIngEBxRB4Wpd0Ck7c0';

  console.log('msg', msg);
  console.log('usestate prevMsg', prevMsg);
  console.log('connected', stompClient.connected);

  const customRoomId = createCustomRoomId(seller.sellerId, product.productId, user.userId);
  /** createCustomRoomId() : 소켓 방 열때 필요한 roomId 조합생성 */
  function createCustomRoomId(sellerId: number, productId: number, userId: number) {
    const userIdStr = String(userId).padStart(6, '0');
    const sellerIdStr = String(sellerId).padStart(6, '0');
    const productIdStr = String(productId).padStart(6, '0');

    const customRoomId = sellerIdStr + productIdStr + userIdStr;

    return customRoomId;
  }

  useEffect(() => {
    loadPrevChat();
  }, []);

  const loadPrevChat: () => Promise<void> = async () => {
    await axios
      .get(`https://pet-commerce.shop/v1/api/chat/${customRoomId}`, {
        headers: { Authorization: `Bearer ${ACCESS_TOKEN}` },
      })
      .then((res) => {
        // const prevMessage = response.data.content.reverse();
        const prev = res.data.chats;
        const msgArray: Msg[] = Object.values(prev);
        console.log('aioxs안의 msgArray', msgArray);
        setPrevMsg([...msgArray]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  /** sendMessage() : 유저가 상대방에게 메세지 보낼때 */
  const sendMessage = (text: string) => {
    const messageContent = text;
    if (messageContent && stompClient) {
      const chatMessage = {
        customRoomId: customRoomId,
        sender: role === 'user' ? user.userName : seller.shopName,
        content: messageContent,
        type: 'CHAT',
      };
      stompClient.publish({
        destination: `/app/chat.sendMessage/${seller.sellerId}/${product.productId}/${user.userId}`,
        body: JSON.stringify(chatMessage),
      });
    }
  };

  /** handleLeave() : 유저가 채팅방을 떠날 때 */
  const handleLeave = () => {
    stompClient.publish({
      destination: `/topic/${seller.sellerId}/${product.productId}/${user.userId}`,
      body: JSON.stringify({
        shopName: seller.shopName,
        userName: user.userName,
        type: 'LEAVE',
      }),
    });
  };

  useEffect(() => {
    const joinMessage = {
      customRoomId: customRoomId,
      shopName: seller.shopName,
      userName: user.userName,
      // role : seller or user (웹소켓 세션 연결이 브라우저마다 각자 독립적으로 메모리를 다루기 때문에)
      role: role,
      type: 'JOIN',
    };

    // 연결이 된 경우 콜백함수 호출(어떻게 동작할지 정의)
    stompClient.onConnect = (frame) => {
      console.log('연결 되었습니다.', frame);

      // 구독하기(메세지 받음)
      stompClient.subscribe(
        `/topic/${seller.sellerId}/${product.productId}/${user.userId}`,
        (body) => {
          // message -> 백엔드랑 논의 완료 (백엔드에서 어떻게 보내주는지)
          const message = JSON.parse(body.body);
          console.log('realBody', message);

          if (message.type === 'JOIN') {
            // 연결 확인 위한 임시 표시
            // alert('연결되었습니다.');
          } else if (message.type === 'LEAVE') {
            // TODO: 방떠날때 연관된 로직...
          } else if (message.type === 'TERMINATE') {
            // TODO: 유저, 셀러 전부 떠났을때
          } else {
            const msgContent = message.content;
            const msgSender = message.sender;
            const msg1 = { content: msgContent, sender: msgSender };
            setMsg((prev) => [...prev, msg1]);
          }
        },
      );

      // 소켓 통신 호출 - 목적지 url로 메시지 보내기 (ex)JOIN 하기, 방떠나기!
      stompClient.publish({
        destination: `/app/chat.addUser/${seller.sellerId}/${product.productId}/${user.userId}`,
        body: JSON.stringify(joinMessage),
      });
    };

    // 에러가 나오는 경우 어떻게 동작할지 정의 - 콜백함수 호출
    stompClient.onStompError = (frame) => {
      // TODO: 어떻게 에러를 유저에게 안내해줄지 고민
      console.log('연결 실패', frame);
    };

    // 전역에 만들어진 클라이언트 소켓 객체 활성화(연결)
    stompClient.activate();

    return () => {
      if (stompClient.connected) {
        // 전역에 만들어진 클라이언트 소켓 객체 비활성화(끊기)
        stompClient.deactivate();
      }
    };
  }, []);

  return (
    <S.Chat>
      {/* <ChatHeader />
      <ChatBody /> */}
      <ChatDetailHeader />
      <ChatDetailBody
        prevMsg={prevMsg}
        msg={msg}
        nickName={role === 'user' ? user.userName : seller.shopName}
      />
      <ChatSend sendMessage={sendMessage} />
      <button onClick={handleLeave}>나가기</button>
    </S.Chat>
  );
};

export default Chat;
