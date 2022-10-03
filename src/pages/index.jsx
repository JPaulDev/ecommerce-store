import Head from 'next/head';
import background from '../../public/images/page-backgrounds/home.webp';
import Carousel from '../components/home/Carousel';
import ProShopCards from '../components/home/ProShopCards';
import PromoBanner from '../components/home/PromoBanner/PromoBanner';
import TodayOnlyBanner from '../components/home/TodayOnlyBanner';
import TodayOnlyOffers from '../components/home/TodayOnlyOffers';
import NewsAndProducts from '../components/home/NewsAndProducts';

export async function getStaticProps() {
  return {
    props: { background },
  };
}

export default function Home() {
  return (
    <>
      <Head>
        <title>PC Connect | Components Store</title>
      </Head>
      <Carousel />
      <ProShopCards />
      <PromoBanner />
      <TodayOnlyBanner />
      <TodayOnlyOffers />
      <NewsAndProducts />
    </>
  );
}
