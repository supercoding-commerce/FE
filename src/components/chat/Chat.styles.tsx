import styled from '@emotion/styled';

import { theme } from '@/styles/theme';

// import { theme } from '@/styles/theme.ts';

export const ChatButton = styled.div`
  position: fixed;
  z-index: 10;
  display: flex;
  flex-wrap: nowrap;
  width: auto;
  overflow: visible;
  background: none;
  border-radius: 999px;
  bottom: 60px;
  right: 5%;
`;

export const Chat = styled.div`
  position: fixed;
  z-index: 10;
  display: flex;
  flex-direction: column;
  /* flex-wrap: nowrap; */
  width: 390px;
  height: 680px;
  border-radius: 40px;
  overflow: hidden;
  background: transparent;
  bottom: 80px;
  right: 6%;
  box-shadow: 0px 0px 20px 10px rgba(164, 164, 164, 0.2);

  background-color: ${theme.color.white};
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
    padding-bottom: 0px;

    .startBtn_icon:hover {
      width: 40px;
      height: 40px;
      background-color: ${theme.color.backgroundColor};
      border-radius: 30px;
    }
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
  padding-top: 10px;
  padding-bottom: 25px;
  box-sizing: border-box;
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
        margin-top: 2px;
        margin-bottom: 4px;

        span {
          ${theme.font.body3};
          color: ${theme.color.brandActive};
          margin-top: 2px;
          margin-right: 4px;
        }

        .gray_line {
          ${theme.font.body3};
          color: ${theme.color.borderColor};
          margin-top: 2px;
          margin-right: 4px;
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

  .close_btn_wrapper {
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
  margin: 10px 0px;

  .leftbox_img_wrapper {
    width: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    /* margin-top: 10px; */

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
    max-width: 70%;
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
  margin: 10px 0px;

  .rightbox_wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    max-width: 70%;

    background-color: ${theme.color.black};

    span {
      margin: 10px;
      ${theme.font.body3};
      color: ${theme.color.green};
    }
  }
`;

export const ChatLeaveBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  width: 85%;
  margin: 10px 0px;

  .reavebox_wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;

    background-color: ${theme.color.current};

    span {
      margin: 10px;
      ${theme.font.body3};
      color: ${theme.color.black};
    }
  }
`;

export const ChatInput = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 20px 0px;
  background-color: ${theme.color.white};
`;
