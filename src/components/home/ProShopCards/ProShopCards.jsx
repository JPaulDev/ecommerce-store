import styled from 'styled-components';
import { LinkChevron } from '../../ui';
import PRO_SHOP_CARDS from './cards-data';

export default function ProShopCards() {
  return (
    <Section>
      {PRO_SHOP_CARDS.map((item) => (
        <Card key={item.linkText} image={item.image.src}>
          {item.logo ? (
            <ProLogo logo={item.logo.src} logoPosition={item.logoPosition} />
          ) : (
            <h3>{item.heading}</h3>
          )}
          <p>{item.description}</p>
          <LinkChevron href={item.href} fontSize={14} iconSize={18}>
            {item.linkText}
          </LinkChevron>
        </Card>
      ))}
    </Section>
  );
}

const Section = styled.section`
  --spacing: 7px;

  padding: var(--spacing);
  gap: var(--spacing);
  background-color: white;
  border: 1px solid ${({ theme }) => theme.colors.stone[200]};
  display: grid;
  margin-top: 15px;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    grid-template-columns: 1fr 1fr;
  }
`;

const ProLogo = styled.div`
  background-image: url(${({ logo }) => logo});
  background-position-x: ${({ logoPosition }) => logoPosition};
  background-repeat: no-repeat;
  height: 18px;
  width: 170px;
`;

const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.neutral[100]};
  background-image: url(${({ image }) => image});
  background-position: right;
  background-repeat: no-repeat;
  min-height: 125px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  row-gap: 10px;

  > h3 {
    color: ${({ theme }) => theme.colors.sky[600]};
    font-family: 'Uni Sans Book', sans-serif;
    font-size: ${({ theme }) => theme.fontSizes[26]};
    font-weight: 400;
    line-height: 0.8;
  }

  > p {
    color: ${({ theme }) => theme.colors.stone[600]};
    font-size: ${({ theme }) => theme.fontSizes[14]};
    line-height: 1.5;
    width: 60%;
    display: none;
  }

  @media ${({ theme }) => theme.breakpoints.desktopSm} {
    > p {
      display: block;
    }
  }
`;
