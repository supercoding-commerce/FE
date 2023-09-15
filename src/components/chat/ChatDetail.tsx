import axios from 'axios';
import { useEffect, useState } from 'react';
import { Client } from '@stomp/stompjs';

import ChatDetailBody from '@/components/chat/chatDetail/ChatDetailBody';
import ChatDetailHeader from '@/components/chat/chatDetail/ChatDetailHeader';
import ChatSend from '@/components/chat/chatDetail/ChatSend';

export type Msg = {
  sender: string;
  content: string;
};

/** stompClient() : 서버랑 연결할 클라이언트 객체 생성 */
const stompClient = new Client({
  brokerURL: 'ws://52.79.195.235:8080/chat',
});

const ChatDetail = () => {
  /** TODO: 디테일 페이지에서 props로 받아올 것 */
  const seller = { sellerId: 2, shopName: '테스트판매자2' };
  /** TODO: 로그인할때 유저정보에서 받아올 것. 리코일 쓰나? */
  const user = { userId: 3, userName: '테스트유저3' };
  /** TODO: 디테일 페이지에서 props로 받아올 것 */
  const product = { productId: 5, productName: '테스트상품4' };
  /** TODO: 임시, 원래는 상세페이지에서 props로 받아야함.
   * 상세페이지를 클릭했을때 본인이 user인지 seller인지 boolean값으로 들어옴*/
  const isSeller = false;
  const role = isSeller ? 'seller' : 'user';
  // 지금부터 보낼 메세지 담기
  const [msg, setMsg] = useState<Msg[]>([]);
  // 이전의 메세지 기록 담기
  const [prevMsg, setPrevMsg] = useState<Msg[]>([]);
  // 떠난 판매자 또는 유저 name
  const [leaveUser, setLeaveUser] = useState<string>('');
  // 판매자, 유저 전부 채팅방 떠났는지 확인
  const [userStatus, setUserStatus] = useState({
    [user.userName]: false,
    [seller.shopName]: false,
  });

  const ACCESS_TOKEN =
    'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZXN0M0B0ZXN0LmNvbSIsImF1dGgiOiJVU0VSIiwiZXhwIjoxNjk0Nzc3MjI5LCJpYXQiOjE2OTQ3NzM2Mjl9.5_85cprdrA23ZdqcDMPZzIVMkPCmeWEiTd6tW9xlJjA';

  const customRoomId = createCustomRoomId(seller.sellerId, product.productId, user.userId);
  /** createCustomRoomId() : 소켓 방 열때 필요한 roomId 조합생성 */
  function createCustomRoomId(sellerId: number, productId: number, userId: number) {
    const userIdStr = String(userId).padStart(6, '0');
    const sellerIdStr = String(sellerId).padStart(6, '0');
    const productIdStr = String(productId).padStart(6, '0');

    const customRoomId = sellerIdStr + productIdStr + userIdStr;

    return customRoomId;
  }

  const loadPrevChat: () => Promise<void> = async () => {

    const url = import.meta.env.VITE_API_BASE_URL;
    await axios
      .get(`${url}/v1/api/chat/detail/${customRoomId}`, {
        headers: { ACCESS_TOKEN: `Bearer ${ACCESS_TOKEN}` },
      })
      .then((res) => {
        const prev = res.data.chats;
        const msgArray: Msg[] = Object.values(prev);
        setPrevMsg([...msgArray]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    loadPrevChat();
  }, []);

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
        sender: role === 'user' ? user.userName : seller.shopName,
        type: 'LEAVE',
      }),
    });
    //TODO: 창 닫기 적용하기
  };

  /** handleTerminate() : 유저, 셀러 전부 떠났을때 */
  const handleTerminate = () => {
    stompClient.publish({
      destination: `/topic/${seller.sellerId}/${product.productId}/${user.userId}`,
      body: JSON.stringify({
        shopName: seller.shopName,
        userName: user.userName,
        type: 'TERMINATE',
      }),
    });
  };

  useEffect(() => {
    if (userStatus[user.userName] && userStatus[seller.shopName]) {
      handleTerminate();
    }
  }, [userStatus]);

  /** handleDisConnect() : 소켓 객체 비활성화(끊기) */
  const handleDisConnect = () => {
    if (stompClient.connected) {
      // 전역에 만들어진 클라이언트 소켓 객체를 연결 종료하고 삭제.
      stompClient.deactivate();
      console.log('연결이 끊겼습니다.');
    }
  };

  // 처음 들어왔을때 joinMessage를 보내서 stompClient연결
  useEffect(() => {
    const joinMessage = {
      customRoomId: customRoomId,
      shopName: seller.shopName,
      userName: user.userName,
      role: role,
      type: 'JOIN',
    };

    // 연결이 된 경우 콜백함수 호출(어떻게 동작할지 정의)
    stompClient.onConnect = () => {
      // 구독하기(메세지 받음)
      stompClient.subscribe(
        `/topic/${seller.sellerId}/${product.productId}/${user.userId}`,
        (body) => {
          // message -> 백엔드랑 논의 완료 (백엔드에서 어떻게 보내주는지)
          const message = JSON.parse(body.body);

          if (message.type === 'JOIN') {
            console.log('연결되었습니다.');
          } else if (message.type === 'LEAVE') {
            const leave = message.sender;
            setLeaveUser(leave);
            setUserStatus((prevUserStatus) => ({
              ...prevUserStatus,
              [message.sender]: true, // 해당 유저의 상태를 입장으로 설정
            }));
          } else if (message.type === 'TERMINATE') {
            handleDisConnect();
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
      handleDisConnect();
    };
  }, []);

  return (
    <>
      <ChatDetailHeader handleLeave={handleLeave} shopName={seller.shopName} />
      <ChatDetailBody
        prevMsg={prevMsg}
        msg={msg}
        nickName={role === 'user' ? user.userName : seller.shopName}
        leaveUser={leaveUser}
        shopName={seller.shopName}
      />
      <ChatSend sendMessage={sendMessage} />
    </>
  );
};

export default ChatDetail;
