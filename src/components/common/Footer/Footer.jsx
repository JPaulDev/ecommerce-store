import Image from 'next/future/image';
import Link from 'next/link';
import logo from '../../../../public/images/footer/pc-logo.webp';
import {
  Directions,
  Facebook,
  Headset,
  Instagram,
  MobilePhone,
  Reddit,
  Twitter,
  Warehouse,
  Youtube,
} from '../../icons';
import { ResponsiveBox } from '../../ui';
import Delivery from './Delivery';
import Links from './Links';
import LINKS_DATA from './links-data';
import PAYMENT_LOGOS from './payment-logos';
import * as Styled from './styles';

export default function Footer() {
  return (
    <Styled.Footer>
      <Styled.Container>
        <div className="site-links">
          {LINKS_DATA.map((item) => (
            <Links key={item.id} item={item} />
          ))}
        </div>
        <Delivery />

        <Styled.PaymentsContainer>
          <ResponsiveBox
            sx={{ display: { mobileXs: 'none', desktopSm: 'block' } }}
          >
            <Styled.Title>Secure Payments</Styled.Title>
          </ResponsiveBox>
          <ul>
            {PAYMENT_LOGOS.map((item) => (
              <li key={item.title} title={item.title}>
                {item.icon}
              </li>
            ))}
          </ul>
        </Styled.PaymentsContainer>
      </Styled.Container>

      <Styled.ContactBanner>
        <Link href="/contact">
          <a>
            <MobilePhone width={20} height={27} />
            01782-444455
          </a>
        </Link>
        <Link href="/contact">
          <a>
            <Headset width={25} height={25} />
            Live Chat
          </a>
        </Link>
      </Styled.ContactBanner>

      <Styled.InfoBanner>
        <Image src={logo} alt="" />
        <p>
          PC Connect International Ltd, Unit 5, Lower Milehouse Ln,
          Newcastle-under-Lyme, Newcastle ST5 9EN
        </p>
        <Styled.InnerContainer>
          <Styled.InfoBannerLinks>
            <Link href="/about">
              <a>
                <Directions width={25} height={25} />
                How To Find Us
              </a>
            </Link>
          </Styled.InfoBannerLinks>
          <Styled.InfoBannerLinks>
            <Link href="/about">
              <a>
                <Warehouse width={25} height={20} />
                Opening Times
              </a>
            </Link>
          </Styled.InfoBannerLinks>
          <Styled.InfoBannerLinks>
            Follow Us
            <a
              href="https://www.twitter.com"
              title="Twitter"
              aria-label="Twitter"
            >
              <Twitter width={20} height={20} />
            </a>
            <a
              href="https://www.facebook.com"
              title="Facebook"
              aria-label="Facebook"
            >
              <Facebook width={12} height={19} />
            </a>
            <a
              href="https://www.instagram.com"
              title="Instagram"
              aria-label="Instagram"
            >
              <Instagram width={20} height={23} />
            </a>
            <a href="https://www.reddit.com" title="Reddit" aria-label="Reddit">
              <Reddit width={23} height={23} />
            </a>
            <a
              href="https://www.youtube.com"
              title="YouTube"
              aria-label="YouTube"
            >
              <Youtube width={25} height={22} />
            </a>
          </Styled.InfoBannerLinks>
        </Styled.InnerContainer>
      </Styled.InfoBanner>
    </Styled.Footer>
  );
}
