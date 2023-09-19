import { PropsWithChildren } from 'react';

import * as S from './Modal.styles.jsx';

/**
 * @desc 모달 컨텐츠의 UI 를 담당합니다.
 * @example <ModalContent>켄텐츠 내용 </ModalContent>
 */
const ModalContent = ({ children }: PropsWithChildren) => {
  return <S.ModalContent>{children}</S.ModalContent>;
};

export default ModalContent;
