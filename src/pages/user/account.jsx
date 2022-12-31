import Head from 'next/head';
import { useState } from 'react';
import styled from 'styled-components';
import { ChangePassword, EditDetails } from '../../components/account';
import { LoadingSpinner } from '../../components/ui';
import { useSession } from '../../hooks';

const MENU_TABS = ['Account Details', 'Change Password', 'Edit Details'];

export default function Account() {
  const [activeTab, setActiveTab] = useState('Account Details');
  const { user, isLoading } = useSession({
    redirectTo: '/',
  });

  const handleSetActiveTab = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <Head>
        <title>Your Account | PC Connect</title>
      </Head>
      <Section>
        <h1>Your Account</h1>
        <Container>
          {isLoading || !user ? (
            <LoadingSpinner size={40} color="black" />
          ) : (
            <>
              <List>
                {MENU_TABS.map((tab) => (
                  <li key={tab}>
                    <Button
                      isActive={tab === activeTab}
                      onClick={() => handleSetActiveTab(tab)}
                    >
                      {tab}
                    </Button>
                  </li>
                ))}
              </List>

              <div className="menu-tab">
                {activeTab === 'Account Details' ? (
                  <div>Account Details</div>
                ) : activeTab === 'Change Password' ? (
                  <ChangePassword />
                ) : (
                  <EditDetails />
                )}
              </div>
            </>
          )}
        </Container>
      </Section>
    </>
  );
}

const Section = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 10px;
  row-gap: 15px;

  > h1 {
    font-family: 'Uni Sans', sans-serif;
    font-size: ${({ theme }) => theme.fontSizes[32]};
    font-weight: 600;
  }
`;

const Container = styled.div`
  --border-color: ${({ theme }) => theme.colors.stone[300]};

  border: 1px solid var(--border-color);
  background-color: white;
  display: flex;
  flex-direction: column;
  min-height: 600px;
  width: min(800px, 100%);
  position: relative;

  .menu-tab {
    padding: 40px;
    flex: 1;
  }

  @media ${({ theme }) => theme.breakpoints.tabletSm} {
    flex-direction: row;
  }
`;

const List = styled.ul`
  border-bottom: 1px solid var(--border-color);
  display: flex;
  list-style: none;

  > li {
    flex-grow: 1;
  }

  > li + li {
    border-left: 1px solid var(--border-color);
  }

  @media ${({ theme }) => theme.breakpoints.tabletSm} {
    border-right: 1px solid var(--border-color);
    border-bottom: none;
    flex-direction: column;

    > li {
      flex-grow: 0;
    }

    > li + li {
      border-left: none;
    }
  }
`;

const Button = styled.button`
  border-bottom: 3px solid transparent;
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSizes[16]};
  letter-spacing: 0.5px;
  padding: 20px;
  text-shadow: ${(props) =>
    props.isActive && '-0.05ex 0 0 currentColor, 0.05ex 0 0 currentColor'};
  width: 100%;

  &:hover {
    border-color: var(--border-color);
    background-color: ${({ theme }) => theme.colors.neutral[100]};
  }

  && {
    background-color: ${({ isActive }) => isActive && 'white'};
    border-color: ${({ theme, isActive }) =>
      isActive && theme.colors.stone[500]};
  }

  @media ${({ theme }) => theme.breakpoints.tabletSm} {
    border-bottom: none;
    border-left: 3px solid transparent;
    text-align: left;
    min-width: 220px;
  }
`;
