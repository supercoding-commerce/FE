import { useNavigate } from 'react-router-dom';

import Icon from '@/components/common/Icon';
import * as S from './DefaultHeader.styles.tsx';

interface HeaderProps {
  text: string;
}

function DefaultHeader({ text }: HeaderProps) {
  const navigate = useNavigate();
  const goToBack = () => {
    navigate(-1);
  };
  return (
    <S.HeaderContainer>
      <S.IconBox onClick={goToBack}>
        <Icon name="IconArrowLeft" color="brand" />
      </S.IconBox>
      <S.Title>{text}</S.Title>
    </S.HeaderContainer>
  );
}

export default DefaultHeader;
