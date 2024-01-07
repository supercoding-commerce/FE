import { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';

import { Purchase } from '@/components/Mypage-Purchase/Purchase';
import { SoldPage } from '@/components/Mypage-Sold/SoldPage';
import { WishPage } from '@/components/Mypage-Wish/WishPage';
import { AddProduct } from '@/pages/AddProduct/AddProduct.tsx';
import { CartPage } from '@/pages/CartPage/CartPage';
// import Menu from '@/pages/Category/Menu';
const Menu = lazy(() => import('@/pages/Category/Menu'));
// import Coupon from '@/pages/Coupon/Coupon';
const Coupon = lazy(() => import('@/pages/Coupon/Coupon'));
import { DefaultLayout } from '@/pages/DefaultLayout/DefaultLayout.tsx';
// import DetailPage from '@/pages/DetailPage/DetailPage';
const DetailPage = lazy(() => import('@/pages/DetailPage/DetailPage'));
import Home from '@/pages/Home/Home.tsx';
// import KakaoCallbackPage from '@/pages/KakaoCallbackPage/KakaoCallbackPage';
const KakaoCallbackPage = lazy(() => import('@/pages/KakaoCallbackPage/KakaoCallbackPage'));
import { MyPage } from '@/pages/MyPage/MyPage.tsx';
import { Payment } from '@/pages/Payment/Payment';
import { PayMoneyPage } from '@/pages/PayMoney/PayMoneyPage';
import { PointHistory } from '@/pages/PointHistory/PointHistory.tsx';
// import ProductPage from '@/pages/ProductPage/ProductPage';
const ProductPage = lazy(() => import('@/pages/ProductPage/ProductPage'));
import { ProtectedRoute } from '@/pages/ProtectedRoute.tsx';
// import Search from '@/pages/Search/Search';
const Search = lazy(() => import('@/pages/Search/Search'));
// import SearchProduct from '@/pages/Search/SearchProduct';
const SearchProduct = lazy(() => import('@/pages/Search/SearchProduct'));
import { SellingProduct } from '@/pages/SellingProduct/SellingProduct.tsx';
// import SignInPage from '@/pages/SignInPage/SignInPage';
const SignInPage = lazy(() => import('@/pages/SignInPage/SignInPage'));
const SignUpPage = lazy(() => import('@/pages/SignUpPage/SignUpPage'));
const SignUpUserPage = lazy(() => import('@/pages/SignUpUserPage/SignUpUserPage'));

// import SignUpPage from '@/pages/SignUpPage/SignUpPage';
// import SignUpUserPage from '@/pages/SignUpUserPage/SignUpUserPage';
import { UpdateProduct } from '@/pages/UpdateProduct/UpdateProduct.tsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense fallback={<div>loading...</div>}>
        <DefaultLayout />
      </Suspense>
    ),
    // errorElement: <div>Not Found Page</div>,
    children: [
      // 제품 및 검색
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/product/:productId',
        element: <DetailPage />,
      },
      {
        path: '/category',
        element: <Menu />,
      },
      {
        path: '/product/search/category',
        element: <ProductPage />,
      },
      {
        path: '/product/search',
        element: <SearchProduct />,
      },
      {
        path: '/search',
        element: <Search />,
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
      {
        path: '/v1/api/user/kakao/callback',
        element: <KakaoCallbackPage />,
      },

      // 마이페이지 및 결제 등
      {
        path: '/mycart',
        element: (
          <ProtectedRoute onlyBuyer>
            <CartPage />
          </ProtectedRoute>
        ),
      },
      {
        path: '/pay',
        element: (
          <ProtectedRoute onlyBuyer>
            <Payment />
          </ProtectedRoute>
        ),
      },
      {
        path: '/mypage',
        element: (
          <ProtectedRoute>
            <MyPage />
          </ProtectedRoute>
        ),
      },
      {
        path: '/mypage/paymoney',
        element: (
          <ProtectedRoute onlyBuyer>
            <PayMoneyPage />
          </ProtectedRoute>
        ),
      },
      {
        path: '/new/product',
        element: (
          <ProtectedRoute onlySeller>
            <AddProduct />
          </ProtectedRoute>
        ),
      },
      {
        path: '/update/product',
        element: (
          <ProtectedRoute onlySeller>
            <UpdateProduct />
          </ProtectedRoute>
        ),
      },
      {
        path: '/mypage/coupon',
        element: (
          <ProtectedRoute onlyBuyer>
            <Coupon />
          </ProtectedRoute>
        ),
      },
      {
        path: '/mypage/purchase',
        element: (
          <ProtectedRoute onlyBuyer>
            <Purchase />
          </ProtectedRoute>
        ),
      },
      {
        path: '/mypage/sold',
        element: (
          <ProtectedRoute onlySeller>
            <SoldPage />
          </ProtectedRoute>
        ),
      },
      {
        path: '/mypage/selling-product',
        element: (
          <ProtectedRoute onlySeller>
            <SellingProduct />
          </ProtectedRoute>
        ),
      },
      {
        path: '/mypage/point-history',
        element: <PointHistory />,
      },
      {
        path: '/mypage/wish',
        element: (
          <ProtectedRoute onlyBuyer>
            <WishPage />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

export type RoutePath =
  | '/signup'
  | '/signup/seller'
  | '/signup/buyer'
  | '/signin'
  | '/'
  | '/product/:productId'
  | '/category'
  | '/mycart'
  | '/pay'
  | '/mypage'
  | '/mypage/coupon'
  | '/mypage/paymoney'
  | '/mypage/selling-product'
  | '/purchase'
  | '/sold'
  | '/wish'
  | '/new/product'
  | '/update/product'
  | '/search'
  | '/product/search/category'
  | '/product/search'
  | string;
