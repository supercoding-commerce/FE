import { KeyboardEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Icon from '@/components/common/Icon';
import * as S from '@/pages/Search/Search.styles';
import { getItem, removeItem, setItem } from '@/utils/localstorage';

const Search = () => {
  const [searchWord, setSearchWord] = useState('');
  const navigate = useNavigate();
  const [searchWords, setSearchWords] = useState<string[]>([]);
  const localStorageKey = 'searchWords';

  useEffect(() => {
    const searchWordsFromStorage = getItem<string[]>(localStorageKey) || [];
    setSearchWords(searchWordsFromStorage);
  }, []);

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const newSearchWord = e.currentTarget.value;

      setSearchWords((prev) => [...prev, newSearchWord]);

      setItem(localStorageKey, [...searchWords, newSearchWord]);

      navigate(`/product/search?searchWord=${encodeURIComponent(newSearchWord)}`);
    }
  };

  /**선택삭제 함수 */
  const deleteTag = (wordToDelete: string) => {
    const updatedSearchWords = searchWords.filter((word) => word !== wordToDelete);

    setSearchWords(updatedSearchWords);
    setItem(localStorageKey, updatedSearchWords);
  };

  /**최근검색어 전체삭제 함수 */
  const handleDeleteAll = () => {
    setSearchWords([]);
    removeItem(localStorageKey);
  };

  return (
    <>
      <S.SearchHeader>
        <S.IconBox onClick={handleGoBack}>
          <Icon name="IconArrowLeft" color="black" />
        </S.IconBox>
        <S.InputDiv>
          <Icon name="IconSearch" />
          <S.Input
            onKeyDown={handleKeyDown}
            placeholder="검색어를 입력하세요"
            value={searchWord}
            onChange={(e) => setSearchWord(e.target.value)}
          />
        </S.InputDiv>
      </S.SearchHeader>
      <S.SearchContainer>
        {searchWords.length > 0 && (
          <S.TitleContainer>
            <S.RecentSearch>최근검색어</S.RecentSearch>
            <S.DeleteAll onClick={handleDeleteAll}>전체삭제</S.DeleteAll>
          </S.TitleContainer>
        )}
        <S.TagWrap>
          {searchWords.map((word: string, index: number) => (
            <S.TagContainer key={index}>
              <S.StyledLink to={`/product/search?searchWord=${encodeURIComponent(word)}`}>
                {word}
              </S.StyledLink>
              <Icon
                onClick={() => deleteTag(word)}
                name="IconX"
                style={{ width: '17px', height: '17px' }}
              />
            </S.TagContainer>
          ))}
        </S.TagWrap>
      </S.SearchContainer>
    </>
  );
};

export default Search;
