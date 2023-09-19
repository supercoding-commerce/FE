import { KeyboardEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Icon from '@/components/common/Icon';
import * as S from '@/pages/Search/Search.styles';

const Search = () => {
  const [searchWord, setSearchWord] = useState<string>('');
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchWord(e.target.value);
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      //encodeURIComponent 공백이나 특수문자때문에 추가
      navigate(`/product/search?searchWord=${encodeURIComponent(searchWord)}`);
      localStorage.setItem('searchWord', searchWord);
    }
  };

  return (
    <S.SearchHeader>
      <S.IconBox onClick={handleGoBack}>
        <Icon name="IconArrowLeft" color="black" />
      </S.IconBox>
      <S.InputDiv>
        <Icon name="IconSearch" />
        <S.Input
          value={searchWord}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          placeholder="검색어를 입력하세요"
        />
      </S.InputDiv>
    </S.SearchHeader>
  );
};

export default Search;
