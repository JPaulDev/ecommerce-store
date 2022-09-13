import useMediaQuery from '../../../hooks/useMediaQuery';
import { ReactComponent as Mastercard } from '../../../assets/svg/mastercard.svg';
import { ReactComponent as Visa } from '../../../assets/svg/visa.svg';
import { ReactComponent as Electron } from '../../../assets/svg/electron.svg';
import { ReactComponent as AmazonPay } from '../../../assets/svg/amazon-pay.svg';
import { ReactComponent as Maestro } from '../../../assets/svg/maestro.svg';
import { ReactComponent as Paypal } from '../../../assets/svg/paypal.svg';
import { ReactComponent as AmericanExpress } from '../../../assets/svg/american-express.svg';
import { ReactComponent as Bitcoin } from '../../../assets/svg/bitcoin.svg';
import { Heading } from '../styles';
import * as Styled from './styles';

const logos = [
  <Visa width={48} title="Pay with Visa" aria-label="Visa" />,
  <Mastercard width={53} title="Pay with Mastercard" aria-label="Mastercard" />,
  <Electron
    width={48}
    title="Pay with Visa Electron"
    aria-label="Visa Electron"
  />,
  <AmazonPay width={54} title="Pay with Amazon Pay" aria-label="Amazon Pay" />,
  <Maestro width={47} title="Pay with Maestro" aria-label="Maestro" />,
  <Paypal width={54} title="Pay with PayPal" aria-label="PayPal" />,
  <AmericanExpress
    width={50}
    title="Pay with American Express"
    aria-label="American Express"
  />,
  <Bitcoin width={50} title="Pay with Bitcoin" aria-label="Bitcoin" />,
];

export default function Payments() {
  const isMatch = useMediaQuery('(min-width: 1050px)');

  return (
    <Styled.Container>
      {isMatch && <Heading>Secure Payments</Heading>}
      <Styled.List>
        {logos.map((Logo, index) => (
          <Styled.ListItem key={index}>{Logo}</Styled.ListItem>
        ))}
      </Styled.List>
    </Styled.Container>
  );
}
