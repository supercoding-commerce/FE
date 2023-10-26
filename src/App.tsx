import { QueryClient, QueryClientProvider } from 'react-query';
import { RouterProvider } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import { StyledToastContainer } from '@/components/common/Toastify/Toastify';
import { router } from '@/pages/routes.tsx';

const queryClient = new QueryClient();

function App() {
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <StyledToastContainer limit={1} />
      </QueryClientProvider>
    </RecoilRoot>
  );
}

export default App;
