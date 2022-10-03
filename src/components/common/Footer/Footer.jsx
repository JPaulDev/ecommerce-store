import Links from './Links';
import Delivery from './Delivery';
import Payments from './Payments';
import ContactBanner from './ContactBanner';
import InfoBanner from './InfoBanner';
import * as Styled from './styles';

const links = [
  {
    heading: 'Information',
    links: [
      {
        text: 'COVID-19',
        href: '',
      },
      {
        text: 'About Us',
        href: '',
      },
      {
        text: 'Contact',
        href: '',
      },
      {
        text: 'Affiliate Program',
        href: '',
      },
      {
        text: 'Careers',
        href: '',
      },
    ],
  },
  {
    heading: 'My Account',
    links: [
      {
        text: 'Login',
        href: '',
      },
      {
        text: 'Create Account',
        href: '',
      },
      {
        text: 'Account Overview',
        href: '',
      },
      {
        text: 'Order History',
        href: '',
      },
    ],
  },
  {
    heading: 'Support',
    links: [
      {
        text: 'Help Center',
        href: '',
      },
      {
        text: 'Customer Reviews',
        href: '',
      },
      {
        text: 'Returns',
        href: '',
      },
      {
        text: 'Sales',
        href: '',
      },
      {
        text: 'Technical Support',
        href: '',
      },
    ],
  },
];

export default function Footer() {
  return (
    <Styled.Footer>
      <Styled.Container>
        <Styled.LinksContainer>
          {links.map((item) => (
            <Links key={item.heading} item={item} />
          ))}
        </Styled.LinksContainer>
        <Delivery />
        <Payments />
      </Styled.Container>
      <ContactBanner />
      <InfoBanner />
    </Styled.Footer>
  );
}
