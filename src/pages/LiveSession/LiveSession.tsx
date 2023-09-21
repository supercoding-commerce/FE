import axios from 'axios';
import {
  OpenVidu,
  Publisher,
  Session,
  StreamEvent,
  StreamManager,
  Subscriber,
} from 'openvidu-browser';
import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';

import LiveVideo from '@/components/live/LiveVideo/LiveVideo';
import { LiveContainer, LiveStreamContainer } from '@/pages/LiveSession/LiveSession.styles';
import { userState } from '@/recoil/userState';

const APPLICATION_SERVER_URL: string = import.meta.env.VITE_RTC_SERVER_URL;

const LiveSession = () => {
  const [session, setSession] = useState<Session | null>(null);
  const [localUser, setLocalUser] = useState<Publisher | null>(null);
  const [subscribers, setSubscribers] = useState<Subscriber[]>([]);
  const [mainStreamManager, setMainStreamManager] = useState<StreamManager | null>(null);

  const userInfo = useRecoilValue(userState);
  const isHost = userInfo.email === 'ekfhd5537@naver.com';
  const sessionName = 'ClipLiveSession';
  const userName = userInfo.email;

  console.log(localUser);

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
      const audioDevices = devices.filter((device) => device.kind === 'audioinput');
      const publisher = await OV.initPublisherAsync(undefined, {
        audioSource: isHost ? audioDevices[0].deviceId : undefined, // The source of audio. If undefined default microphone
        videoSource: isHost ? videoDevices[0].deviceId : undefined, // The source of video. If undefined default webcam
        publishAudio: isHost ? true : false, // Whether you want to start publishing with your audio unmuted or not
        publishVideo: isHost ? true : false, // Whether you want to start publishing with your video enabled or not
        resolution: '640x480', // The resolution of your video
        frameRate: 30, // The frame rate of your video
        insertMode: 'APPEND', // How the video is inserted in the target element 'video-container'
        mirror: false, // Whether to mirror your local video or not
      });

      mySession.publish(publisher);

      console.log('3차통과');

      setLocalUser(publisher);
      setSession(mySession);
      isHost ? setMainStreamManager(publisher) : setMainStreamManager(subscribers[0]);
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

  // const checkHost = () => {};
  useEffect(() => {
    joinSession();
  }, []);

  useEffect(() => {
    if (mainStreamManager) return;

    setMainStreamManager(subscribers[0]);
  }, [subscribers]);

  console.log('test_sub', subscribers);
  console.log('test_mainStream', mainStreamManager);

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

  const leaveSession = () => {
    if (session) {
      session.disconnect();
    }

    setSession(null);
    setSubscribers([]);
    setMainStreamManager(null);
  };

  return (
    <LiveContainer>
      <LiveStreamContainer>
        <LiveVideo streamManager={mainStreamManager} />
      </LiveStreamContainer>
      <button onClick={leaveSession}>떠나기</button>
    </LiveContainer>
  );
};

export default LiveSession;
