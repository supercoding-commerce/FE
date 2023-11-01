import { useEffect, useState } from 'react';

type chatAlarm = {
  content: string;
  createAt: string;
  customRoomId: string;
  role: string;
  sellerId: number;
  sender: string;
};

export const useSSE = (customRoomId: string, role: string) => {
  console.log('useSSE', customRoomId);
  console.log('role', role);
  const [message, setMessage] = useState<chatAlarm[]>([]);

  console.log(message);

  useEffect(() => {
    const eventSource = new EventSource(
      `${import.meta.env.VITE_API_SSE_URL}/chat-alarm/${role}/${customRoomId}`,
    );

    eventSource.addEventListener('sse', function (event) {
      const message = JSON.parse(event.data);
      console.log('새로운 채팅 알람: ', message);
      setMessage((prevMessages) => [...prevMessages, message]);
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

    return () => {
      eventSource.close();
      console.log('EventSource closed');
    };
  }, [customRoomId, role]);

  return message;
};
