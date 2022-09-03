import useMediaQuery from '../../../hooks/useMediaQuery';
import { ReactComponent as AccountIcon } from '../../../assets/svg/account.svg';
import { ReactComponent as BasketIcon } from '../../../assets/svg/basket.svg';
import * as Styled from './styles';

export default function Links() {
  const isMatch = useMediaQuery('(min-width: 575px)');

  return (
    <Styled.Container>
      <Styled.Link href="" aria-label="Account" title="Account">
        <AccountIcon width="32px" height="30px" fill="var(--color-orange-1)" />
        {isMatch && (
          <div>
            <Styled.TopText>Account</Styled.TopText>
            <Styled.Text>Sign in | Register</Styled.Text>
          </div>
        )}
      </Styled.Link>
      <Styled.Link href="" aria-label="Basket" title="Basket">
        <BasketIcon width="34px" height="30px" fill="var(--color-orange-1)" />
        {isMatch && (
          <div>
            <Styled.TopText>Basket</Styled.TopText>
            <Styled.Text>Subtotal £0.00</Styled.Text>
          </div>
        )}
      </Styled.Link>
    </Styled.Container>
  );
}
