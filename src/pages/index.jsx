import Head from 'next/head';
import prisma from '../lib/utils/prisma-client';
import {
  Carousel,
  ProShopCards,
  PromoBanner,
  TodayOnlyBanner,
  TodayOnlyOffers,
  NewsAndProducts,
} from '../components/home';

export async function getStaticProps() {
  // Recursive queries not yet supported by Prisma.
  // https://github.com/prisma/prisma/issues/4562
  const products = await prisma.$queryRaw`
    WITH RECURSIVE cat_cte AS (
      SELECT id,
        "parentCategoryId"
      FROM "Category"
      WHERE "parentCategoryId" IS NULL
      UNION ALL
      SELECT child.id,
        child."parentCategoryId"
      FROM "Category" child,
        cat_cte parent
      WHERE child."parentCategoryId" = parent.id
    )
    SELECT *
    FROM cat_cte c
      JOIN "Product" p ON c.id = p."categoryId"
    WHERE p."isTodayOnlyOffer" = true;
  `;

  return {
    props: { backgroundImage: 'home', products },
  };
}

export default function Home({ products }) {
  return (
    <>
      <Head>
        <title>PC Connect | Components Store</title>
      </Head>
      <Carousel />
      <ProShopCards />
      <PromoBanner />
      <TodayOnlyBanner />
      <TodayOnlyOffers products={products} />
      <NewsAndProducts />
    </>
  );
}
