import useMediaQuery from '../../../hooks/useMediaQuery';
import background from '../../../../public/images/today-only-banner/gaming-pc.webp';
import LinkChevron from '../../common/LinkChevron';
import LinkButton from '../../common/LinkButton';
import * as Styled from './styles';

export default function TodayOnlyBanner() {
  const isMatch = useMediaQuery('(min-width: 935px)');
  const linkText = 'View All Offers';

  return (
    <Styled.Container background={background.src}>
      <Styled.RedOval />
      <Styled.LeftHeading>TODAY ONLY</Styled.LeftHeading>
      <Styled.RightHeading>
        Fantastic offers, updated every weekday
      </Styled.RightHeading>
      {isMatch ? (
        <LinkChevron
          href="/"
          linkText={linkText}
          fontSize="0.8rem"
          iconSize={18}
        />
      ) : (
        <LinkButton href="/" linkText={linkText} padding="12px 25px" />
      )}
    </Styled.Container>
  );
}
