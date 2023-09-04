import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { CartPage } from '@/pages/CartPage/CartPage';
// import { router } from '@/pages/routes.tsx';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      children: [
        // 이거슨 루트 경로 Home컴포넌트
        // 루트 바로 아래 경로는 "/"없이 사용하시면 됩니다!
        {
          path: 'cart',
          element: <CartPage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
