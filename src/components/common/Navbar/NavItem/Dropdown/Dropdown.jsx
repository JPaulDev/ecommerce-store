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
          { text: 'AMD', href: '' },
          { text: 'Intel', href: '' },
        ],
      },
      {
        category: 'Memory',
        links: [
          { text: 'DDR5', href: '' },
          { text: 'DDR4', href: '' },
        ],
      },
      {
        category: 'Motherboards',
        links: [
          { text: 'AMD Motherboards', href: '' },
          { text: 'Intel Motherboards', href: '' },
        ],
      },
    ],
    [
      {
        category: 'Graphics Cards',
        links: [
          { text: 'NVIDIA Graphics Cards', href: '' },
          { text: 'AMD Graphics Cards', href: '' },
        ],
      },
      {
        category: 'Power Supplies',
        links: [
          { text: 'All PSUs', href: '' },
          { text: 'Fully Wired', href: '' },
          { text: 'Fully Modular', href: '' },
        ],
      },
    ],
    [
      {
        category: 'Cases',
        links: [
          { text: 'Full Tower', href: '' },
          { text: 'Midi Tower', href: '' },
          { text: 'ITX', href: '' },
        ],
      },
      {
        category: 'Storage',
        links: [{ text: 'Solid State Drives', href: '' }],
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
                    <Styled.Link href={link.href}>{link.text}</Styled.Link>
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
