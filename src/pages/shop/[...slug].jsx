import Head from 'next/head';
import ShopHeader from '../../components/shop/ShopHeader';
import * as Styled from '../../styles/shop';

export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: ['components', 'processors', 'amd'] } },
      { params: { slug: ['components', 'processors', 'intel'] } },
      { params: { slug: ['components', 'memory', 'ddr5'] } },
      { params: { slug: ['components', 'memory', 'ddr4'] } },
      { params: { slug: ['components', 'motherboards', 'amd'] } },
      { params: { slug: ['components', 'motherboards', 'intel'] } },
      { params: { slug: ['components', 'graphics-cards', 'nvidia'] } },
      { params: { slug: ['components', 'graphics-cards', 'amd'] } },
      { params: { slug: ['components', 'graphics-cards'] } },
      { params: { slug: ['components', 'power-supplies', 'wired'] } },
      { params: { slug: ['components', 'power-supplies', 'modular'] } },
      { params: { slug: ['components', 'cases', 'full-tower'] } },
      { params: { slug: ['components', 'cases', 'midi-tower'] } },
      { params: { slug: ['components', 'cases', 'itx'] } },
      { params: { slug: ['components', 'storage', 'solid-state-drives'] } },
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
