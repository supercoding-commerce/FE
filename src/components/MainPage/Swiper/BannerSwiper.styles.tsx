import { Swiper, SwiperSlide } from 'swiper/react';
import styled from '@emotion/styled';

export const BannerSwiperContainer = styled.div`
  width: 380px;
  border-radius: 20px;
  margin: 0 auto;
  padding: 20px 5px;
`;

export const CustomSwiper = styled(Swiper)`
  height: 208px;

  .swiper-pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: 10px;
  }

  .swiper-pagination-bullet {
    margin: 0 9px;
    position: relative;
    width: 6px;
    height: 6px;
    background-color: #fff;
    opacity: 0.4;
    @extend %transition_all_03s;

    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 10px;
      height: 10px;
      transform: translate(-50%, -50%);
      border: 0px solid #fff;
      border-radius: 50%;
      @extend %transition_all_03s;
    }

    &:hover,
    &.swiper-pagination-bullet-active {
      opacity: 1;
    }

    &.swiper-pagination-bullet-active {
      &::before {
        border-width: 1px;
      }
    }
  }
`;

export const CustomSwiperSlide = styled(SwiperSlide)`
  width: 100%;
  border-radius: 20px;
  border: 2px solid black;
  overflow: hidden;
`;
