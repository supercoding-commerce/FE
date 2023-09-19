import { KeyboardEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Icon from '@/components/common/Icon';
import * as S from '@/pages/Search/Search.styles';

const Search = () => {
  const [searchText, setSearchText] = useState<string>('');
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
    console.log(searchText);
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      // 검색어 입력 후 Enter 키를 누를 때 경로를 /product/search로 이동
      navigate(`/product/search?searchWord=${encodeURIComponent(searchText)}`);
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
          value={searchText}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          placeholder="검색어를 입력하세요"
        />
      </S.InputDiv>
    </S.SearchHeader>
  );
};

export default Search;
