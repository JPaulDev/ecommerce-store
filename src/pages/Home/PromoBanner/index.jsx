import useMediaQuery from '../../../hooks/useMediaQuery';
import nvidiaImage from '../../../assets/images/promo-banner/rtx-studio.webp';
import nvidiaLogo from '../../../assets/images/promo-banner/nvidia-logo.webp';
import blueDetail from '../../../assets/images/promo-banner/blue-detail.webp';
import LinkButtonGrey from '../../../components/LinkButtonGrey';
import LinkWithChevron from '../../../components/LinkWithChevron';
import * as Styled from './styles';

export default function AdvertBanner() {
  const isMatch530 = useMediaQuery('(min-width: 530px)');
  const isMatch850 = useMediaQuery('(min-width: 850px)');
  const linkText = 'Find Out More';

  return (
    <Styled.Container background={nvidiaImage}>
      <Styled.Title>RTX Studio</Styled.Title>
      <Styled.Text>
        The best laptops and desktops for creating anywhere.
      </Styled.Text>
      {isMatch530 ? (
        <LinkButtonGrey href="" padding="12px 14px">
          {linkText}
        </LinkButtonGrey>
      ) : (
        <LinkWithChevron
          url=""
          text={linkText}
          fontSize="0.75rem"
          iconSize="18px"
        />
      )}
      {isMatch850 && <Styled.Logo src={nvidiaLogo} alt="" />}
      <Styled.BlueDetail src={blueDetail} alt="" />
    </Styled.Container>
  );
}
