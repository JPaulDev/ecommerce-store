import TopBannerSmall from '../../components/TopBannerSmall';
import Carousel from './Carousel';
import ProShopCards from './ProShopCards';
import * as Styled from './styles';

export default function Home() {
  return (
    <Styled.Main>
      <TopBannerSmall />
      <Carousel />
      <ProShopCards />
    </Styled.Main>
  );
}
