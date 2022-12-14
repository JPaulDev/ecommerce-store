import {
  AmazonPay,
  AmericanExpress,
  Bitcoin,
  Electron,
  Maestro,
  Mastercard,
  PayPal,
  Visa,
} from '../../icons';

const PAYMENT_LOGOS = [
  {
    title: 'Pay with Visa',
    icon: <Visa width={48} height={48} aria-label="Visa" />,
  },
  {
    title: 'Pay with Mastercard',
    icon: <Mastercard width={53} height={53} aria-label="Mastercard" />,
  },
  {
    title: 'Pay with Visa Electron',
    icon: <Electron width={48} height={48} aria-label="Visa Electron" />,
  },
  {
    title: 'Pay with Amazon Pay',
    icon: <AmazonPay width={54} height={18} aria-label="Amazon Pay" />,
  },
  {
    title: 'Pay with Maestro',
    icon: <Maestro width={47} height={47} aria-label="Maestro" />,
  },
  {
    title: 'Pay with PayPal',
    icon: <PayPal width={54} height={13} aria-label="PayPal" />,
  },
  {
    title: 'Pay with American Express',
    icon: (
      <AmericanExpress width={50} height={18} aria-label="American Express" />
    ),
  },
  {
    title: 'Pay with Bitcoin',
    icon: <Bitcoin width={50} height={10} aria-label="Bitcoin" />,
  },
];

export default PAYMENT_LOGOS;
