import Link from 'next/link';
import Image from 'next/future/image';
import logo from '../../../../public/images/header/header-logo.webp';
import { BasketQuantity, BasketSubtotal } from '../../../features/basket';
import { Account, Basket } from '../../icons';
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
          <Link href="/account" passHref>
            <Styled.Link aria-label="Account" title="Account">
              <Account width={32} height={30} />
              <Styled.TextContainer>
                <Styled.TopText>Account</Styled.TopText>
                <div>Sign in | Register</div>
              </Styled.TextContainer>
            </Styled.Link>
          </Link>
          <Link href="/basket" passHref>
            <Styled.Link aria-label="Basket" title="Basket">
              <BasketQuantity />
              <Basket width={34} height={30} />
              <Styled.TextContainer>
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
