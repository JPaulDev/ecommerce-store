import intel from '../../../../public/images/news-and-products/intel-article.webp';
import lovelace from '../../../../public/images/news-and-products/lovelace-article.webp';
import ryzen from '../../../../public/images/news-and-products/ryzen-article.webp';

const ARTICLES_DATA = [
  {
    title: 'NVIDIA 4000 Series Details Leaked',
    date: '29 Jun 2022',
    dateTime: '2022-06-29 13:00',
    image: lovelace,
    text: `NVIDIA's next-generation GeForce RTX 4090 "Ada" flagship graphics
    card allegedly scores over 19000 points in the 3DMark Time Spy Extreme
    synthetic benchmark, according to kopite7kimi, a reliable source with NVIDIA
    leaks. This would put its score around 66 percent above that of the current
    RTX 3090 Ti flagship.`,
    href: '/',
  },
  {
    title: 'Intel Misses Quarterly Financial Targets',
    date: '14 Jun 2022',
    dateTime: '2022-06-14 13:00',
    image: intel,
    text: `Intel Corporation today reported second-quarter 2022 financial
      results. "This quarter's results were below the standards we have set for
      the company and our shareholders. We must and will do better. The sudden
      and rapid decline in economic activity was the largest driver, but the
      shortfall also reflects our own execution issues," said Pat Gelsinger,
      Intel CEO.`,
    href: '/',
  },
  {
    title: 'Alleged Ryzen 7000 Series Benchmarks',
    date: '23 Jun 2022',
    dateTime: '2022-06-23 13:00',
    image: ryzen,
    text: `An AMD engineering sample CPU with the model number
      "100-000000593-20_Y" has appeared in a couple of graphics rendering tests,
      paired with an NVIDIA RTX A4000 GPU. The CPU appears to be a 6-core Ryzen
      7000-series chip that was fitted to a Gigabyte X670E Aorus Master
      motherboard.`,
    href: '/',
  },
];

export default ARTICLES_DATA;
