import Link from 'next/link';
import Image from 'next/future/image';
import logo from '../../../../../public/images/footer/pc-logo.webp';
import Twitter from '../../../icons/Twitter';
import Facebook from '../../../icons/Facebook';
import Reddit from '../../../icons/Reddit';
import Youtube from '../../../icons/Youtube';
import Instagram from '../../../icons/Instagram';
import Directions from '../../../icons/Directions';
import Warehouse from '../../../icons/Warehouse';
import * as Styled from './styles';

export default function InfoBanner() {
  return (
    <Styled.Container>
      <Image src={logo} alt="" />
      <Styled.Text>
        PC Connect International Ltd, Unit 5, Lower Milehouse Ln,
        Newcastle-under-Lyme, Newcastle ST5 9EN
      </Styled.Text>
      <Styled.InnerContainer>
        <Styled.LinkContainer>
          <Link href="/about" passHref>
            <Styled.Link>
              <Directions width={25} height={25} />
              How To Find Us
            </Styled.Link>
          </Link>
        </Styled.LinkContainer>
        <Styled.LinkContainer>
          <Link href="/about" passHref>
            <Styled.Link>
              <Warehouse width={25} height={20} />
              Opening Times
            </Styled.Link>
          </Link>
        </Styled.LinkContainer>
        <Styled.LinkContainer>
          Follow Us
          <Styled.Link
            href="https://www.twitter.com"
            title="Twitter"
            aria-label="Twitter"
          >
            <Twitter width={20} height={20} />
          </Styled.Link>
          <Styled.Link
            href="https://www.facebook.com"
            title="Facebook"
            aria-label="Facebook"
          >
            <Facebook width={12} height={19} />
          </Styled.Link>
          <Styled.Link
            href="https://www.instagram.com"
            title="Instagram"
            aria-label="Instagram"
          >
            <Instagram width={20} height={23} />
          </Styled.Link>
          <Styled.Link
            href="https://www.reddit.com"
            title="Reddit"
            aria-label="Reddit"
          >
            <Reddit width={23} height={23} />
          </Styled.Link>
          <Styled.Link
            href="https://www.youtube.com"
            title="YouTube"
            aria-label="YouTube"
          >
            <Youtube width={25} height={22} />
          </Styled.Link>
        </Styled.LinkContainer>
      </Styled.InnerContainer>
    </Styled.Container>
  );
}
