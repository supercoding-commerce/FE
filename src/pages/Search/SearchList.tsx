import React from 'react';
import { useNavigate } from 'react-router-dom';

import Icon from '@/components/common/Icon';
import * as S from '@/pages/Search/SearchList.styles';

interface Search {
  name: string;
}

interface SearchListProps {
  searchData: Search[] | null | undefined;
}

const SearchList: React.FC<SearchListProps> = ({ searchData }) => {
  const navigate = useNavigate();

  if (!searchData) return null;

  return (
    <S.SearchListWrapper>
      {searchData.map((data) => (
        <S.SearchList
          onClick={() => navigate(`/product/search?searchWord=${encodeURIComponent(data.name)}`)}
        >
          <S.SearchTextCon>
            <Icon name="IconSearch" />
            <S.SearchText>{data.name}</S.SearchText>
          </S.SearchTextCon>
        </S.SearchList>
      ))}
    </S.SearchListWrapper>
  );
};

export default SearchList;
