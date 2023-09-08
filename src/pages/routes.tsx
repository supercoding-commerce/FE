import { createBrowserRouter, useLocation } from 'react-router-dom';

import Test from '@/components/Test/Test.tsx';
import { CartPage } from '@/pages/CartPage/CartPage';
import { DefaultLayout } from '@/pages/DefaultLayout/DefaultLayout.tsx';
import Home from '@/pages/Home/Home.tsx';
import { MyPage } from '@/pages/MyPage/MyPage.tsx';
import SignInPage from '@/pages/SignInPage/SignInPage';
import SignUpPage from '@/pages/SignUpPage/SignUpPage';
import SignUpUserPage from '@/pages/SignUpUserPage/SignUpUserPage';

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
      // 제품 및 검색
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/product/:id',
        element: <TestCompoennt />,
      },
      {
        path: '/category',
        element: <TestCompoennt />,
      },

      // 회원가입 / 로그인
      {
        path: '/signup',
        element: <SignUpPage />,
      },
      {
        path: '/signup/seller',
        element: <SignUpUserPage />,
      },
      {
        path: '/signup/buyer',
        element: <SignUpUserPage />,
      },
      {
        path: '/signin',
        element: <SignInPage />,
      },

      // 마이페이지 및 결제 등
      {
        path: '/mycart',
        element: <CartPage />,
      },
      {
        path: '/pay',
        element: <TestCompoennt />,
      },
      {
        path: '/mypage',
        element: <MyPage />,
      },
      {
        path: '/new/product',
        element: (
          <>
            <span>new test</span>
            <TestCompoennt />
          </>
        ),
      },
      {
        path: '/update/product',
        element: (
          <>
            <span>update test</span>
            <TestCompoennt />
          </>
        ),
      },
      {
        path: 'test',
        element: <Test />,
      },
    ],
  },
  {
    path: '/new/product',
    element: (
      <>
        <span>new test</span>
        <TestCompoennt />
      </>
    ),
  },
  {
    path: '/update/product',
    element: (
      <>
        <span>update test</span>
        <TestCompoennt />
      </>
    ),
  },
]);

export type RoutePath =
  | '/signup'
  | '/signup/seller'
  | '/signup/buyer'
  | '/signin'
  | '/'
  | '/product/:id'
  | '/category'
  | '/mycart'
  | '/pay'
  | '/mypage'
  | '/new/product'
  | '/update/product'
  | string;
