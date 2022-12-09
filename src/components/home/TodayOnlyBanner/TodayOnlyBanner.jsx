import background from '../../../../public/images/today-only-banner/gaming-pc.webp';
import { LinkChevron, LinkButton, ResponsiveBox } from '../../ui';
import * as Styled from './styles';

export default function TodayOnlyBanner() {
  const linkText = 'View All Offers';

  return (
    <Styled.Container background={background.src}>
      <Styled.RedOval />
      <Styled.Heading>
        TODAY ONLY
        <Styled.InnerText>
          Fantastic offers, updated every weekday
        </Styled.InnerText>
      </Styled.Heading>
      <ResponsiveBox sx={{ display: { 0: 'none', 935: 'block' } }}>
        <LinkChevron href="/" fontSize={13} iconSize={18}>
          {linkText}
        </LinkChevron>
      </ResponsiveBox>
      <ResponsiveBox sx={{ display: { 0: 'block', 935: 'none' } }}>
        <LinkButton href="/">{linkText}</LinkButton>
      </ResponsiveBox>
    </Styled.Container>
  );
}
