import { Fragment } from 'react';
import useMediaQuery from '../../../../hooks/useMediaQuery';
import componentsAd1 from '../../../../assets/images/dropdown-ads/components-ad1.webp';
import componentsAd2 from '../../../../assets/images/dropdown-ads/components-ad2.webp';
import componentsAd3 from '../../../../assets/images/dropdown-ads/components-ad3.webp';
import accessoriesAd1 from '../../../../assets/images/dropdown-ads/accessories-ad1.webp';
import accessoriesAd2 from '../../../../assets/images/dropdown-ads/accessories-ad2.webp';
import * as Styled from './styles';

const dropdowns = {
  components: [
    [
      {
        category: 'Processors',
        links: [
          { text: 'AMD', url: '' },
          { text: 'Intel', url: '' },
        ],
      },
      {
        category: 'Memory',
        links: [
          { text: 'DDR5', url: '' },
          { text: 'DDR4', url: '' },
          { text: 'DDR3', url: '' },
        ],
      },
      {
        category: 'Motherboards',
        links: [
          { text: 'AMD Motherboards', url: '' },
          { text: 'Intel Motherboards', url: '' },
        ],
      },
    ],
    [
      {
        category: 'Graphics Cards',
        links: [
          { text: 'NVIDIA Graphics Cards', url: '' },
          { text: 'AMD Graphics Cards', url: '' },
        ],
      },
      {
        category: 'Power Supplies',
        links: [
          { text: 'All PSUs', url: '' },
          { text: 'Fully Wired', url: '' },
          { text: 'Fully Modular', url: '' },
        ],
      },
    ],
    [
      {
        category: 'Cases',
        links: [
          { text: 'Full Tower', url: '' },
          { text: 'Midi Tower', url: '' },
          { text: 'ITX', url: '' },
        ],
      },
      {
        category: 'Storage',
        links: [{ text: 'Solid State Drives', url: '' }],
      },
    ],
  ],
  accessories: [
    [
      {
        category: 'Keyboards',
        links: [
          { text: 'Wired Keyboards', url: '' },
          { text: 'Wireless Keyboards', url: '' },
          { text: 'Gaming Keyboards', url: '' },
        ],
      },
      {
        category: 'Mice',
        links: [
          { text: 'Wired Mice', url: '' },
          { text: 'Wireless Mice', url: '' },
        ],
      },
    ],
    [
      {
        category: 'Audio',
        links: [
          { text: 'Microphones', url: '' },
          { text: 'Speakers', url: '' },
        ],
      },
    ],
    [
      {
        category: 'Monitors',
        links: [
          { text: 'Gaming Monitors', url: '' },
          { text: 'Ultrawide Monitors', url: '' },
          { text: 'OLED Monitors', url: '' },
        ],
      },
    ],
  ],
};

const adverts = {
  components: [componentsAd1, componentsAd2, componentsAd3],
  accessories: [accessoriesAd1, accessoriesAd2],
};

export default function Dropdown({ menu }) {
  const isMatch = useMediaQuery('(min-width: 925px)');
  const openMenu = menu.toLowerCase().trim();
  const { [openMenu]: dropdown } = dropdowns;

  return (
    <Styled.Container data-testid="dropdown-menu">
      {dropdown.map((column, index) => (
        <Styled.ColumnContainer key={index}>
          {column.map((item) => (
            <Fragment key={item.category}>
              <Styled.Heading>{item.category}</Styled.Heading>
              <Styled.List>
                {item.links.map((link) => (
                  <Styled.ListItem key={link.text}>
                    <Styled.Link href={link.url}>{link.text}</Styled.Link>
                  </Styled.ListItem>
                ))}
              </Styled.List>
            </Fragment>
          ))}
        </Styled.ColumnContainer>
      ))}
      {isMatch && (
        <Styled.AdvertsContainer>
          {adverts[openMenu].map((image, index) => (
            <Styled.Image key={index} src={image} alt="" />
          ))}
        </Styled.AdvertsContainer>
      )}
    </Styled.Container>
  );
}
