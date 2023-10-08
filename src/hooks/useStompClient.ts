import { useContext } from 'react';
import { Client } from '@stomp/stompjs';

import { StompClient } from '@/context/StompClientProvider';

// 커스텀 Hook을 생성하여 stompClient 인스턴스를 가져옵니다.
export function useStompClient(): Client | null {
  return useContext(StompClient);
}
