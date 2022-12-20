import Image from 'next/future/image';
import Link from 'next/link';
import { memo } from 'react';
import amazonPay from '../../../../public/images/basket/amazon-pay.webp';
import { BasketTotal } from '../../../features/basket';
import { Lock, PayPal } from '../../icons';
import { Price } from '../../product';
import { Heading } from '../styles';
import * as Styled from './styles';

function CheckoutPanel() {
  return (
    <Styled.Container>
      <Heading>Basket Summary</Heading>

      <Styled.TextContainer>
        <Styled.Text>Delivery to UK Mainland</Styled.Text>
        <Price fontSize={22} fontWeight={500}>
          £4.99
        </Price>
      </Styled.TextContainer>

      <Styled.TextContainer>
        <BasketTotal />
      </Styled.TextContainer>

      <Styled.InnerContainer>
        <Link href="/" passHref>
          <Styled.CheckoutLink>
            Checkout As Guest
            <Lock width={15} height={17} />
          </Styled.CheckoutLink>
        </Link>
        <Link href="/" passHref>
          <Styled.LoginLink>
            Have an account? Login and checkout now
          </Styled.LoginLink>
        </Link>
      </Styled.InnerContainer>

      <Styled.BottomContainer>
        <Styled.Text>Alternatively</Styled.Text>
        <Link href="https://www.paypal.co.uk" passHref>
          <Styled.PaypalLink
            title="Pay with PayPal"
            aria-label="Pay with PayPal"
          >
            <PayPal width={80} height={20} />
          </Styled.PaypalLink>
        </Link>
        <Styled.Text>Two easy ways to pay</Styled.Text>
        <Link href="https://www.amazon.co.uk">
          <a>
            <Image
              src={amazonPay}
              title="Pay with Amazon Pay"
              alt="Pay with Amazon Pay."
            />
          </a>
        </Link>
      </Styled.BottomContainer>
    </Styled.Container>
  );
}

export default memo(CheckoutPanel);
