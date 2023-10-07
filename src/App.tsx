import { RouterProvider } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import { StyledToastContainer } from '@/components/common/Toastify/Toastify';
import { router } from '@/pages/routes.tsx';

function App() {
  return (
    <RecoilRoot>
      <RouterProvider router={router} />
      <StyledToastContainer limit={1} />
    </RecoilRoot>
  );
}

export default App;
