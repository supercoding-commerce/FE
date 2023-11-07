import { KeyboardEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Icon from '@/components/common/Icon';
import useDebounce from '@/hooks/useDebounce';
import * as S from '@/pages/Search/Search.styles';
import SearchList from '@/pages/Search/SearchList';
import { getItem, removeItem, setItem } from '@/utils/localstorage';

const Search = () => {
  const [currentSearchTerm, setCurrentSearchTerm] = useState<string>(''); //현재 검색어
  const navigate = useNavigate();
  const [recentSearchTerms, setRecentSearchTerms] = useState<string[]>([]); // 최근 검색어
  const localStorageKey = 'searchWords';
  const [searchResults, setSearchResults] = useState(null); // 검색 결과 데이터

  const debounceValue = useDebounce<string>(currentSearchTerm);

  useEffect(() => {
    const getSearchProduct = async () => {
      try {
        const response = await fetch(
          `https://pet-commerce.shop/v1/api/product/search?searchWord=${encodeURIComponent(
            currentSearchTerm,
          )}`,
        );

        if (!response.ok) {
          throw new Error('no country found');
        }
        const data = await response.json();
        setSearchResults(data);
      } catch (err) {
        console.error(err);
      }
    };

    if (debounceValue) {
      getSearchProduct();
    }
  }, [debounceValue]);

  useEffect(() => {
    const searchWordsFromStorage = getItem<string[]>(localStorageKey) || [];
    setRecentSearchTerms(searchWordsFromStorage);
  }, []);

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const newSearchWord = e.currentTarget.value;

      setRecentSearchTerms((prev) => [...prev, newSearchWord]);

      setItem(localStorageKey, [...recentSearchTerms, newSearchWord]);

      navigate(`/product/search?searchWord=${encodeURIComponent(newSearchWord)}`);
    }
  };

  /**선택삭제 함수 */
  const deleteTag = (wordToDelete: string) => {
    const updatedSearchWords = recentSearchTerms.filter((word) => word !== wordToDelete);

    setRecentSearchTerms(updatedSearchWords);
    setItem(localStorageKey, updatedSearchWords);
  };

  /**최근검색어 전체삭제 함수 */
  const handleDeleteAll = () => {
    setRecentSearchTerms([]);
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
            value={currentSearchTerm}
            onChange={(e) => setCurrentSearchTerm(e.target.value)}
          />
        </S.InputDiv>
      </S.SearchHeader>
      <S.SearchContainer>
        {recentSearchTerms.length > 0 && (
          <S.TitleContainer>
            <S.RecentSearch>최근검색어</S.RecentSearch>
            <S.DeleteAll onClick={handleDeleteAll}>전체삭제</S.DeleteAll>
          </S.TitleContainer>
        )}
        <S.TagWrap>
          {recentSearchTerms.map((word: string, index: number) => (
            <S.TagContainer key={index}>
              <S.TagRecentSearch to={`/product/search?searchWord=${encodeURIComponent(word)}`}>
                {word}
              </S.TagRecentSearch>
              <Icon
                onClick={() => deleteTag(word)}
                name="IconX"
                style={{ width: '17px', height: '17px' }}
              />
            </S.TagContainer>
          ))}
        </S.TagWrap>
      </S.SearchContainer>
      {currentSearchTerm ? <SearchList searchData={searchResults} /> : ''}
    </>
  );
};

export default Search;
