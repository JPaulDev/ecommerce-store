import { LinkChevron } from '../../common';
import cards from './pro-shop-cards';
import * as Styled from './styles';

export default function ProShopCards() {
  return (
    <Styled.Section>
      {cards.map((item) => (
        <Styled.ProCard key={item.linkText} image={item.image.src}>
          {item.logo ? (
            <Styled.ProLogo
              logo={item.logo.src}
              logoPosition={item.logoPosition}
            />
          ) : (
            <Styled.Heading>{item.heading}</Styled.Heading>
          )}
          <Styled.Text>{item.description}</Styled.Text>
          <LinkChevron
            href={item.href}
            linkText={item.linkText}
            fontSize="var(--font-size-14)"
            iconSize={20}
          />
        </Styled.ProCard>
      ))}
    </Styled.Section>
  );
}
