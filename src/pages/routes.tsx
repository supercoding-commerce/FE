import { createBrowserRouter, useLocation } from 'react-router-dom';

import Test from '@/components/Test/Test.tsx';
import { DefaultLayout } from '@/pages/DefaultLayout/DefaultLayout.tsx';
import { DesktopLayout } from '@/pages/DesktopLayout/DesktopLayout.tsx';
import Home from '@/pages/Home/Home.tsx';

// GYU-TODO: DELETE
function TestCompoennt() {
  const location = useLocation();
  return <div>{location.pathname}</div>;
}

export const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    // errorElement: <div>Not Found Page</div>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/products/:id',
        element: <TestCompoennt />,
      },
      {
        path: '/category',
        element: <TestCompoennt />,
      },

      {
        path: '/signup',
        element: <TestCompoennt />,
      },
      {
        path: '/signup/seller',
        element: <TestCompoennt />,
      },
      {
        path: '/signup/buyer',
        element: <TestCompoennt />,
      },
      {
        path: '/signin',
        element: <TestCompoennt />,
      },
      {
        path: '/signup',
        element: <TestCompoennt />,
      },

      {
        path: '/mycart',
        element: <TestCompoennt />,
      },
      {
        path: '/pay',
        element: <TestCompoennt />,
      },
      {
        path: 'test',
        element: <Test />,
      },
    ],
  },
  //   Desktop Layout 을 사용하는 UI (현재, 공통적인 특징이 없어 개별적으로 처리)
  {
    path: '/new/product',
    element: (
      <DesktopLayout>
        <span>new test</span>
        <TestCompoennt />
      </DesktopLayout>
    ),
  },
  {
    path: '/update/product',
    element: (
      <DesktopLayout>
        <span>update test</span>
        <TestCompoennt />
      </DesktopLayout>
    ),
  },
]);
