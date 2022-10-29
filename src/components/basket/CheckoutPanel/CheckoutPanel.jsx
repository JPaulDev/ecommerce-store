import Image from 'next/future/image';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import amazonPay from '../../../../public/images/basket/amazon-pay.webp';
import { selectBasketSubtotal } from '../../../features/basket/basketSlice';
import usePrice from '../../../lib/hooks/usePrice';
import { PayPal, Lock } from '../../icons';
import { Price } from '../../common';
import * as Styled from './styles';

export default function CheckoutPanel() {
  const subtotal = useSelector(selectBasketSubtotal);
  const delivery = 4.99;

  const { price } = usePrice({
    price: subtotal + delivery,
    currencyCode: 'GBP',
  });

  return (
    <div>
      <Styled.TopContainer>
        <Styled.Heading>Basket Summary</Styled.Heading>
        <Styled.Container>
          <Styled.Text>Delivery to UK Mainland</Styled.Text>
          <Price
            price="£4.99"
            fontSize="var(--font-size-20)"
            fontWeight="var(--font-weight-medium)"
          />
        </Styled.Container>
        <Styled.Container>
          <span>
            <strong>Total</strong>
            (including VAT)
          </span>
          <Price
            price={price}
            fontSize="var(--font-size-26)"
            fontWeight="var(--font-weight-medium)"
          />
        </Styled.Container>
        <Styled.Text>Finance options available at checkout</Styled.Text>
        <Styled.InnerContainer>
          <Link href="/" passHref>
            <Styled.CheckoutLink>
              Checkout As Guest
              <Lock width={15} height={17} />
            </Styled.CheckoutLink>
          </Link>
          <Link href="/account" passHref>
            <Styled.LoginLink>
              Have an account? Login and checkout now
            </Styled.LoginLink>
          </Link>
        </Styled.InnerContainer>
      </Styled.TopContainer>
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
        <Link href="https://www.amazon.co.uk" passHref>
          <a>
            <Image
              src={amazonPay}
              title="Pay with Amazon Pay"
              alt="Pay with Amazon Pay."
            />
          </a>
        </Link>
      </Styled.BottomContainer>
    </div>
  );
}
