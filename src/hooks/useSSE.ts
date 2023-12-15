import { useState } from 'react';

type chatAlarm = {
  content: string;
  createAt: string;
  customRoomId: string;
  role: string;
  sellerId: number;
  sender: string;
};

export const useSSE = (role: string, sellerId: number, userId: number) => {
  const [message, setMessage] = useState<chatAlarm>();

  const isUser =
    role === 'user'
      ? `${import.meta.env.VITE_API_SSE_URL}/chat-alarm/${role}/${sellerId}/${userId}`
      : `${import.meta.env.VITE_API_SSE_URL}/chat-alarm/${role}/${sellerId}`;

  const eventSource = new EventSource(isUser);
  console.log('EventSource opened');

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

  return message;
};
