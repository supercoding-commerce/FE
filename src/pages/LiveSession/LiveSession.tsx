import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { Socket } from 'socket.io-client';

import Button from '@/components/common/Button/Button';
import { connectSocket } from '@/components/live/connectSocket';
import Consumer from '@/components/live/Consumer/Consumer';
import Producer from '@/components/live/Producer/Producer';
import {
  LiveContainer,
  LiveStreamContainer,
  LiveStreamInfo,
} from '@/pages/LiveSession/LiveSession.styles';
import { userState } from '@/recoil/userState';

const LiveSession = () => {
  const navigate = useNavigate();
  const userInfo = useRecoilValue(userState);
  const [currentSocket, setCurrentSocket] = useState<Socket>();
  const isHost = userInfo.email === 'ekfhd5537@naver.com';
  const sessionName = 'ClipLiveSession';
  const userName = userInfo.email;

  useEffect(() => {
    connectSocket({
      session_id: sessionName,
      user_id: userName,
      setCurrentSocket: setCurrentSocket,
    });
  }, []);

  return (
    <LiveContainer>
      <LiveStreamContainer>
        {isHost ? (
          <Producer currentSocket={currentSocket} />
        ) : (
          <Consumer currentSocket={currentSocket} />
        )}
      </LiveStreamContainer>
      <LiveStreamInfo>
        <Button
          isFullWidth
          onClick={() => {
            navigate(-1);
          }}
        >
          떠나기
        </Button>
      </LiveStreamInfo>
    </LiveContainer>
  );
};

export default LiveSession;
