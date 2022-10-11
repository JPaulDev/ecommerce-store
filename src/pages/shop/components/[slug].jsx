import Head from 'next/head';
import ShopHeader from '../../../components/shop/ShopHeader';
import * as Styled from '../../../styles/shop';

export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: 'processors-amd' } },
      { params: { slug: 'processors-intel' } },
      { params: { slug: 'memory-ddr5' } },
      { params: { slug: 'memory-ddr4' } },
      { params: { slug: 'motherboards-amd' } },
      { params: { slug: 'motherboards-intel' } },
      { params: { slug: 'graphics-cards-nvidia' } },
      { params: { slug: 'graphics-cards-amd' } },
      { params: { slug: 'power-supplies-all' } },
      { params: { slug: 'power-supplies-wired' } },
      { params: { slug: 'power-supplies-modular' } },
      { params: { slug: 'cases-full-tower' } },
      { params: { slug: 'cases-midi-tower' } },
      { params: { slug: 'cases-itx' } },
      { params: { slug: 'solid-state-drives' } },
    ],
    fallback: false,
  };
}

export async function getStaticProps() {
  return {
    props: { products: [] },
  };
}

export default function Slug() {
  return (
    <>
      <Head>
        <title>Shop</title>
      </Head>
      <Styled.Container>
        <ShopHeader />
      </Styled.Container>
    </>
  );
}
