import background from '../../assets/images/page-backgrounds/home.webp';
import PageBackground from '../../components/PageBackground';
import TopBannerSmall from '../../components/TopBannerSmall';
import Carousel from './Carousel';
import ProShopCards from './ProShopCards';
import PromoBanner from './PromoBanner';
import TodayOnlyBanner from './TodayOnlyBanner';
import * as Styled from './styles';

export default function Home() {
  return (
    <Styled.Main>
      <PageBackground background={background} />
      <Styled.Container>
        <TopBannerSmall />
        <Carousel />
        <ProShopCards />
        <PromoBanner />
        <TodayOnlyBanner />
      </Styled.Container>
    </Styled.Main>
  );
}
