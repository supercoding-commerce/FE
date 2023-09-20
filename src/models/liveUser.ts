import { StreamManager } from 'openvidu-browser';

export type LiveUser = {
  connectionId: string;
  audioActive: boolean;
  videoActive: boolean;
  screenShareActive: boolean;
  nickname: string;
  streamManager: StreamManager; // 현재는 any 타입으로 설정되어 있습니다.
  type: 'local' | 'remote';
};
