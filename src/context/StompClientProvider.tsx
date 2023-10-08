import { useState } from 'react';
import React, { createContext } from 'react';
import { Client } from '@stomp/stompjs';

type Props = {
  children: React.ReactNode;
};
// createContext를 사용하여 새로운 Context를 생성합니다.
export const StompClient = createContext<Client | null>(null);

// 컴포넌트를 감싸고 있는 컨텍스트를 제공하는 컴포넌트를 생성합니다.
const StompClientProvider = ({ children }: Props) => {
  // 새로운 stompClient 인스턴스를 생성합니다.
  const [stompClient] = useState(
    new Client({
      brokerURL: `${import.meta.env.VITE_API_CHAT_URL}/chat`,
    }),
  );

  return <StompClient.Provider value={stompClient}>{children}</StompClient.Provider>;
};

export default StompClientProvider;
