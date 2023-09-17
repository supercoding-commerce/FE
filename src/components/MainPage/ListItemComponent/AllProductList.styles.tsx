import styled from '@emotion/styled';

import { theme } from '@/styles/theme';

export const ListItem = styled.li`
  width: 171px;
  border: 1px solid black;
  height: 207px;
  list-style: none;
`;

export const Description = styled.div`
  padding: 10px 0;
`;

export const Price = styled.h2`
  ${theme.font.body0ExtraBold}
`;

export const Name = styled.h3`
  ${theme.font.body2Bold}
`;

export const DetailDescription = styled.p`
  ${theme.font.body3}
`;

export const ListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;

export const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  flex-direction: row;
`;

export const ProductImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
