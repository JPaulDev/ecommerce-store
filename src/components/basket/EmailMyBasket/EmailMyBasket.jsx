import Link from 'next/link';
import { memo, useId, useState } from 'react';
import { LabelledInput } from '../../ui';
import { Heading } from '../styles';
import * as Styled from './styles';

function EmailMyBasket() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const id = useId();

  const handleChangeEmail = (e) => setEmail(e.target.value);
  const handleChangeSubscribed = (e) => setIsSubscribed(e.target.checked);

  return (
    <Styled.Container>
      <Heading>Email my basket</Heading>
      <form action="https://pc-connect.co.uk/subscribe" method="post">
        <LabelledInput
          label="Email:"
          hideLabel
          inputStyles={Styled.inputStyles}
          name="email"
          type="email"
          placeholder="Email"
          aria-required
          required
          onChange={handleChangeEmail}
          value={email}
        />
        <button type="submit">Send</button>
        <Styled.CheckboxContainer>
          <input
            id={id}
            type="checkbox"
            name="subscribe"
            checked={isSubscribed}
            onChange={handleChangeSubscribed}
          />
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor={id}>
            Also send me the latest offers and tech info, you can unsubscribe at
            any time.
          </label>
        </Styled.CheckboxContainer>
        Read our
        <Link href="/">
          <a>privacy policy</a>
        </Link>
      </form>
    </Styled.Container>
  );
}

export default memo(EmailMyBasket);
