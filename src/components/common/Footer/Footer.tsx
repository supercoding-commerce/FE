import { useLocation } from 'react-router-dom';

import DefaultFooter from '@/components/common/Footer/DefaultFooter';
import SignFooter from '@/components/common/Footer/SignFooter';
import { RoutePath } from '@/pages/routes';

const Footer = () => {
  const { pathname } = useLocation();

  const isSignFooter = SIGN_FOOTER_URL.includes(pathname);
  const isDefaultFooter = DEFAULT_FOOTER_URL.includes(pathname);

  if (isSignFooter) {
    return <SignFooter />;
  }

  if (isDefaultFooter) {
    return <DefaultFooter />;
  }

  return null;
};

export default Footer;

const SIGN_FOOTER_URL: RoutePath[] = ['/signin', '/signup'];

const DEFAULT_FOOTER_URL: RoutePath[] = ['/', '/category', '/search/category'];
