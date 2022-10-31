import Head from 'next/head';
import { useSelector } from 'react-redux';
import { selectBasket } from '../features/basket/basketSlice';
import {
  CheckoutPanel,
  EmailMyBasket,
  EmptyBasket,
  FinancePanel,
} from '../components/basket';
import { BasketItem } from '../features/basket';
import * as Styled from '../styles/Basket';

export async function getStaticProps() {
  return {
    props: { page: 'basket' },
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
        <EmptyBasket />
      ) : (
        <Styled.Container>
          <div>
            <Styled.Heading>Your Basket</Styled.Heading>
            <Styled.List>
              {basket.map((product) => (
                <BasketItem key={product.sku} product={product} />
              ))}
            </Styled.List>
            <Styled.Heading>
              Finance options available at checkout
            </Styled.Heading>
            <FinancePanel />
          </div>
          <Styled.RightContainer>
            <CheckoutPanel />
            <EmailMyBasket />
          </Styled.RightContainer>
        </Styled.Container>
      )}
    </>
  );
}
