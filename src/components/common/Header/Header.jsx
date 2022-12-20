import Image from 'next/future/image';
import Link from 'next/link';
import { useState } from 'react';
import logo from '../../../../public/images/header/header-logo.webp';
import { AccountLink } from '../../../features/auth';
import { BasketQuantity, BasketSubtotal } from '../../../features/basket';
import { Basket, Search } from '../../icons';
import { LabelledInput } from '../../ui';
import * as Styled from './styles';

export default function Header() {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleChangeQuery = (e) => setQuery(e.target.value);
  const handleChangeFocus = () => setIsFocused(!isFocused);

  return (
    <Styled.Header>
      <Styled.Container>
        <Image src={logo} alt="PC-Connect.co.uk" />

        <Styled.Form
          role="search"
          action="/search"
          method="get"
          isFocused={isFocused}
        >
          <LabelledInput
            label="Search:"
            hideLabel
            inputStyles={Styled.inputStyles}
            name="searchQuery"
            type="search"
            placeholder="Search PC-Connect.co.uk..."
            maxLength="50"
            required
            aria-required
            onChange={handleChangeQuery}
            onFocus={handleChangeFocus}
            onBlur={handleChangeFocus}
            value={query}
          />
          <Styled.SearchButton title="Search" aria-label="Search" type="submit">
            <Search width={30} height={30} />
          </Styled.SearchButton>
        </Styled.Form>

        <Styled.LinksContainer>
          <AccountLink />
          <Link href="/basket" passHref>
            <Styled.Link title="Basket" aria-labelledby="basket-link">
              <BasketQuantity />
              <Basket width={34} height={30} />
              <Styled.TextContainer id="basket-link">
                <span className="title">Basket</span>
                <BasketSubtotal />
              </Styled.TextContainer>
            </Styled.Link>
          </Link>
        </Styled.LinksContainer>
      </Styled.Container>
    </Styled.Header>
  );
}
