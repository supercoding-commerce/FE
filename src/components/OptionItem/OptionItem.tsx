import { CSSProperties, useEffect, useRef } from 'react';

import { DeleteIcon } from '@/components/icons/DeleteIcon.tsx';
import { useHover } from '@/hooks/useHover.ts';
import * as S from './OptionItem.styles';

interface OptionItemProps {
  option: string;
  onClick: () => void;
}

export function OptionItem({ option, onClick }: OptionItemProps) {
  const { ref, isHover } = useHover<HTMLDivElement>();
  const widthRef = useRef(0);

  useEffect(() => {
    if (!ref.current) return;
    widthRef.current = ref.current?.offsetWidth;
  }, [ref]);

  return (
    <S.OptionItemWrapper
      ref={ref}
      onClick={onClick}
      style={
        {
          '--width': `${ref.current?.offsetWidth}px`,
        } as CSSProperties
      }
    >
      {isHover ? <DeleteIcon /> : option}
    </S.OptionItemWrapper>
  );
}
