import Image from 'next/future/image';
import nvidiaImage from '../../../../public/images/promo-banner/rtx-studio.webp';
import nvidiaLogo from '../../../../public/images/promo-banner/nvidia-logo.webp';
import blueDetail from '../../../../public/images/promo-banner/blue-detail.webp';
import useMediaQuery from '../../../hooks/useMediaQuery';
import { LinkButton, LinkChevron } from '../../common';
import * as Styled from './styles';

export default function PromoBanner() {
  const isMatch = useMediaQuery('(min-width: 530px)');
  const linkText = 'Find Out More';

  return (
    <Styled.Container background={nvidiaImage.src}>
      <Styled.Title>RTX Studio</Styled.Title>
      <Styled.Text>
        The best laptops and desktops for creating anywhere.
      </Styled.Text>
      {isMatch ? (
        <LinkButton href="/" linkText={linkText} padding="12px 14px" />
      ) : (
        <LinkChevron
          href="/"
          linkText={linkText}
          fontSize="0.8rem"
          iconSize={18}
        />
      )}
      <Styled.LogoWrapper>
        <Image src={nvidiaLogo} alt="" />
      </Styled.LogoWrapper>
      <Styled.Wrapper>
        <Image src={blueDetail} alt="" />
      </Styled.Wrapper>
    </Styled.Container>
  );
}
