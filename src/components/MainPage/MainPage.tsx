import AllProductList from '@/components/MainPage/ListItemComponent/AllProductList';
import BannerSwiper from '@/components/MainPage/Swiper/BannerSwiper';
import { MainPageContainer } from './MainPage.styles';

const MainPage = () => {
  return (
    <MainPageContainer>
      <BannerSwiper />
      <AllProductList />
    </MainPageContainer>
  );
};

export default MainPage;
