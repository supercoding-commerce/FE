import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import styled from '@emotion/styled';

import Icon from '@/components/common/Icon';
import { theme } from '@/styles/theme';
import * as S from './CardSwiper.styles';

const CustomSwiper = styled(Swiper)`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .swiper-pagination-bullet {
    background-color: ${theme.color.green};
  }
`;

const CustomSwiperSlide = styled(SwiperSlide)`
  width: 330px;
  height: 190px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  padding-bottom: 15px;
`;

const CardSwiper: React.FC = () => {
  return (
    <S.SwiperContainer>
      <CustomSwiper
        modules={[A11y, Navigation, Pagination, Scrollbar]}
        spaceBetween={50}
        slidesPerView={1}
        navigation={{
          nextEl: '.swiper-next',
          prevEl: '.swiper-prev',
        }}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        <CustomSwiperSlide>
          <Icon name="IconCard1" width="300px" height="160px" />
        </CustomSwiperSlide>
        <CustomSwiperSlide>
          <Icon name="IconCard2" width="300px" height="160px" />
        </CustomSwiperSlide>
        <CustomSwiperSlide>
          <Icon name="IconCard3" width="300px" height="160px" />
        </CustomSwiperSlide>
      </CustomSwiper>
    </S.SwiperContainer>
  );
};

export default CardSwiper;
