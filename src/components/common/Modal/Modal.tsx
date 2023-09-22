import { MouseEvent, PropsWithChildren, useCallback, useRef } from 'react';

import ModalContent from '@/components/common/Modal/ModalContent.tsx';
import ModalHeader from '@/components/common/Modal/ModalHeader.tsx';
import Portal from '@/components/common/Portal';
import * as S from './Modal.styles';

/**
 * @desc 기본 RefetchModal UI 를 담당합니다. 모달 영역 밖은 dimmed UI 를 표시하고 modal contents 영역을 표현합니다.
 * @example
 * <RefetchModal visible={visible} onClose={onClose}>
 *     <ModalHeader />
 *     <ModalContent>컨텐츠 내용</ModalContent>
 * </RefetchModal>
 */
type ModalProps = {
  visible: boolean;
  onClose?: () => void;
};
export function Modal({ children, visible, onClose }: PropsWithChildren<ModalProps>) {
  const className = '';
  const modalRef = useRef(null);

  const handleStopPropagation = useCallback((event: MouseEvent) => {
    event.stopPropagation();
  }, []);

  return (
    <Portal selector="#dialog-root">
      <S.ModalOverlay className={className} tabIndex={-1} visible={visible} onClick={onClose}>
        <S.ModalContainer ref={modalRef} tabIndex={0} onClick={handleStopPropagation}>
          {children}
        </S.ModalContainer>
      </S.ModalOverlay>
    </Portal>
  );
}

Modal.Header = ModalHeader;
Modal.Content = ModalContent;
