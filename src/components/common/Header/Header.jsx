import Link from 'next/link';
import Image from 'next/future/image';
import logo from '../../../../public/images/header/header-logo.webp';
import { BasketQuantity, BasketSubtotal } from '../../../features/basket';
import { useUI } from '../../../contexts/UIContext';
import { Account, Basket } from '../../icons';
import SearchInput from './SearchInput';
import * as Styled from './styles';

export default function Header() {
  const { handleOpenModal } = useUI();

  return (
    <Styled.Header>
      <Styled.Container>
        <Styled.Wrapper>
          <Image src={logo} alt="PC-Connect.co.uk" />
        </Styled.Wrapper>
        <SearchInput />
        <Styled.LinksContainer>
          <Styled.Link
            as="button"
            title="Account"
            aria-labelledby="account"
            onClick={handleOpenModal}
          >
            <Account width={32} height={30} />
            <Styled.TextContainer>
              <Styled.TopText id="account">Account</Styled.TopText>
              <div>Sign in | Register</div>
            </Styled.TextContainer>
          </Styled.Link>
          <Link href="/basket" passHref>
            <Styled.Link title="Basket" aria-labelledby="basket">
              <BasketQuantity />
              <Basket width={34} height={30} />
              <Styled.TextContainer>
                <Styled.TopText id="basket">Basket</Styled.TopText>
                <BasketSubtotal />
              </Styled.TextContainer>
            </Styled.Link>
          </Link>
        </Styled.LinksContainer>
      </Styled.Container>
    </Styled.Header>
  );
}
