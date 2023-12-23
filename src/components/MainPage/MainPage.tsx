import { getScrollProducts } from '@/apis/product';
import Footer from '@/components/common/Footer/Footer';
import InfiniteScrollList from '@/components/InfiniteScrollList/ScrollProductList';
import BannerSwiper from '@/components/MainPage/Swiper/BannerSwiper';
import { MainPageContainer } from './MainPage.styles';

const MainPage = () => {
  const fetchData = ({ pageParam = 1 }) => getScrollProducts(pageParam);
  return (
    <MainPageContainer>
      <BannerSwiper />
      <InfiniteScrollList queryKey={['products']} fetchData={fetchData} />
      <Footer />
    </MainPageContainer>
  );
};

export default MainPage;
