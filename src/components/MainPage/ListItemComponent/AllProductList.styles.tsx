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
  white-space: nowrap;
  max-width: 171px;
`;

export const Price = styled.h2`
  ${theme.font.body0ExtraBold}
`;

export const Name = styled.h3`
  ${theme.font.body2Bold}
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const DetailDescription = styled.p`
  ${theme.font.body3}
`;

export const ListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  padding-left: 4px;
`;

export const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  flex-direction: row;
  padding: 0 20px;
  gap: 20px;
`;

export const ProductImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
