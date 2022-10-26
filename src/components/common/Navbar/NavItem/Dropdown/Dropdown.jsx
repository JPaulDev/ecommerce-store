import Link from 'next/link';
import Image from 'next/future/image';
import { Fragment } from 'react';
import componentsAd1 from '../../../../../../public/images/dropdown-ads/components-ad1.webp';
import componentsAd2 from '../../../../../../public/images/dropdown-ads/components-ad2.webp';
import componentsAd3 from '../../../../../../public/images/dropdown-ads/components-ad3.webp';
import accessoriesAd1 from '../../../../../../public/images/dropdown-ads/accessories-ad1.webp';
import accessoriesAd2 from '../../../../../../public/images/dropdown-ads/accessories-ad2.webp';
import * as Styled from './styles';

const dropdowns = {
  components: [
    [
      {
        category: 'Processors',
        links: [
          { text: 'AMD', href: '/shop/components/processors/amd' },
          { text: 'Intel', href: '/shop/components/processors/intel' },
        ],
      },
      {
        category: 'Memory',
        links: [
          { text: 'DDR5', href: '/shop/components/memory/ddr5' },
          { text: 'DDR4', href: '/shop/components/memory/ddr4' },
        ],
      },
      {
        category: 'Motherboards',
        links: [
          {
            text: 'AMD Motherboards',
            href: '/shop/components/motherboards/amd',
          },
          {
            text: 'Intel Motherboards',
            href: '/shop/components/motherboards/intel',
          },
        ],
      },
    ],
    [
      {
        category: 'Graphics Cards',
        links: [
          {
            text: 'NVIDIA Graphics Cards',
            href: '/shop/components/graphics-cards/nvidia',
          },
          {
            text: 'AMD Graphics Cards',
            href: '/shop/components/graphics-cards/amd',
          },
        ],
      },
      {
        category: 'Power Supplies',
        links: [
          {
            text: 'Fully Wired',
            href: '/shop/components/power-supplies/wired',
          },
          {
            text: 'Fully Modular',
            href: '/shop/components/power-supplies/modular',
          },
        ],
      },
    ],
    [
      {
        category: 'Cases',
        links: [
          { text: 'Full Tower', href: '/shop/components/cases/full-tower' },
          { text: 'Midi Tower', href: '/shop/components/cases/midi-tower' },
          { text: 'ITX', href: '/shop/components/cases/itx' },
        ],
      },
      {
        category: 'Storage',
        links: [
          {
            text: 'Solid State Drives',
            href: '/shop/components/storage/solid-state-drives',
          },
        ],
      },
    ],
  ],
  accessories: [
    [
      {
        category: 'Keyboards',
        links: [
          { text: 'Wired Keyboards', href: '' },
          { text: 'Wireless Keyboards', href: '' },
          { text: 'Gaming Keyboards', href: '' },
        ],
      },
      {
        category: 'Mice',
        links: [
          { text: 'Wired Mice', href: '' },
          { text: 'Wireless Mice', href: '' },
        ],
      },
    ],
    [
      {
        category: 'Audio',
        links: [
          { text: 'Microphones', href: '' },
          { text: 'Speakers', href: '' },
        ],
      },
    ],
    [
      {
        category: 'Monitors',
        links: [
          { text: 'Gaming Monitors', href: '' },
          { text: 'Ultrawide Monitors', href: '' },
          { text: 'OLED Monitors', href: '' },
        ],
      },
    ],
  ],
};

const adverts = {
  components: [componentsAd1, componentsAd2, componentsAd3],
  accessories: [accessoriesAd1, accessoriesAd2],
};

export default function Dropdown({ menu = '' }) {
  const openMenu = menu.toLowerCase().trim();

  return (
    <Styled.Container data-testid="dropdown-menu" id={menu}>
      {dropdowns[openMenu]?.map((column, index) => (
        <Styled.ColumnContainer key={index}>
          {column.map((item) => (
            <Fragment key={item.category}>
              <Styled.Heading>{item.category}</Styled.Heading>
              <Styled.List>
                {item.links.map((link) => (
                  <li key={link.text}>
                    <Link href={link.href} passHref>
                      <Styled.Link>{link.text}</Styled.Link>
                    </Link>
                  </li>
                ))}
              </Styled.List>
            </Fragment>
          ))}
        </Styled.ColumnContainer>
      ))}
      <Styled.AdvertsContainer>
        {adverts[openMenu]?.map((image, index) => (
          <Image key={index} src={image} alt="" />
        ))}
      </Styled.AdvertsContainer>
    </Styled.Container>
  );
}
