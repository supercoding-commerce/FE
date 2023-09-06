import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

import { theme } from '@/styles/theme';
import * as S from '../Header/CategoryHeader.styles';

const StyledLink = styled(Link)`
  color: ${theme.color.green};
`;

const CategoryHeader = () => {
  return (
    <>
      <S.NavBar>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="">Category</StyledLink>
        <StyledLink to="">Product</StyledLink>
      </S.NavBar>
    </>
  );
};

export default CategoryHeader;
