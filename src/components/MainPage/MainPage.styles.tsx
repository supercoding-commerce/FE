import styled from '@emotion/styled';

export const MainPageContainer = styled.div`
  padding: 0 20px;
  padding-top: 0;
  padding-bottom: 0;
  height: calc(100vh - 60px - 46px - 170px);
  overflow: scroll;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    height: 30%;
    background: #535353;
    border-radius: 30px;
  }

  &::-webkit-scrollbar-track {
    background: #cecece;
  }
`;
