import TopBannerSmall from '../../components/TopBannerSmall';
import Carousel from './Carousel';
import ProShopCards from './ProShopCards';
import PromoBanner from './PromoBanner';
import TodayOnlyBanner from './TodayOnlyBanner';
import * as Styled from './styles';

export default function Home() {
  return (
    <Styled.Main>
      <TopBannerSmall />
      <Carousel />
      <ProShopCards />
      <PromoBanner />
      <TodayOnlyBanner />
    </Styled.Main>
  );
}
