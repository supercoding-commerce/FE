import { io, Socket } from 'socket.io-client';

interface ConnectSocketProps {
  session_id: string;
  user_id: string;
  setCurrentSocket: (socket: Socket) => void;
}

const VITE_RTC_SERVER_URL = import.meta.env.VITE_RTC_SERVER_URL;

export const connectSocket = ({ session_id, user_id, setCurrentSocket }: ConnectSocketProps) => {
  const socket: Socket = io(`${VITE_RTC_SERVER_URL}?user_id=${user_id}&session_id=${session_id}`);

  console.log('connect socketId', user_id);

  socket.on('connect', () => {
    setCurrentSocket(socket);
    console.log('Connected to the server');
  });
};
