import { Basket } from '../../icons';
import { LinkButton } from '../../ui';
import * as Styled from './styles';

export default function EmptyBasket() {
  return (
    <Styled.Section>
      <Basket width={65} height={57} fill="var(--color-orange-1)" />
      <Styled.Heading>Your Basket</Styled.Heading>
      <p>Your basket is empty, please add some products.</p>
      <LinkButton href="/">
        Continue Shopping
      </LinkButton>
    </Styled.Section>
  );
}
