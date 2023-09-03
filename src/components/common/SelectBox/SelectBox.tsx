import { CSSProperties, useState } from 'react';
import { cx } from '@emotion/css';

import Icon from '@/components/common/Icon';
import * as S from '@/components/common/SelectBox/SelectBox.styles';

interface SelectBoxProps {
  width?: CSSProperties['width'];
  height?: CSSProperties['height'];
  optionList: string[];
  onChange: (item: string) => void;
  value: string | null;
}

function SelectBox({
  width = '100%',
  height = '30px',
  optionList,
  onChange,
  value,
}: SelectBoxProps) {
  // 1. UI먼저 구현 ( 하드코딩 )
  // 2. Box 클릭했을 때 option 오픈
  // 3. option 클릭했을 때 선택부분 텍스트 변경, option 리스트 닫기
  // 4. props값 받아서 전달하기
  const [openOption, setOpenOption] = useState(false);

  return (
    <S.SelectContainer style={{ '--width': width, '--height': height } as CSSProperties}>
      <S.SelectedBox
        onClick={() => {
          setOpenOption(!openOption);
        }}
        className={cx({
          ['open']: openOption,
        })}
      >
        {value || '선택'}
        {openOption ? <Icon name="IconArrowUp" /> : <Icon name="IconArrowDown" />}
      </S.SelectedBox>
      {openOption && (
        <S.OptionBox>
          <S.OptionUl>
            {optionList.map((item, index) => {
              return (
                <li
                  key={index}
                  onClick={() => {
                    setOpenOption(false);
                    onChange(item);
                  }}
                >
                  {item}
                </li>
              );
            })}
          </S.OptionUl>
        </S.OptionBox>
      )}
    </S.SelectContainer>
  );
}

export default SelectBox;
