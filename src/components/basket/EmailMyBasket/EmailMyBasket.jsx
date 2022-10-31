import Link from 'next/link';
import { useId, useState, memo } from 'react';
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
        <label htmlFor={`${id}-email`} hidden>
          Email
        </label>
        <Styled.Input
          id={`${id}-email`}
          placeholder="Email address"
          name="email"
          autoComplete="email"
          type="email"
          value={email}
          required
          onChange={handleChangeEmail}
        />
        <Styled.Button type="submit">Send</Styled.Button>
        <Styled.CheckboxContainer>
          <Styled.Checkbox
            id={`${id}-checkbox`}
            type="checkbox"
            name="subscribe"
            checked={isSubscribed}
            onChange={handleChangeSubscribed}
          />
          <label htmlFor={`${id}-checkbox`}>
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
