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
        url: '',
      },
      {
        text: 'About Us',
        url: '',
      },
      {
        text: 'Contact',
        url: '',
      },
      {
        text: 'Affiliate Program',
        url: '',
      },
      {
        text: 'Careers',
        url: '',
      },
    ],
  },
  {
    heading: 'My Account',
    links: [
      {
        text: 'Login',
        url: '',
      },
      {
        text: 'Create Account',
        url: '',
      },
      {
        text: 'Account Overview',
        url: '',
      },
      {
        text: 'Order History',
        url: '',
      },
    ],
  },
  {
    heading: 'Support',
    links: [
      {
        text: 'Help Center',
        url: '',
      },
      {
        text: 'Customer Reviews',
        url: '',
      },
      {
        text: 'Returns',
        url: '',
      },
      {
        text: 'Sales',
        url: '',
      },
      {
        text: 'Technical Support',
        url: '',
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
