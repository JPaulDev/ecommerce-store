import Image from 'next/future/image';
import Head from 'next/head';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import finance from '../../public/images/basket/finance.webp';
import paypal from '../../public/images/basket/paypal-credit.webp';
import { CheckoutPanel, EmailMyBasket } from '../components/basket';
import { headingMixin } from '../components/basket/styles';
import { Basket as BasketIcon, Info } from '../components/icons';
import { LinkButton } from '../components/ui';
import { BasketItem } from '../features/basket';
import { selectBasket } from '../features/basket/basketSlice';

export async function getStaticProps() {
  return {
    props: { backgroundImage: 'basket' },
  };
}

export default function Basket() {
  const basket = useSelector(selectBasket);
  const isEmpty = basket.length <= 0;

  return (
    <>
      <Head>
        <title>Your Basket | PC Connect</title>
      </Head>
      {isEmpty ? (
        <EmptyBasket>
          <BasketIcon width={65} height={57} />
          <h1>Your Basket</h1>
          <p>Your basket is empty, please add some products.</p>
          <LinkButton href="/" color="black">
            Continue Shopping
          </LinkButton>
        </EmptyBasket>
      ) : (
        <Section>
          <div>
            <Heading as="h1">Your Basket</Heading>
            <ul>
              {basket.map((product) => (
                <BasketItem key={product.sku} product={product} />
              ))}
            </ul>
            <Heading>Finance options available at checkout</Heading>
            <Container>
              <Image src={paypal} alt="PayPal credit." />
              <div>
                <p>
                  Spread the cost for up to 48 months (9.9% p.a fixed) or 0% for
                  4 months.
                </p>
                <Link href="/">
                  <a>
                    <Info width={20} height={20} />
                    More Info About PayPal Credit
                  </a>
                </Link>
              </div>
            </Container>
            <Container>
              <Image src={finance} alt="Pay on finance." />
              <div>
                <p>
                  Finance Classic Credit 48 Months 15.9%, Pay a deposit followed
                  by 48 monthly payments.
                </p>
                <Link href="/">
                  <a>
                    <Info width={20} height={20} />
                    More Info About Finance Classic Credit
                  </a>
                </Link>
              </div>
            </Container>
          </div>

          <StickyContainer>
            <CheckoutPanel />
            <EmailMyBasket />
          </StickyContainer>
        </Section>
      )}
    </>
  );
}

const EmptyBasket = styled.section`
  align-items: center;
  background-color: white;
  border: 1px solid ${({ theme }) => theme.colors.stone[200]};
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 600px;
  padding: 30px;
  text-align: center;

  > svg {
    fill: ${({ theme }) => theme.colors.orange[500]};
  }

  > h1 {
    font-family: 'Uni Sans', sans-serif;
    font-size: ${({ theme }) => theme.fontSizes[32]};
    font-weight: 600;
    margin: 10px 0;
  }

  > p {
    margin-bottom: 15px;
  }
`;

const Section = styled.section`
  background-color: white;
  border: 1px solid ${({ theme }) => theme.colors.stone[200]};
  padding: 25px 15px;
  display: grid;
  gap: 35px;

  ul {
    list-style: none;
    margin-bottom: 25px;
  }

  @media ${({ theme }) => theme.breakpoints.tabletSm} {
    padding: 25px 40px;
  }

  @media ${({ theme }) => theme.breakpoints.desktopXs} {
    grid-template-columns: 1fr 360px;
  }
`;

export const Heading = styled.h2`
  ${headingMixin}
  background-color: ${({ theme }) => theme.colors.neutral[100]};
  padding: 10px 25px;
`;

export const Container = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.stone[300]};
  column-gap: 25px;
  padding: 30px 10px;
  align-items: center;
  display: flex;

  > img {
    height: auto;
    width: 100px;
  }

  p {
    font-family: 'Uni Sans', sans-serif;
    font-weight: 600;
    line-height: 1.4;
  }

  a {
    color: ${({ theme }) => theme.colors.sky[700]};
    column-gap: 5px;
    font-size: ${({ theme }) => theme.fontSizes[12]};
    font-weight: 600;
    margin-top: 10px;
    text-decoration: none;
    text-transform: uppercase;
    align-items: center;
    display: flex;
  }

  @media ${({ theme }) => theme.breakpoints.tabletSm} {
    > img {
      width: 120px;
    }
  }
`;

const StickyContainer = styled.div`
  align-self: start;
  position: sticky;
  top: 20px;
`;
