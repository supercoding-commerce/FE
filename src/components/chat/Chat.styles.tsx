import styled from '@emotion/styled';

import { theme } from '@/styles/theme';

// import { theme } from '@/styles/theme.ts';

export const Chat = styled.div`
  width: 390px;
  height: 730px;
  display: flex;
  justify-content: center;
  align-items: top;
  flex-direction: column;
  border-radius: 40px;
  margin-left: 50px;
  margin-top: 50px;
  overflow: hidden;
  box-shadow: 0px 0px 10px 10px #dddddd;

  background-color: #ffffff;
`;

export const ChatHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 110px;
  /* border-radius: 40px 40px 0px 0px; */
  box-shadow: 0px 5px 15px 2px #f3f3f3;

  .header_img_wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 117px;
    height: 110px;

    img {
      width: 70px;
      height: 70px;
      border-radius: 24px;
      background-color: ${theme.color.backgroundColor};
    }
  }

  .header_title_container {
    display: flex;
    justify-content: center;
    align-items: left;
    flex-direction: column;
    width: 187px;
    height: 130px;

    .title_wrapper {
      display: flex;
      justify-content: left;
      align-items: end;
      width: 100%;
      height: 70px;
      padding-bottom: 4px;
      box-sizing: border-box;

      span {
        ${theme.font.h2}
      }
    }
    .subtitle_wrapper {
      display: flex;
      justify-content: left;
      align-items: start;
      width: 100%;
      height: 60px;
      padding-top: 4px;
      box-sizing: border-box;

      span {
        ${theme.font.body2};
        color: ${theme.color.borderColor};
        margin-left: 2px;
      }
    }
  }

  .header_startBtn_wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 89px;
    height: 130px;
    padding-bottom: 40px;
  }
`;

export const ChatBody = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 620px;
  overflow: scroll;
`;

export const ChatBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 330px;
  height: 110px;
  border-radius: 10px;
  margin-top: 15px;
  background-color: ${theme.color.backgroundColor};
  cursor: pointer;

  .box_img_wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 78px;
    height: 110px;
    padding-bottom: 28px;

    img {
      width: 40px;
      height: 40px;
      border-radius: 14px;
      background-color: ${theme.color.brand};
    }
  }

  .box_title_container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 250px;
    height: 110px;

    .container {
      width: 100%;
      height: 66px;

      .box_title_wrapper {
        display: flex;
        justify-content: left;
        align-items: end;
        width: 100%;
        height: 42px;

        span {
          ${theme.font.body0};
          color: ${theme.color.black};
          margin-top: 2px;
        }
      }

      .box_subtitle_wrapper {
        display: flex;
        justify-content: left;
        align-items: center;
        width: 100%;
        height: 18px;

        span {
          ${theme.font.body3};
          color: ${theme.color.brandActive};
          margin-top: 2px;
        }
      }
    }

    .box_text_wrapper {
      width: 100%;
      height: 50px;
      padding-top: 8px;
      box-sizing: border-box;

      span {
        ${theme.font.body2};
        color: ${theme.color.black};
      }
    }
  }
`;

export const ChatDetailHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 88px;
  box-shadow: 0px 5px 15px 2px #f3f3f3;

  .arrow_btn_wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 18%;
    height: 88px;
  }

  .detail_title_wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-right: 70px;
    box-sizing: border-box;
    width: 82%;
    height: 88px;

    span {
      ${theme.font.body0}
    }
  }
`;

export const ChatDetailBody = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 642px;
  overflow: scroll;
  box-shadow: 0px 5px 15px 2px #f3f3f3;
`;

export const ChatDetailIntro = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin: 40px 0px;

  .intro_img_wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 80px;
      height: 80px;
      border-radius: 24px;
      background-color: ${theme.color.backgroundColor};
    }
  }

  .intro_title_wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 16px;

    span {
      ${theme.font.body0}
    }
  }
`;

export const ChatLeftBox = styled.div`
  display: flex;
  justify-content: left;
  align-items: start;
  width: 85%;
  margin: 15px 0px;

  .leftbox_img_wrapper {
    width: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;

    img {
      width: 35px;
      height: 35px;
      border-radius: 10px;
      background-color: ${theme.color.backgroundColor};
    }
  }

  .leftbox_wrapper {
    display: flex;
    justify-content: left;
    align-items: center;
    border-radius: 10px;
    margin-left: 10px;
    background-color: ${theme.color.backgroundColor};

    span {
      margin: 10px;
      ${theme.font.body3}
    }
  }
`;

export const ChatRightBox = styled.div`
  display: flex;
  justify-content: right;
  align-items: start;
  width: 85%;

  .rightbox_wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;

    background-color: ${theme.color.black};

    span {
      margin: 10px;
      ${theme.font.body3};
      color: ${theme.color.green};
    }
  }
`;

export const ChatInput = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: white;
`;
