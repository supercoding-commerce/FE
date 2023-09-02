import { useState } from 'react';
import { cx } from '@emotion/css';

import Icon from '@/components/common/Icon';
import * as S from '@/components/common/SearchHeader/SearchHeader.styles';

const SearchHeader = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [inputOpen, setInputOpen] = useState(false);

  return (
    <S.SearchHeaderContainer>
      {/* 로고나오면 로고로 대체 */}
      <h1>로고자리</h1>
      <S.IconsContainer>
        {searchOpen ? (
          <S.InputDiv>
            <Icon
              name="IconSearch"
              onClick={() => {
                setInputOpen(false);
                setTimeout(() => {
                  setSearchOpen(!searchOpen);
                }, 500);
              }}
            />
            <S.Input
              className={cx({
                ['open']: inputOpen,
              })}
            />
          </S.InputDiv>
        ) : (
          <Icon
            name="IconSearch"
            onClick={() => {
              setSearchOpen(!searchOpen);
              setTimeout(() => {
                setInputOpen(true);
              }, 100);
            }}
          />
        )}
        {/* user아이콘 fill이 white로 되어있는 것 같습니다!
        헤더의 배경색이 흰색이면 상관 없을 듯한데 다른색이면 이부분도 색 수정을 해야합니다! */}
        <Icon name="IconUser" />
        <Icon name="IconBag" />
      </S.IconsContainer>
    </S.SearchHeaderContainer>
  );
};

export default SearchHeader;
