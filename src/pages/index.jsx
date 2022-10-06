import Head from 'next/head';
import {
  Carousel,
  ProShopCards,
  PromoBanner,
  TodayOnlyBanner,
  TodayOnlyOffers,
  NewsAndProducts,
} from '../components/home';

export async function getStaticProps() {
  return {
    props: { page: 'home' },
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
