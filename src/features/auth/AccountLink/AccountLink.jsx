import Link from 'next/link';
import {
  Link as StyledLink,
  TextContainer,
} from '../../../components/common/Header/styles';
import { Account } from '../../../components/icons';
import { useUI } from '../../../contexts/UIContext';
import useSession from '../../../hooks/useSession';

export default function AccountLink() {
  const { handleOpenModal } = useUI();
  const { user, isAuthenticated } = useSession();

  const content = (
    <>
      <Account width={32} height={30} />
      <TextContainer id="account-link">
        <span className="title">Account</span>
        <span className="text">
          {isAuthenticated
            ? `Hello, ${user.fullName.split(' ')[0]}`
            : 'Sign in | Register'}
        </span>
      </TextContainer>
    </>
  );

  return isAuthenticated ? (
    <Link href="/user/account" passHref>
      <StyledLink title="Account" aria-labelledby="account-link">
        {content}
      </StyledLink>
    </Link>
  ) : (
    <StyledLink
      as="button"
      type="button"
      title="Account"
      aria-labelledby="account-link"
      onClick={handleOpenModal}
    >
      {content}
    </StyledLink>
  );
}
