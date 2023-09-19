import { PropsWithChildren } from 'react';
import ReactDOM from 'react-dom';

export default function Portal({
  children,
  selector = '#dialog-root',
}: PropsWithChildren<{ selector: '#dialog-root' }>) {
  const $element = typeof window !== 'undefined' && document.querySelector(selector);
  return $element && children ? ReactDOM.createPortal(children, $element) : null;
}
