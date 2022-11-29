import Image from 'next/future/image';
import Link from 'next/link';
import logo from '../../../../public/images/header/header-logo.webp';
import { AccountLink } from '../../../features/auth';
import { BasketQuantity, BasketSubtotal } from '../../../features/basket';
import { Basket } from '../../icons';
import SearchInput from './SearchInput';
import * as Styled from './styles';

export default function Header() {
  return (
    <Styled.Header>
      <Styled.Container>
        <Styled.Wrapper>
          <Image src={logo} alt="PC-Connect.co.uk" />
        </Styled.Wrapper>
        <SearchInput />
        <Styled.LinksContainer>
          <AccountLink />
          <Link href="/basket" passHref>
            <Styled.Link title="Basket" aria-labelledby="basket-link">
              <BasketQuantity />
              <Basket width={34} height={30} />
              <Styled.TextContainer id="basket-link">
                <Styled.TopText>Basket</Styled.TopText>
                <BasketSubtotal />
              </Styled.TextContainer>
            </Styled.Link>
          </Link>
        </Styled.LinksContainer>
      </Styled.Container>
    </Styled.Header>
  );
}
