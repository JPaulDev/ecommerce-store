import Head from 'next/head';
import styled from 'styled-components';
import ShopHeader from '../../components/shop/ShopHeader';
import { ProductCard } from '../../features/basket';
import prisma from '../../lib/database/prisma-client';

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
      <Section>
        <ShopHeader
          heading={data.heading}
          description={data.description}
          latestArrivals={data.latestArrivals}
          latestArrivalsDescription={data.latestArrivalsDescription}
        />
        <ul>
          {data.products.map((product) => (
            <ProductCard
              key={product.sku}
              variant="horizontal"
              product={product}
            />
          ))}
        </ul>
      </Section>
    </>
  );
}

const Section = styled.section`
  background-color: white;
  border: 1px solid ${({ theme }) => theme.colors.stone[200]};
  padding: 30px 15px;

  > ul {
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-top: 20px;
  }

  @media ${({ theme }) => theme.breakpoints.tabletSm} {
    padding: 30px;
  }
`;
