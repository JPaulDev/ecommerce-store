import useMediaQuery from '../../../hooks/useMediaQuery';
import LinkWithChevron from '../../../components/LinkWithChevron';
import cards from './pro-shop-cards';
import * as Styled from './styles';

export default function ProShopCards() {
  const isMatch = useMediaQuery('(min-width: 990px)');

  return (
    <Styled.Section>
      {cards.map((item) => (
        <Styled.ProCard key={item.linkText} image={item.image}>
          {item.logo ? (
            <Styled.ProLogo logo={item.logo} logoPosition={item.logoPosition} />
          ) : (
            <Styled.Heading>{item.heading}</Styled.Heading>
          )}
          {isMatch && <Styled.Text>{item.description}</Styled.Text>}
          <LinkWithChevron
            url={item.url}
            text={item.linkText}
            fontSize="0.9rem"
            iconSize="21px"
            marginTop="10px"
          />
        </Styled.ProCard>
      ))}
    </Styled.Section>
  );
}
