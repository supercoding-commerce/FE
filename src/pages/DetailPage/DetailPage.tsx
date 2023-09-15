import styled from '@emotion/styled';

import DetailFooter from '@/components/DetailFooter/DetailFooter';
import DetailHeader from '@/components/DetailHeader/DetailHeader';
import { theme } from '@/styles/theme';

const DetailPage = () => {
  return (
    <DetailPageContainer>
      <DetailHeader />
      <DetailFooter />
    </DetailPageContainer>
  );
};

export default DetailPage;

const DetailPageContainer = styled.div`
  width: 420px;
  height: calc(100vh - 60px - 60px);
  background-color: ${theme.color.backgroundColor};
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;
