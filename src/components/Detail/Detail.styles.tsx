import styled from '@emotion/styled';

import { theme } from '@/styles/theme';

export const DetailCategory = styled.div`
  width: 100%;
  height: 45px;
  border-top: 1px solid ${theme.color.borderColor};
  border-bottom: 1px solid ${theme.color.borderColor};

  .category_container {
    width: 100%;
    height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;

    .category_wrapper {
      width: 50%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      span {
        cursor: pointer;
        ${theme.font.body1}
      }
    }
  }
`;

export const DetailInformation = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  /* background-color: aliceblue; */

  .information_container {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    width: 85%;
    height: 670px;
    border: 1px solid ${theme.color.borderColor};
    margin-top: 25px;

    .information_box {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  .more_information_wrapper {
    width: 85%;
    margin-bottom: 25px;

    button {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 40px;
      ${theme.font.body1}

      span {
        margin-right: 20px;
        margin-left: 40px;
      }
    }
  }
`;

export const DetailReviewButton = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: right;
  align-items: center;
  padding-right: 20px;
  border-top: 1px solid ${theme.color.borderColor};
  border-bottom: 1px solid ${theme.color.borderColor};
`;

export const DetailReviewWrite = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid ${theme.color.borderColor};

  .Review_write_container {
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .review_top {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 28px;
    }

    .review_middle {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      margin-top: 14px;

      .textarea_wrapper {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .reviewImg_wrapper {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        flex-direction: column;
        margin-top: 14px;

        span {
          ${theme.font.body1}
          margin-bottom: 5px;
        }
      }

      .review_filebox {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        label {
          padding: 3px 10px;
          box-sizing: border-box;
          ${theme.font.body3}
          color: ${theme.color.blue};
          vertical-align: middle;
          border: 1px solid ${theme.color.blue};
          background-color: ${theme.color.white};
          border-radius: 5px;
          cursor: pointer;
          height: 25px;
          margin-right: 10px;
        }

        .upload-name {
          height: 25px;
          vertical-align: middle;
          border: 1px solid ${theme.color.black};
          border-radius: 5px;
          width: 78%;
          color: #999999;
        }

        input[type='file'] {
          position: absolute;
          width: 0;
          height: 0;
          padding: 0;
          overflow: hidden;
          border: 0;
        }
      }
    }
    .review_bottom {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      margin: 25px 0px;
    }
  }
`;

export const DetailReviewBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid ${theme.color.borderColor};

  .review_box_container {
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .review_box_top {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: left;
      flex-direction: column;
      margin-top: 32px;

      .rating_wrapper {
        display: flex;
        justify-content: left;
        align-items: center;
        margin-top: 7px;

        span {
          ${theme.font.body1};
        }
      }
    }

    .review_box_middle {
      width: 100%;
      height: 250px;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid ${theme.color.borderColor};
      margin-top: 12px;
    }

    .review_box_bottom {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      margin-top: 12px;
      margin-bottom: 32px;

      .option_wrapper {
        width: 100%;
        display: flex;
        justify-content: left;
        align-items: center;

        span {
          margin-bottom: 6px;
          margin-right: 8px;
          ${theme.font.body1};
        }
      }

      .review_content {
        width: 100%;
        display: flex;
        justify-content: left;
        align-items: center;

        span {
          margin-bottom: 6px;
          margin-right: 8px;
          ${theme.font.body2};
        }
      }
    }
  }
`;

export const DetailRevieFilterButton = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: right;
  align-items: center;
  padding-right: 20px;
  border-bottom: 1px solid ${theme.color.borderColor};

  Button {
    margin-left: 10px;
  }
`;
