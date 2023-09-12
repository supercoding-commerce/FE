import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import styled from '@emotion/styled';

import { BannerSwiperContainer } from './BannerSwiper.styles'; // 스타일 파일을 가져옴

const CustomSwiper = styled(Swiper)`
  width: 100%;
  height: 200px;
`;
const CustomSwiperSlide = styled(SwiperSlide)`
  width: 100%;
  height: 200px;
  border-radius: 20px;
`;

const BannerSwiper: React.FC = () => {
  return (
    <BannerSwiperContainer>
      <CustomSwiper
        className="banner"
        modules={[Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        <CustomSwiperSlide>슬라이드 1</CustomSwiperSlide>
        <CustomSwiperSlide>슬라이드 2</CustomSwiperSlide>
        <CustomSwiperSlide>슬라이드 3</CustomSwiperSlide>
        <CustomSwiperSlide>슬라이드 4</CustomSwiperSlide>
      </CustomSwiper>
    </BannerSwiperContainer>
  );
};

export default BannerSwiper;

// import 'swiper/css';
// import 'swiper/css/pagination';
// import { Pagination } from 'swiper/modules';
// import { Swiper, SwiperSlide } from 'swiper/react';

// import { swiperImg } from '@/data/swiperimg';

// interface BannerItem {
//   id: number;
//   imageUrl: string;
// }

// const BannerSwiper: React.FC = () => {
//   return (
//     <div>
//       <Swiper
//         className="banner"
//         modules={[Pagination]}
//         spaceBetween={0}
//         slidesPerView={1}
//         pagination={{ clickable: true }}
//       >
//         {swiperImg.map((item: BannerItem) => {
//           return (
//             <SwiperSlide key={item.id}>
//               <img src={item.imageUrl} alt={`Slide ${item.id + 1}`} />
//             </SwiperSlide>
//           );
//         })}
//       </Swiper>
//     </div>
//   );
// };

// export default BannerSwiper;
