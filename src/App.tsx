import { RouterProvider } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import Chat from '@/components/chat/Chat';
import { router } from '@/pages/routes.tsx';

function App() {
  return (
    <RecoilRoot>
      <Chat />
      <RouterProvider router={router} />
    </RecoilRoot>
  );
}

export default App;
