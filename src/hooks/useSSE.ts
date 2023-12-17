import { useEffect, useState } from 'react';

export type ChatAlarm = {
  content: string;
  createAt: string;
  customRoomId: string;
  role: string;
  sellerId: number;
  sender: string;
};

//TODO: useSSE를 쓰는 컴포넌트에서 두번 렌더링 되는 이유 찾기.(최상단부터 뒤져보기)
export const useSSE = (role: string, sellerId: number, userId: number) => {
  const [message, setMessage] = useState<ChatAlarm>();

  const isUser =
    role === 'user'
      ? `${import.meta.env.VITE_API_SSE_URL}/chat-alarm/${role}/${sellerId}/${userId}`
      : `${import.meta.env.VITE_API_SSE_URL}/chat-alarm/${role}/${sellerId}`;

  const [eventSource] = useState(() => new EventSource(isUser));

  useEffect(() => {
    console.log('되나', eventSource);
    eventSource.addEventListener('sse', function (event) {
      const message = JSON.parse(event.data);
      console.log('새로운 채팅 알람: ', message);
      setMessage({ ...message });
    });

    eventSource.onerror = function (error) {
      console.error('EventSource failed:', error);
      eventSource.close();
    };

    window.addEventListener('unload', function () {
      if (eventSource) {
        eventSource.close();
        console.log('EventSource closed');
      }
    });
  }, []);

  return message;
};
