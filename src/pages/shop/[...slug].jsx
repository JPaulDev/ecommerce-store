import Head from 'next/head';
import prisma from '../../lib/database/prisma-client';
import ShopHeader from '../../components/shop/ShopHeader';
import { ProductCard } from '../../features/basket';
import * as Styled from '../../styles/Shop';

export async function getStaticPaths() {
  const categories = await prisma.category.findMany();
  const paths = categories.map((category) => ({
    params: {
      slug: category.slug.split('/'),
    },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const data = await prisma.category.findUnique({
    where: {
      slug: params.slug.join('/'),
    },
    include: {
      products: true,
    },
  });

  return {
    props: { data },
  };
}

export default function Slug({ data }) {
  return (
    <>
      <Head>
        <title>{data.title}</title>
      </Head>
      <Styled.Section>
        <ShopHeader
          heading={data.heading}
          description={data.description}
          latestArrivals={data.latestArrivals}
          latestArrivalsDescription={data.latestArrivalsDescription}
        />

        <ul style={{ marginTop: '20px' }}>
          {data.products?.map((product) => (
            <ProductCard
              key={product.sku}
              variant="horizontal"
              product={product}
            />
          ))}
        </ul>
      </Styled.Section>
    </>
  );
}
