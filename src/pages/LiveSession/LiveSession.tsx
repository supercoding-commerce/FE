import axios from 'axios';
import { OpenVidu, Publisher, Session, StreamEvent, Subscriber } from 'openvidu-browser';
import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';

import LiveVideo from '@/components/live/LiveVideo/LiveVideo';
import { LiveUser } from '@/models/liveUser';
import { LiveContainer, LiveStreamContainer } from '@/pages/LiveSession/LiveSession.styles';
import { userState } from '@/recoil/userState';

const APPLICATION_SERVER_URL: string = import.meta.env.VITE_RTC_SERVER_URL;

const LiveSession = () => {
  const [session, setSession] = useState<Session | null>(null);
  const [localUser, setLocalUser] = useState<Publisher | null>(null);
  const [subscribers, setSubscribers] = useState<Subscriber[]>([]);
  const [currentVideoDevice, setCurrentVideoDevice] = useState(undefined);
  const [localUserAccessAllowed, setLocalUserAccessAllowed] = useState<boolean>(false);

  // let hasBeenUpdated = false;

  // const remotes: Partial<LiveUser>[] = [];
  const userInfo = useRecoilValue(userState);
  const isHost = userInfo.email === 'ekfhd5537@naver.com';
  const sessionName = 'ClipLiveSession';
  const userName = userInfo.email.split('@')[0];

  const joinSession = async () => {
    const OV = new OpenVidu();
    const mySession = OV.initSession();

    mySession.on('streamCreated', (event: StreamEvent) => {
      const subscriber = mySession.subscribe(event.stream, undefined);
      setSubscribers((prevSubscribers) => {
        prevSubscribers.push(subscriber);
        return prevSubscribers;
      });
    });

    mySession.on('streamDestroyed', (event: StreamEvent) => {
      setSubscribers((prevSubscribers) =>
        prevSubscribers.filter((sub) => sub !== event.stream.streamManager),
      );
    });

    mySession.on('exception', (exception) => {
      console.warn(exception);
    });

    console.log('1차 통과');

    try {
      const token = await getToken();
      await mySession.connect(token, { clientData: userName });

      console.log('2차 통과');

      await OV.getUserMedia({ audioSource: undefined, videoSource: undefined });
      const devices = await OV.getDevices();
      const videoDevices = devices.filter((device) => device.kind === 'videoinput');
      const publisher = await OV.initPublisherAsync(undefined, {
        audioSource: undefined, // The source of audio. If undefined default microphone
        videoSource: videoDevices[0].deviceId, // The source of video. If undefined default webcam
        publishAudio: true, // Whether you want to start publishing with your audio unmuted or not
        publishVideo: true, // Whether you want to start publishing with your video enabled or not
        resolution: '640x480', // The resolution of your video
        frameRate: 30, // The frame rate of your video
        insertMode: 'APPEND', // How the video is inserted in the target element 'video-container'
        mirror: false, // Whether to mirror your local video or not
      });

      mySession.publish(publisher);

      console.log('3차통과');

      setLocalUser(publisher);
      setSession(mySession);
    } catch (error) {
      console.log('Error: ', error);
    }
    // subscribeToStreamCreated();
    // await connectToSession();
  };

  // const subscribeToStreamCreated = () => {
  //   if (!session) return;
  //   session.on('streamCreated', (event) => {
  //     const subscriber = session.subscribe(event.stream, undefined);

  //     subscriber.on('streamPlaying', () => {
  //       checkSomeoneShareScreen();
  //       subscriber.videos[0].video.parentElement?.classList.remove('custom-class');
  //     });

  //     const nickname = event.stream.connection.data.split('%')[0];
  //     const newUser: Subscriber = {
  //       connectionId: event.stream.connection.connectionId,
  //       streamManager: subscriber,
  //       type: 'remote',
  //       nickname: JSON.parse(nickname).clientData,
  //     };
  //     remotes.push(newUser);

  //     if (localUserAccessAllowed) {
  //       updateSubscribers();
  //     }
  //   });
  // };

  // const checkSomeoneShareScreen = () => {
  //   let isScreenShared;
  //   isScreenShared =
  //     subscribers.some((user) => user.isScreenShareActive()) || localUser.isScreenShareActive();
  //   const openviduLayoutOptions = {
  //     maxRatio: 3 / 2,
  //     minRatio: 9 / 16,
  //     fixedRatio: isScreenShared,
  //     bigClass: 'OV_big',
  //     bigPercentage: 0.8,
  //     bigFixedRatio: false,
  //     bigMaxRatio: 3 / 2,
  //     bigMinRatio: 9 / 16,
  //     bigFirst: true,
  //     animate: true,
  //   };
  //   layout.setLayoutOptions(openviduLayoutOptions);
  //   updateLayout();
  // };

  // const updateSubscribers = () => {
  //   const subscribers = remotes;
  //   setSubscribers(subscribers);

  //   if (localUser) {
  //     sendSignalUserChanged({
  //       isAudioActive: localUser.isAudioActive(),
  //       isVideoActive: localUser.isVideoActive(),
  //       nickname: localUser.getNickname(),
  //       isScreenShareActive: localUser.isScreenShareActive(),
  //     });
  //   }
  //   updateLayout();
  // };

  // const connectToSession = async () => {
  //   const token = await getToken();
  //   console.log(token);
  // };

  useEffect(() => {
    joinSession();
  }, []);

  console.log('test_publisher', localUser);
  console.log('test_session', session);
  console.log('test_subscribers', subscribers);

  // 아래 토큰 받는 과정 ( 백엔드와의 통신 - 1단계 : 여기 까지 성공 )
  const getToken = async () => {
    const sessionId = await createSession();
    return await createToken(sessionId);
  };

  const createSession = async () => {
    const response = await axios.post(
      APPLICATION_SERVER_URL + 'api/sessions',
      { customSessionId: sessionName },
      {
        headers: { 'Content-Type': 'application/json' },
      },
    );
    return response.data;
  };

  const createToken = async (sessionId: string) => {
    const response = await axios.post(
      APPLICATION_SERVER_URL + 'api/sessions/' + sessionId + '/connections',
      {},
      {
        headers: { 'Content-Type': 'application/json' },
      },
    );
    return response.data;
  };

  return (
    <LiveContainer>
      <LiveStreamContainer>
        <LiveVideo isHost={isHost} />
      </LiveStreamContainer>
    </LiveContainer>
  );
};

export default LiveSession;
