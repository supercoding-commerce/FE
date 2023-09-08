import { useEffect } from 'react';
// import * as SockJS from 'sockjs-client';
import { Client } from '@stomp/stompjs';

import ChatDetailBody from '@/components/chat/chatDetail/ChatDetailBody';
import ChatDetailHeader from '@/components/chat/chatDetail/ChatDetailHeader';
import ChatSend from '@/components/chat/chatDetail/ChatSend';
// import ChatBody from '@/components/chat/chatList/ChatBody';
// import ChatHeader from '@/components/chat/chatList/ChatHeader';
import * as S from './Chat.styles';

// 서버랑 연결할 클라이언트 객체 생성
const stompClient = new Client({
  brokerURL: 'ws://52.79.195.235:8080/chat',
});

const Chat = () => {
  // const [data, setData] = useState<Message>();
  // const [isConnect, setIsConnect] = useState<boolean>(false);
  // 상태 또는 ref 로

  const seller = { sellerId: 2, shopName: '테스트판매자2' };
  const user = { userId: 3, userName: '테스트유저3' };
  const product = { productId: 4, productName: '테스트상품4' };
  // const customRoomId = createCustomRoomId(seller.sellerId, product.productId, user.userId);

  const handleSendMessage = () => {
    stompClient.publish({
      destination: `/topic/${seller.sellerId}/${product.productId}/${user.userId}`,
      body: JSON.stringify({
        message: 'custom message',
        shopName: seller.shopName,
        userName: user.userName,
        type: 'chat',
      }),
    });
  };

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
      // customRoomId : customRoomId,
      shopName: seller.shopName,
      userName: user.userName,
      role: 'user', //웹소켓 세션 연결이 브라우저마다 각자 독립적으로 메모리를 다루기 때문에 //role : seller or user
      type: 'JOIN',
    };

    // 연결이 된 경우 어떻게 동작할지 정의 - 콜백함수 호출
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
            //
          } else if (message.type === 'LEAVE') {
            // 방떠날때 연관된 로직...
          } else if (message.type === 'CHAT') {
            // 메시지 수신과 관련된 로직
            // 메세지 UI 그리기
          } else if (message.type === 'TERMINATE') {
            // 유저, 셀러 전부 떠났을때
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
      <ChatDetailBody />
      <ChatSend />
      <button onClick={handleSendMessage}>상담버튼</button>
      <button onClick={handleLeave}>나가기</button>
    </S.Chat>
  );
};

export default Chat;
