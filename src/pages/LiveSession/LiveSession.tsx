import { LiveContainer, LiveStreamContainer } from '@/pages/LiveSession/LiveSession.styles';

const LiveSession = () => {
  const APPLICATION_SERVER_URL: string = import.meta.env.VITE_RTC_SERVER_URL;
  return (
    <LiveContainer>
      <LiveStreamContainer></LiveStreamContainer>
    </LiveContainer>
  );
};

export default LiveSession;
