import 'swiper/css';
import 'swiper/css/pagination';
import React from 'react';
import { Pagination } from 'swiper/modules';

import * as S from '../Swiper/BannerSwiper.styles';

interface Slide {
  srcWebp: string;
  srcPng: string;
}

const slideData: Slide[] = [
  {
    srcWebp: 'https://i.postimg.cc/T16SBK4t/23231-2.webp',
    srcPng: 'https://i.postimg.cc/8PzLM1h3/23231.png',
  },
  {
    srcWebp: 'https://i.postimg.cc/vZVrx0B6/wewe-1.webp',
    srcPng: 'https://i.postimg.cc/mD7KY3Gb/wewe.png',
  },
  {
    srcWebp: 'https://i.postimg.cc/DZjJMG0T/529f73b41a06cd4951aaea5a9b0bcc28-1.webp',
    srcPng: 'https://i.postimg.cc/qqkD29LL/529f73b41a06cd4951aaea5a9b0bcc28.png',
  },
];

const BannerSwiper: React.FC = () => {
  return (
    <S.BannerSwiperContainer>
      <S.CustomSwiper
        className="banner"
        modules={[Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {slideData.map((image, index) => (
          <S.CustomSwiperSlide key={index}>
            <picture>
              <source srcSet={image.srcWebp} type="image/webp" />
              <source srcSet={image.srcPng} type="image/png" />
              <img
                src={image.srcPng}
                alt={`EventBanner-${index + 1}`}
                style={{ width: '100%', aspectRatio: '16/9' }}
                loading="lazy"
              />
            </picture>
          </S.CustomSwiperSlide>
        ))}
      </S.CustomSwiper>
    </S.BannerSwiperContainer>
  );
};

export default BannerSwiper;
