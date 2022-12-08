import Link from 'next/link';
import { useSelector } from 'react-redux';
import * as Styled from '../../../components/common/Header/styles';
import { Account } from '../../../components/icons';
import { useUI } from '../../../contexts/UIContext';
import { selectAuth } from '../authSlice';

export default function AccountLink() {
  const { handleOpenModal } = useUI();
  const { user, isAuthenticated } = useSelector(selectAuth);

  const content = (
    <>
      <Account width={32} height={30} />
      <Styled.TextContainer id="account-link">
        <Styled.TopText>Account</Styled.TopText>
        <Styled.Text>
          {isAuthenticated
            ? `Hello, ${user.fullName.split(' ')[0]}`
            : 'Sign in | Register'}
        </Styled.Text>
      </Styled.TextContainer>
    </>
  );

  return isAuthenticated ? (
    <Link href="/user/account" passHref>
      <Styled.Link title="Account" aria-labelledby="account-link">
        {content}
      </Styled.Link>
    </Link>
  ) : (
    <Styled.Link
      as="button"
      title="Account"
      aria-labelledby="account-link"
      onClick={handleOpenModal}
    >
      {content}
    </Styled.Link>
  );
}
