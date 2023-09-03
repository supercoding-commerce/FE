import { RouterProvider } from 'react-router-dom';

import { router } from '@/pages/routes.tsx';

function App() {
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
