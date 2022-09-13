import logo from '../../../assets/images/footer/pc-logo.webp';
import { ReactComponent as Twitter } from '../../../assets/svg/twitter.svg';
import { ReactComponent as Facebook } from '../../../assets/svg/facebook.svg';
import { ReactComponent as Reddit } from '../../../assets/svg/reddit.svg';
import { ReactComponent as Youtube } from '../../../assets/svg/youtube.svg';
import { ReactComponent as Instagram } from '../../../assets/svg/instagram.svg';
import MaterialSymbol from '../../MaterialSymbol';
import * as Styled from './styles';

export default function InfoBanner() {
  return (
    <Styled.Container>
      <img src={logo} width={65} height={72} alt="" />
      <Styled.Text>
        PC Connect International Ltd, Unit 5, Lower Milehouse Ln,
        Newcastle-under-Lyme, Newcastle ST5 9EN
      </Styled.Text>
      <Styled.InnerContainer>
        <Styled.LinkContainer>
          <Styled.Link href="">
            <MaterialSymbol iconSize="26px">directions</MaterialSymbol>
            How To Find Us
          </Styled.Link>
        </Styled.LinkContainer>
        <Styled.LinkContainer>
          <Styled.Link href="">
            <MaterialSymbol iconSize="26px">warehouse</MaterialSymbol>
            Opening Times
          </Styled.Link>
        </Styled.LinkContainer>
        <Styled.LinkContainer>
          Follow Us
          <Styled.Link href="https://www.twitter.com">
            <Twitter
              title="Twitter"
              aria-label="Twitter"
              width={20}
              height={20}
              fill="currentColor"
            />
          </Styled.Link>
          <Styled.Link href="https://www.facebook.com">
            <Facebook
              title="Facebook"
              aria-label="Facebook"
              width={12}
              height={20}
              fill="currentColor"
            />
          </Styled.Link>
          <Styled.Link href="https://www.instagram.com">
            <Instagram
              title="Instagram"
              aria-label="Instagram"
              width={20}
              height={23}
              fill="currentColor"
            />
          </Styled.Link>
          <Styled.Link href="https://www.reddit.com">
            <Reddit
              title="Reddit"
              aria-label="Reddit"
              width={23}
              height={23}
              fill="currentColor"
            />
          </Styled.Link>
          <Styled.Link href="https://www.youtube.com">
            <Youtube
              title="YouTube"
              aria-label="YouTube"
              width={25}
              height={22}
              fill="currentColor"
            />
          </Styled.Link>
        </Styled.LinkContainer>
      </Styled.InnerContainer>
    </Styled.Container>
  );
}
