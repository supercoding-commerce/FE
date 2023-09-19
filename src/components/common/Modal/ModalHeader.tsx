import Icon from '@/components/common/Icon';
import * as S from './Modal.styles.jsx';

/**
 * @desc 모달헤더 UI 로 닫기 UI 가 있고, 닫기 기능을 원할 시 props 로 onClose 를 전달해야합니다
 * @param onClose
 * @example
 * <ModalHeader onClose={() => 닫기기능()} />
 */
const ModalHeader = ({ onClose }: { onClose?: () => void }) => {
  return (
    <S.ModalHeader>
      <Icon name="IconX" size={20} onClick={onClose} />
    </S.ModalHeader>
  );
};

export default ModalHeader;
