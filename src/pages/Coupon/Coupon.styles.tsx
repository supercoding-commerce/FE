import styled from '@emotion/styled';

export const Coupon = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  width: 100%;
  height: calc(100vh - 60px - 110px);
  padding-top: 50px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  overflow-x: hidden;

  .coupon_container {
    display: flex;
    justify-content: start;
    align-items: center;
    flex-direction: column;
    width: 80%;

    .coupon_wrapper {
      margin: 10px 0px;
      width: 100%;
    }
  }
`;
