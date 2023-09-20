import { StreamManager } from 'openvidu-browser';
import { useEffect, useRef } from 'react';
import styled from '@emotion/styled';

interface OpenViduVideoProps {
  streamManager: StreamManager | null;
}

const LiveVideo = ({ streamManager }: OpenViduVideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current && streamManager) {
      streamManager.addVideoElement(videoRef.current);
    }
  }, [streamManager]);

  return <Video autoPlay={true} ref={videoRef} />;
};

export default LiveVideo;

const Video = styled.video`
  width: 100%;
`;
