import Head from 'next/head';
import ShopHeader from '../../../components/shop/ShopHeader';
import * as Styled from '../../../styles/shop';

export async function getStaticPaths() {
  return {
    paths: [{ params: { slug: 'placeholder' } }],
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
