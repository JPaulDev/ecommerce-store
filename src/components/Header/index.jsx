import useMediaQuery from '../../hooks/useMediaQuery';
import logo from '../../assets/images/header/header-logo.webp';
import { ReactComponent as AccountIcon } from '../../assets/svg/account.svg';
import { ReactComponent as BasketIcon } from '../../assets/svg/basket.svg';
import BasketLinkSubtotal from '../../features/basket/BasketLinkSubtotal';
import SearchInput from './SearchInput';
import * as Styled from './styles';

export default function Header() {
  const isMatch = useMediaQuery('(min-width: 590px)');

  return (
    <Styled.Header>
      <Styled.Container>
        <Styled.HeaderLogo
          src={logo}
          alt="PC-Connect.co.uk"
          width={153}
          height={32}
        />
        <SearchInput />
        <Styled.LinksContainer>
          <Styled.Link href="" aria-label="Account" title="Account">
            <AccountIcon width={32} height={30} fill="var(--color-orange-1)" />
            {isMatch && (
              <div>
                <Styled.TopText>Account</Styled.TopText>
                <span>Sign in | Register</span>
              </div>
            )}
          </Styled.Link>
          <Styled.Link href="" aria-label="Basket" title="Basket">
            <BasketIcon width={34} height={30} fill="var(--color-orange-1)" />
            {isMatch && (
              <div>
                <Styled.TopText>Basket</Styled.TopText>
                <BasketLinkSubtotal />
              </div>
            )}
          </Styled.Link>
        </Styled.LinksContainer>
      </Styled.Container>
    </Styled.Header>
  );
}
