import Image from 'next/future/image';
import nvidiaImage from '../../../../public/images/promo-banner/rtx-studio.webp';
import nvidiaLogo from '../../../../public/images/promo-banner/nvidia-logo.webp';
import blueDetail from '../../../../public/images/promo-banner/blue-detail.webp';
import { LinkButton, LinkChevron, ResponsiveBox } from '../../ui';
import * as Styled from './styles';

export default function PromoBanner() {
  const linkText = 'Find Out More';

  return (
    <Styled.Container background={nvidiaImage.src}>
      <Styled.Heading>RTX Studio</Styled.Heading>
      <Styled.Text>
        The best laptops and desktops for creating anywhere.
      </Styled.Text>
      <ResponsiveBox sx={{ display: { 0: 'none', 530: 'block' } }}>
        <LinkButton href="/" padding="14px 14px">
          {linkText}
        </LinkButton>
      </ResponsiveBox>
      <ResponsiveBox sx={{ display: { 0: 'block', 530: 'none' } }}>
        <LinkChevron href="/" fontSize={13} iconSize={18}>
          {linkText}
        </LinkChevron>
      </ResponsiveBox>
      <Styled.LogoWrapper>
        <Image src={nvidiaLogo} alt="" />
      </Styled.LogoWrapper>
      <Styled.Wrapper>
        <Image src={blueDetail} alt="" />
      </Styled.Wrapper>
    </Styled.Container>
  );
}
