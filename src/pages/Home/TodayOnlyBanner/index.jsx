import useMediaQuery from '../../../hooks/useMediaQuery';
import backgroundImage from '../../../assets/images/today-only-banner/gaming-pc.webp';
import LinkWithChevron from '../../../components/LinkWithChevron';
import LinkButtonGrey from '../../../components/LinkButtonGrey';
import * as Styled from './styles';

export default function TodayOnlyBanner() {
  const isMatch = useMediaQuery('(min-width: 935px)');
  const linkText = 'View All Offers';

  return (
    <Styled.Container background={backgroundImage}>
      <Styled.RedOval />
      <Styled.LeftHeader>TODAY ONLY</Styled.LeftHeader>
      <Styled.RightHeader>
        Fantastic offers, updated every weekday
      </Styled.RightHeader>
      {isMatch ? (
        <LinkWithChevron url="" text={linkText} fontSize="0.8rem" />
      ) : (
        <LinkButtonGrey href="" padding="12px 25px">
          {linkText}
        </LinkButtonGrey>
      )}
    </Styled.Container>
  );
}
