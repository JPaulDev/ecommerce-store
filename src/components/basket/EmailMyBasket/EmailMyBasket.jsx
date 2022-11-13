import Link from 'next/link';
import { useId, useState, memo } from 'react';
import { InputWithLabel } from '../../ui';
import * as Styled from './styles';

function EmailMyBasket() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const id = useId();

  const handleChangeEmail = (e) => setEmail(e.target.value);

  const handleChangeSubscribed = (e) => setIsSubscribed(e.target.checked);

  return (
    <Styled.Container>
      <Styled.Heading>Email my basket</Styled.Heading>
      <form action="https://pc-connect.co.uk/subscribe" method="post">
        <InputWithLabel
          label="Email:"
          styles={Styled.inputStyles}
          name="email"
          type="email"
          placeholder="Email"
          aria-required
          required
          onChange={handleChangeEmail}
          value={email}
        />
        <Styled.Button type="submit">Send</Styled.Button>
        <Styled.CheckboxContainer>
          <Styled.Checkbox
            id={id}
            type="checkbox"
            name="subscribe"
            checked={isSubscribed}
            onChange={handleChangeSubscribed}
          />
          <label htmlFor={id}>
            Also send me the latest offers and tech info, you can unsubscribe at
            any time.
          </label>
        </Styled.CheckboxContainer>
        Read our
        <Link href="/" passHref>
          <Styled.Link>privacy policy</Styled.Link>
        </Link>
      </form>
    </Styled.Container>
  );
}

export default memo(EmailMyBasket);
