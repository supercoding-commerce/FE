import { useEffect, useState } from 'react';

type chatAlarm = {
  content: string;
  createAt: string;
  customRoomId: string;
  role: string;
  sellerId: number;
  sender: string;
};

export const useSSE = (role: string, sellerId: number, userId: number) => {
  const [eventSource, setEventSource] = useState(
    new EventSource(`${import.meta.env.VITE_API_SSE_URL}/chat-alarm/${role}/${sellerId}`),
  );
  const [message, setMessage] = useState<chatAlarm>();

  console.log('useSSE', message);
  console.log('role', role);
  console.log('sellerId', sellerId);
  console.log('userId', userId);

  useEffect(() => {
    if (role === 'user') {
      setEventSource(
        new EventSource(
          `${import.meta.env.VITE_API_SSE_URL}/chat-alarm/${role}/${sellerId}/${userId}`,
        ),
      );
    } else {
      setEventSource(
        new EventSource(`${import.meta.env.VITE_API_SSE_URL}/chat-alarm/${role}/${sellerId}`),
      );
    }

    console.log('start');
    console.log('eventSource', eventSource);

    if (!eventSource) return;
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
  }, [sellerId, role]);

  return message;
};
