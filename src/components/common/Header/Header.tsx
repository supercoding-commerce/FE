import { useLocation } from 'react-router-dom';

import DefaultHeader from '@/components/common/Header/DefaultHeader.tsx';
import SearchHeader from '@/components/common/Header/SearchHeader.tsx';
import { RoutePath } from '@/pages/routes.tsx';

/**
 * @desc Header 컴포넌트에 URL 별로 그에 맞는 헤더를 반환
 */
export function Header() {
  const location = useLocation();
  const { pathname } = location;

  const isNoHeader = NO_HEADER_URL.includes(pathname);
  const isSearchHeader =
    PRODUCT_DETAIL_REGEX.test(pathname) || SEARCH_HEADER_URL.includes(pathname);

  if (isNoHeader) {
    return null;
  }
  if (isSearchHeader) {
    return <SearchHeader />;
  }
  return <DefaultHeader text={HEADER_TITLE[pathname] || ''} />;
}

const NO_HEADER_URL: RoutePath[] = [
  '/signup',
  '/signup/seller',
  '/signup/buyer',
  '/signin',
  '/search/category',
  '/search',
];
const SEARCH_HEADER_URL: RoutePath[] = ['/', '/category'];
const PRODUCT_DETAIL_REGEX = new RegExp(/\/product\/\d+/);
const HEADER_TITLE: { [key: RoutePath]: string } = {
  '/pay': 'Order/Payment',
  '/new/product': 'Add Products',
  '/update/product': 'Update Products',
  '/mypage': 'My Page',
  '/mycart': 'Cart',
  '/detail': 'Detail',
};
