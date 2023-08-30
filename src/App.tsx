import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Test from '@/components/Test/Test';
import Home from '@/pages/Home/Home';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      children: [
        // 이거슨 루트 경로 Home컴포넌트
        {
          index: true,
          element: <Home />,
        },
        // 루트 바로 아래 경로는 "/"없이 사용하시면 됩니다!
        {
          path: 'test',
          element: <Test />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;

// Header를 모든 페이지에 적용하려면 해당 부분을 사용
// 이때 children에 index: true로 메인orHome을 넣으면 됩

// const Root = () => {
//   return (
//     <>
//       <MainHeader />
//       <main>
//         <Outlet />
//       </main>
//     </>
//   );
// };
