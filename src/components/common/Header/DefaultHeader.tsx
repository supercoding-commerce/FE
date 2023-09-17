import { useNavigate } from 'react-router-dom';

import Icon from '@/components/common/Icon';
import { ThemeColor } from '@/styles/theme.ts';
import * as S from './DefaultHeader.styles.tsx';

interface HeaderProps {
  text: string;
  backgroundColor?: string;
  color?: string;
  arrowColor?: ThemeColor;
}

function DefaultHeader({ text, backgroundColor, color, arrowColor }: HeaderProps) {
  const navigate = useNavigate();
  const goToBack = () => {
    navigate(-1);
  };
  return (
    <S.HeaderContainer style={{ backgroundColor: backgroundColor }}>
      <S.IconBox onClick={goToBack}>
        <Icon name="IconArrowLeft" color={arrowColor ? arrowColor : 'brand'} />
      </S.IconBox>
      <S.Title style={{ color: color }}>{text}</S.Title>
    </S.HeaderContainer>
  );
}

export default DefaultHeader;
